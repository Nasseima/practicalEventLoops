//Declare a counter variable
let counter = 0 
//increment
const incrementsVariable = (()=>{
    try {
        counter = counter++
       console.log(counter) 
    } catch (error){
        console.error(error, counter)
    }
}) 

incrementsVariable()