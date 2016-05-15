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
    
}

export default NexmoStub;
