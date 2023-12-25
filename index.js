//Problem 1: Currying
function evaluate(operation){
    return (a)=>{
        return (b)=>{
            if(operation=="mul"){
            return a*b;
            }
            else if(operation=="sum"){
                return a+b;
            }
            else if(operation=="sub"){
                return a-b;
            }else if(operation=="div"){
                return a/b;
            }else{
                return "Invalid Operation";
            }
        }
    }
}
console.log(evaluate("muls")(3)(4));

//Problem 2: Infinite Currying - Evaluation
function multiply(a){
    return (b)=>{
        if(!b){
            return a;
        }
        return multiply(a*b);
    }

}
const result = multiply(2)(3)(4)(5)();
console.log(result);

//Problem 3: Currying

function sumOfTwoNumbers(a){
    return (b)=>{
        return a+b;
    }
}
console.log(sumOfTwoNumbers(2)(3));

//Problem 4: Flattening an Array (Don't use inbuilt flat method)

function flattenArray(arr){
    //return Array.prototype.concat.apply([], arr);
   // return arr.toString().split(',');
   for (let i= 0; i<arr.length; i++) {
    const element = arr[i];
    if (Array.isArray(element)) {
      arr.splice(i, 1, ...element); // replaces arr[i] with its elements
    }
  }

  return arr;

}
const input = [1, [2, [3, 4], [5, 11, 13, 500]], 6];
const result1 = flattenArray(input);
console.log(result1);






