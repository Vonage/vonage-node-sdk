import expect from "expect.js";

class NexmoStub {
  static create(functions) {
    let stub = {
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
      let newName = mappings[originalName].split("|")[0];
      expect(obj.prototype[newName]).to.be.a("function");
    });
  }

  /**
   * @param {Object} mappings - a mapping from legacy global function to
   *                  new non-global name.
   */
  static checkAllFunctionsAreCalled(mappings, ObjDef) {
    Object.keys(mappings).forEach(function(originalName) {
      let nameAndParams = mappings[originalName].split("|");
      let newName = nameAndParams[0];
      let params = nameAndParams[1] ? nameAndParams[1].split(",") : [];
      params.forEach(function(paramValue, index) {
        try {
          params[index] = JSON.parse(paramValue);
        } catch (e) {
          // couldn't be parsed, which is fine.
          // console.log('could not parse', paramValue);
        }
      });

      let stub = NexmoStub.create(Object.keys(mappings));
      let obj = new ObjDef(
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
