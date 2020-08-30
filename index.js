//固定某个函数的一些参数,得到该函数剩余参数的一个函数,若没有参数则执行该函数

function sum( x , y ,z){
      return ( x + y)*z
}
function curry(func){
    var firstArgs = Array.prototype.slice.call(arguments,1);
    var len = func.length;
    var _this= this;

    return function(){
        var args = Array.prototype.slice.call(arguments,0);
        var totalArgs = firstArgs.concat(args);

        if( totalArgs.length >= len ){
            return func.apply(null,totalArgs)
        }else{
            totalArgs.unshift(func)
            return  curry.apply( _this ,totalArgs)
        }
    }
}

var y = curry( sum,5,5,6);
console.log( y(1) )
