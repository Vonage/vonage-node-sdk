import expect from 'expect.js';

class NexmoStub {
  
  static create(apis) {
        
    var stub = {
      initialize: function() {},
      hasBeenCalled: function(name) {
        return this[name + '_called'] === true;
      }
    };
    apis.forEach(function(functionName) {
      stub[functionName + '_called'] = false;
      stub[functionName] = function() {
        this[functionName + '_called'] = true;
      };
    });
    return stub;
    
  }
  
  static checkAllFunctionsAreDefined(functions, obj) {
    functions.forEach(function(functionName) {
      expect(obj.prototype[functionName]).to.be.a('function');
    });
  }
  
  static checkAllFunctionsAreCalled(functions, objDef) {
    functions.forEach(function(functionName) {
      var stub = NexmoStub.create(functions);
      var obj = new objDef({key:'test', secret:'test'}, {nexmoOverride: stub});
      
      obj[functionName]();
      
      expect( stub.hasBeenCalled(functionName) ).to.be(true);
    });
  }
    
}

export default NexmoStub;
