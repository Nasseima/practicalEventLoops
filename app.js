//Part 1
//Declare a counter variable
let counter = 0 
//increment
const incrementsVariable = (()=>{
    counter++;
    try {
       incrementsVariable();
    } catch (error){
        console.error("Stack overflow error caught", error);
         console.log("Number of recursive calls before stack overflow:", counter);
    }
}) 

incrementsVariable()

// Part two : Flatten an array
let arr = [
    ["soup", "burger"],
    ["fries", "eggs"],
    ["cake","fruits"]
];
function recursiveFunction(str){
    let flattenedArr = [];
    for(let i = 0; i < str.length; i++){
        if(Array.isArray(str[i])){
              flattenedArr = flattenedArr.concat(recursiveFunction(str[i]));      
            } else {
                flattenedArr.push(str[i]);  
            }
    }
    return flattenedArr
}
console.log(recursiveFunction(arr))

// Another solution to Part two

function flattenedArray(arr){
    const flattened = [];

    function dfs(index, currentArray){
        if(index === currentArray.length)return

        if(Array.isArray(currentArray[index])) {
            dfs(0, currentArray[index]);
        }

        if (
        typeof currentArray[index] === 'number' ||
        typeof currentArray[index] === "string"
    ) {
        flattened.push(currentArray[index]);
    }
    dfs(index + 1, currentArray)
    }

    dfs(0, arr)

    return flattened
}

console.log(flattenedArray([1, 2, 3, [], [4, 5, 6, [7, 8, 9]]]))




//Part 3
// const body = document.querySelector("body");
// const textElement = document.createElement("h1");
// body.appendChild(textElement)

// let num = 2
// function primeNumbers(n){
//     for (let i = 0; i > n; i++);
//         let value = (num[i]);
//         if (n >= 2){
            
//         }
// }


