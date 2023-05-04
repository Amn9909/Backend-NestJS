async function demoFunction() {
    console.log("inside the Async fucntion block");
    const response = await fetch('https://api.github.com/user');
    console.log("before data reccived !");
    const rsult = await response.json();
    console.log("after conversion to json file ");
    return rsult
}

console.log("before calling fumction");
let tempResult = demoFunction();
console.log("after calling fumction");
console.log(tempResult);

