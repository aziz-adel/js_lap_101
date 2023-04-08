 // next ex(function)/(Parameter)/(Return):
 function printnumbers(X){
   for(let i=1;i<=X;i++){
   console.log(i);
   }
 }
 printnumbers(5);


console.log('---------------------------------------------')



 function add (fnum,scnum){
    let result= fnum+scnum;
    return result;
 }

 let v =add(4,4)-add(2,2);
 console.log(v)

 let l =add('welcome to ','js');
 console.log(l)
 
//quiz
const square = function(number) {
    console.log(number * number)
   }
   square(2)

   function myFunc(number) {
    console.log(number * number)
    return number 
  }
  myFunc(2) 

  function printYourName(name) {
    return "Your name is " + name
}
let functionOutput = printYourName("Reem")
console.log(functionOutput)

function myFunc(number) {
    console.log(`${number} x ${number} = ` + number * number)
    return number * number
  }
  myFunc(2)
