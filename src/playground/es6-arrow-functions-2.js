//argument object-no longer bound with arrow functions
const add =(a, b)=>{
    return a + b;

};
console.log(add(20, 33))

//"this" keyword-no longer bound to arrow functions
const user ={
    name:"Nally",
    cities: ["Nairobi","Kitale","Lodwar"],

    printPlacesLived (){
      return this.cities.map((city)=> this.name +' has lived in '+city);

    //     this.cities.forEach((city)=>{
    //         console.log(this.name + '  has lived in ' + city);
    //     });
    }
};
console.log(user.printPlacesLived());

//CHALLENGE
 
//numbers- array of numbers
//multiplyBy - single number
//multiplied - return the new array where the numbers has already multiplied.

const multiplier = {
    numbers:[10,20,30],
    multiplyBy: 3,
    multiply(){
        return this.numbers.map((number)=>number* this.multiplyBy);
    }
};
console.log(multiplier.multiply());