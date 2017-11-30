import expect from "expect.js";

class NexmoStub {
  static create(functions) {
    var stub = {
      initialize: function() {},
      hasBeenCalled: function(name) {
        return this[name + "_called"] === true;
      }
    };
    functions.forEach(function(name) {
      stub[name + "_called"] = false;
      stub[name] = function() {
        this[name + "_called"] = true;
      };
    });

    return stub;
  }

  /**
   * @param {Object} mappings - a mapping from legacy global function to
   *                  new non-global name.
   */
  static checkAllFunctionsAreDefined(mappings, obj) {
    Object.keys(mappings).forEach(function(originalName) {
      var newName = mappings[originalName].split("|")[0];
      expect(obj.prototype[newName]).to.be.a("function");
    });
  }

  /**
   * @param {Object} mappings - a mapping from legacy global function to
   *                  new non-global name.
   */
  static checkAllFunctionsAreCalled(mappings, ObjDef) {
    Object.keys(mappings).forEach(function(originalName) {
      var nameAndParams = mappings[originalName].split("|");
      var newName = nameAndParams[0];
      var params = nameAndParams[1] ? nameAndParams[1].split(",") : [];
      params.forEach(function(paramValue, index) {
        try {
          params[index] = JSON.parse(paramValue);
        } catch (e) {
          // couldn't be parsed, which is fine.
          // console.log('could not parse', paramValue);
        }
      });

      var stub = NexmoStub.create(Object.keys(mappings));
      var obj = new ObjDef(
        {
          apiKey: "test",
          apiSecret: "test"
        },
        {
          nexmoOverride: stub
        }
      );

      // console.log('calling', newName, '(' + params + ')', 'expecting', originalName);
      obj[newName].apply(obj, params);

      expect(stub.hasBeenCalled(originalName)).to.be(true);
    });
  }
}

export default NexmoStub;
