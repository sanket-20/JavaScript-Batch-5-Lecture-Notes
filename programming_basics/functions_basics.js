// // TNRN

// //Function defination
function add()
{
    var a=5, b=6;
    console.log("Addition of a and b is",a+b);
    console.log("Addition of", a,"and",b,"is",a+b);

    // template/string literals
    console.log(`Addition of ${a} and ${b} is ${a+b}.`);
}

// add();//function calling
// add();


// TSRN
// function add(a, b)
// {
//     console.log(a+b);
// }
// add(5,4);
// add(4,9);


// TNRS
// function add()
// {
//     var a = 6;
//     var b = 9;
//     // var c = a+b;
//     // return c;
//     return a+b;
// }

// var ans = add();
// console.log(ans);



// TSRS 
// function add(a, b)
// {
//     return a+b;
// }

// var ans = add(100, 100);
// console.log(ans);




/* Function in js
	=> Function statement
	=> Function Expression
	=> Named Function Expression
	=> IIFE
	=> Arrow Function
*/

// Function statement
function add(a, b)
{
    return a+b;
}


//Function Expression

// var add = function(a,b)
// {
//     return a+b;
// }
// var ans = add(5,6);
// console.log(ans);



// Named Function Expression

// var add = function x(a,b)
// {
//     return a+b;
// }
// var ans = add(5,11);
// console.log(ans);

// IIFE => Imediately Invoked Funtion Execution
// (function(){
//     console.log("IIFE Function");
// })()

// var ans=(function(a,b){
//     return a+b;
// })(5,8);

// console.log(ans);


// Arrow Function => ES6
// var add = (a,b) => a+b;
var add = (a,b) => {
	return a+b;
	// console.log("hello");
};
var ans = add(14, 6);
console.log(ans);

// normal func vs arrow fun

