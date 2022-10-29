//example1:

// let sayName= function(name){
//     console.log(`Benim adım ${name}`);
// }

// let sayAge=function(age){
//     console.log(`Benim yaşım ${age}`);
// }


// module.exports ={
//     sayName:sayName,
//     sayAge:sayAge
// }


//example2:

const sum = (num1,num2) => num1+num2;
const PI = 3.14;
class someMathObject{
    constructor(){
        console.log('object creat')
    }
}

module.exports ={sum:sum, PI:PI, someMathObject:someMathObject}

