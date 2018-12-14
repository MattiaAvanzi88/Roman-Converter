// the function that makes the conversion.
// Given a map of symbols it return an array of integers
// that represents the sequence of Roman character that compose
// the input integer.
function converter(number,map) {

    //check if the input is a positive integer
    if( number < 1 && !Number.isInteger(number))
        return -1;

    //define the result array
    //copy the input in a local variable
    let result= [];    
    let num = number;
    const keys = Object.keys(map)
                .map((el) => Number(el))
                .sort( (a,b) => b-a );
    
    for(let i=0; i<keys.length; i++) {

      if( num === keys[i]) {
          result.push(keys[i]);
          break;
      }

      while(num >= keys[i]) {
        result.push(keys[i]);
        num -= keys[i];
      }
    }
    
    return result; 
}

//export the function with the partial application
//of a conversion map 
export default function romanConverter(map) {
    return (num) => converter(num,map);
} 