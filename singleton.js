var mySingleton = (function() {
    var instance;
    function addNumber() {
        var number = 0;
        return {
        setNumber : function(x) {
            number = x;
        },
        getNumber : function() {
            return number;
        }
      };
    }
  
    return {
        getInstance : function() {
        if (!instance) instance = addNumber();
        return instance;
      }
    }
  })();
  
    var instA = mySingleton.getInstance();
  console.log("instance A: ", instA.getNumber()); 
    instA.setNumber(10);
  console.log("instance A: ", instA.getNumber()); 

    var instB = mySingleton.getInstance();
  console.log("instance B: ", instB.getNumber());

//  console.log(instA === instB);