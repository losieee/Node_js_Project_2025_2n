const {add} = require("./math.js");

//변수 선언
let num = 42;
var name = "Tom";
let isStudent = true;

console.log(add(num, num));

let color = ["red", "green", "blue"];

let person = { name : "Alice ", age : 30};

function greet(name)
{
    console.log("Hello " + name + " ! ");
}

greet(person.name);


//조건문
if(num > 30)
{
    console.log("Number is greater than 30");
}
else
{
    console.log("Number is lower than 30");
}



//반복문
for(var i = 0; i < 5; i++)
{
    console.log(i);
}

//비동기 콜백
setTimeout (() => {
    console.log("Delayed Message 2");
}, 1000);


setTimeout (() => {
    console.log("Delayed Message 4");
}, 750);


setTimeout (() => {
    console.log("Delayed Message 1");
}, 2000);


setTimeout (() => {
    console.log("Delayed Message 3");
}, 500);
