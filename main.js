let coclr ="green"
console.log(coclr);
console.log(coclr);

color="black";
console.log(color)
// next ex (type of data):
let name ="aziz"
let age =23
 console.log(typeof name)
 console.log(typeof age)

 // next ex (boolean):
 let result = 2>3;
 console.log(result);
  result = 3>2;
 console.log(result);
 console.log(typeof result);

 // next ex (string):
 let massge ='welcome to js ';
 console.log(typeof massge);
 massge ='1234';
 console.log(typeof massge);
 massge =1234;
 console.log(typeof massge);

  // next ex (Template Literals):
let lang ='C++'
let msg =`welcome to ${lang}`
console.log(msg);
// next ex (Undefined):
let n ;
console.log (typeof n)
// next ex (Number):
let value = 5;
console.log(typeof value);

 value = -5;
console.log(typeof value);
value = 2.5;
console.log(typeof value);
// next ex (Nan):
console.log(value * 'js')

// quiz:
let valOne = 100 >= 20
let valTwo = 10 >= 20
console.log(valOne == valTwo)

let phoneNumber = "0555";
console.log(typeof phoneNumber)

// next ex (String Length):
let tex = "roianhfgioanr"
console.log(tex.length)

// next ex (String Concatenation):
let a = 'welcome to ';
let b= 'my website';
console.log(a+b);
a = 'welcome to ';
 b= 'my website'+a;
 console.log(a+b);

 // next ex (Bracket Notation):
 let bre='javascript';
 console.log (bre[4]);

 //quiz
 let greeting = "Hello"
 name = "Mariam";
let message = `${greeting}
${name}!`;
console.log(message);

 // next ex (Array):
 let colors = ["red", "green", "blue"];
 console.log(colors);
 console.log(colors[0]);

 
 // next ex (update index in Array):
 colors[1]='black';
 console.log(colors);

  // next ex (Array Length):
  console.log(colors.length)

   // next ex (Includes):
   console.log(colors.includes('red'));
   console.log(colors.includes('gry'));

    // next ex (Unshift):
    colors.unshift('blue');
    console.log(colors);

    // next ex (Shift):
    colors.shift();
    console.log(colors);
    colors.shift();
    console.log(colors);
    const redcolor = colors.shift();
    console.log(redcolor);

      // next ex (Push):
      colors.push('white')
      console.log(colors);

       // next ex (Pop):
       colors.pop('red')
       let redpop = colors.pop();
       console.log(redpop)
      
        // next ex (IsArray):
        console.log(Array.isArray(colors))

        // next ex (2D Array):
        const valu = [[1,2,3],true , 'js'];
       console.log(valu[0])
       console.log(valu[0][1])

       const arry =[
        [1,2,3],
        [4,5,6],
        [7,8,9]
       ]
       console.log(arry[1][1])

        // next ex (Split Method):
        let me = 'welcome to js'
        let res = me.split(' ')
        console.log(res)


          // next ex (Join Method):
        let mes = ['welcome','to','js',]
        res = mes.join(' ')
        console.log(res)

         //quiz
         let computerAccessories = ["Monitor","Trackpads", "Keyboard"];
         computerAccessories[1] = "Mouse";
         console.log(computerAccessories);

         // next ex (if)and (else):
         let ag=15;
         if (ag <12){
            console.log('sorry')
         }
         else {
            console.log('welcome')
        }

         // next ex(Switch):
         const colr_arry =['red','green','blue'];
         let cNum=1;

         switch(cNum){
            case 33:
                console.log(colr_arry[0])
            break;
            
            case 2:
                console.log(colr_arry[1])
            break;

            case 3:
                console.log(colr_arry[2])
            break;
            // next ex(Default Case):
            default:
                console.log('white')
            break;
         }


        
