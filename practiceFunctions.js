//This is a regular function 
//Regu

function sum (a,b) {
    return a + b
}

// Arrow function

let sum2 = (a,b) => {
    return a + b
}

//Since regular functions are constructible, they can be called using the ‘new’ keyword. However, the arrow functions are only ‘callable’ and not constructible. Thus, we will get a run-time error on trying to construct a non-constructible arrow function using the new keyword.