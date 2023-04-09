/*
this project for javascript 101 course
project name : book store 

first, I created a 2d array then 
I made four functions: 
searching for a book by typing the book’s name or author, 
searching for a book by id,
checking the availability of the book, 
and Export an invoice.

 */


//create 2D array 
const storg = 
[[1,'Start with why','Simon Sinek',80.0,13,],
[2,'But how do it know','J. Clark Scott',59.9,22],
[3,'Clean Code','Robert Cecil Martin',50.0,5],
[4,'Zero to One','Peter Thiel',45.0,12],
[5,'You dont know JS','Kyle Simpson',39.9,9]
];
     




 // find book info by ID     
function gitBookTitleByID(ID){
  ID = ID -1
    console.log(
        'Book ID = '+storg[ID][0]+
        '  Book title : ('+storg[ID][1]+
        ') and the author is  '+storg[ID][2]
        
    )
}

 
// find book info by title or author  
 function gitBookTitleByInfo(info){
    for( z=0;z<storg.length;z++){
        if(storg[z].indexOf(info) !== -1){
            console.log(
                'Book ID = '+storg[z][0]+
               '  Book title : ('+storg[z][1]+
               ') and the author is  '+storg[z][2] )

          
        }
     }
     
 }


// chek if the book avilible or not : 
 function checkAvailability(avilible ){
    for( av=0;av<storg.length;av++){
        if(storg[av].indexOf(avilible) !== -1){
            if(storg[av][4]>0){
                    console.log('('+storg[av][1]+') avilible')
                    return true;
                }
                    else if(storg[av][4]<=0){
                        console.log('('+storg[av][1]+') not avilible')
                        return false;
                    }
            }
 }
 }

 
 // Export an invoice  
function makeInvoice (chekit,qunt,wallet){
    if(checkAvailability(chekit) == true){
            for( av=0;av<storg.length;av++){
                
                if(storg[av].indexOf(chekit) !== -1){
            
                    if(storg[av][3]<=wallet){

                        if(storg[av][4]>0){
                        
                        lastq =storg[av][4]
                            newqunt = lastq - qunt;
                            storg[av].pop()
                            if(newqunt<0){
                                console.log('we dont have enough in storg')
                            }
                                else{ 
                                    storg[av].push(qunt)
                                    console.log('sold book : ('+storg[av][1]+
                                    ') Quantity : ('+qunt+')'
                                    +' new Quantity = '+storg[av][4]
                                    )
                                    
                                    
                            }
                                    
                            
                        }
                    }else{console.log('You dont have enough money')}
                }
            }
    }else{console.log('the book not avilible')}
}
   



console.log(storg);
// Export an invoice(info,quantity,wallet) :
makeInvoice('Clean Code',1,88);
 // find book info by ID:  
gitBookTitleByID(2)
// find book by title or author:  
gitBookTitleByInfo('You dont know JS')
// chek if the book avilible or not : 
checkAvailability('Kyle Simpson')