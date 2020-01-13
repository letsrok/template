//=require ../blocks/**/*.js
$(document).ready(()=>{
  function sum(x) {
    var buff = 0;
    
    function f( x ){
      if(x && +x !== undefined) {
      buff += +x;
      return f;
    
      } else {
        return buff;
      }
    }
    
    return f(x);
    }
    
    console.log( sum(1)(2)(-1)(2)(4)(2)(4)());
})
