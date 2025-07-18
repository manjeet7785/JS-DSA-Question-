
//Question 1
//Log the your name and hobbies

var body = document.querySelector('body')
var hew = document.createElement('h1')
var p = document.createElement('p');


var name = 'Manjeet Kumar Maurya'
var hobbies = "Play with code  " + "Reading Books"
function appenKrna(params) {
  var a = "Manjeet Kumar Maurya"
  hew.innerHTML = a;
  p.innerText = "My hobbies are" + hobbies;
  p.style.color = 'white'
  hew.style.color = 'white'
  body.append(hew, p);
}
appenKrna()
console.log("Manjeet Kumar Maurya");
console.log(hobbies);


// Question num 2

//Perform and the log the result of 45 *2 - 10

var result = document.createElement('h2')

var a = 45;
var b = 2
var c = 10

var question = 'Perform and the log the result of 45 *2 - 10'

var solution = a * b - c;
result.innerText = `Perform and the log the result of 45 *2 - 10  =   ${solution}
`
result.style.color = 'white'

// body.append(question)
body.append(result);
console.log(solution);


//Quetion 3

// use console.log and display the  current year 

var a = new Date();
console.log(a.getFullYear());

var year = '2025';
console.log(year);

//Quetion 4

//Craete two variable and concante them 

var a = "MAnjeet"
var b = "MAurya"


console.log(a + " " + b);

console.log(`${a} ${b}`);


//Quetion 05

//tracking the value of a variable by logging it before and after updating

var value = 12;
console.log(value);

value = 23;
console.log(value);


//Quetion 6

// use error and print some thing
var a = "Hii cuttieesss"
// alert(a)
console.error("Hii cutiii");


// Quetion  7 

// log the square of 12 in the console

var square = '12'
console.log(12 * 12);
console.log(Math.pow(square, 2));


//Question 8

//check the type

var a = 12;
console.log(typeof (a));

a = true;
console.log(typeof (a));

a = "Manjeet"

console.log(typeof (a));

a = " "
console.log(typeof (a));
a = 0.114;
console.log(typeof (a));


// Queston 09

// create a variable holding ur age and log whether it's graeter than 18

var age = 19;
if (age > 18) {
  console.log("Its greater than");
}
else {
  console.log("Smaller");

}

//Quetion 10

// 100/0 and observe the output
var a = 100 / 0
console.log(a);
console.log(typeof (a));













