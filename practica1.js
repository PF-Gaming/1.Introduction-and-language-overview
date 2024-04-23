/*
1) Which ones of the following are valid JS types
¿Cuáles de los siguientes son tipos válidos en JS?
a) number
b) null
c) int
d) array
e) object
f) float
g) undefined
h) string
i) text
j) str
k) function
l) char


2) What is the correct syntax for a function definition in JS?
¿Cuál es la sintaxis correcta sintaxis para la definición de una función en JS?
a) func f() { ... }
b) def f(): ... c) function f() { ... }
d) number function f() { ... }


3) Which of the following are valid repetition forms in JS
¿Cuáles de los siguientes son formas de repetición válidas en JS?
a) for (var i = 0; i < 5; i++) { ... }
b) repeat (5) { ... }
c) foreach elem in array { ... }
d) for (elem in array) { ... }
e) for (elem of array) { ... }
f) for (key in object) { ... }
g) for (elem of object) { ... }
h) foreach i in [1, 2, 3] { ... }
i) while ( condition ) { ... }
j) do ( condition ) while { ... }
k) while ( condition ) do { ... }
l) do { ... } while ( condition )


4) Which of the following are Truthy values?
¿Cuales de los siguientes son valores “verdadosos”?
a) true
b) false
c) “hello”
d) 7
e) -5
f) 0
g) undefined
h) null
i) ““
j) “ “
*/

//Part 2: This part can be performed in a console, such as https://jsconsole.com
//5 Create a variable by the name “a” and assign it the value 5. Then display the variable in the console


let a = 5;
console.log(a);

//6 Create other two variables, “b” and “c”, and assign them the values 6 and 7.

let b = 6;
let c = 7;

//7 Consider the three variables as the sides of a triangle. Write an expression that calculates the
//perimeter of the triangle.

perimetro = a + b + c;
console.log(perimetro);

//8 Write an expression that checks if the variable “b” is between 10 and 30. Change the value of
//the variable and try the expression in different scenarios.

let b = 15;
b > 9 && b < 31 ? "Sip" : "Nop";

//9 Write a function toCelsius(degrees) that takes the temperature as the number of degrees in
//Fahrenheit and returns the same temperature in Celsius. To convert Farenheit to celsius you
//have to subtract 32 and then multiply by 5/9.

let fahrenheit = 88;
let celsius = (fahrenheit - 32) * 5/9;
console.log(celsius);

//10 Create a function isLeap(year) that receives a number that represents a year, such as 2013.
//Then, write an expression that states if the year stored in the variable is a leap year or not. A
//year is a leap if it’s divisible by 4 or by 100, but not by 400.


let year = 2013;
function isLeap(year){
return year % 4 == 0 || year % 100 == 0 && year % 400 != 0;
}
console.log(isLeap(year));

//11 Create the function abs(n) that takes a number and returns the absolute value of the number.

let n = 4
function abs(n){
    if (n < 0){
        console.log(n * -1);
    } else console.log(n);
}

//12 Create a function largest(a, b, c) that takes three numbers and returns the largest number
//between the three.



function largest(a, b, c){
    if (a > b && a > c){
        console.log(a);
    } else if (b > c){
        console.log(b)
    } else console.log(c)
}

//13)Modify the previous function so that the third argument is optional, and it’s only compared if it’s
//not undefined

function largestModified(a, b, c) {
    if (c !== undefined) {
        largest (a, b, c)
    } else if (a > b){
        console.log(a)
    } else console.log(c);
}

//14 Create a function pathJoin(base, folder, os) that takes three strings and returns a path that
//has a valid format according to the “os”. If the “os” is “windows”, then, the base and the folder
//should be joined using “\”. If it’s any other than “windows”, it should be joined through “/”. e.g.
//pathJoin(“Users”, “John”, “window”) should return “Users\John”, and pathJoin(“Users”, “John”,
//“linux”) should return “Users/John”

let base = "Users"
let folder = "Pablo"
let os = "Windows"

function pathJoin(base, folder, os) {
    if (os === "Windows" ){
        console.log(base+"/"+folder);
    } else console.log(base+"\\"+folder);
    
}

pathJoin(base, folder, os)


//15 The strings can be treated as objects, and can respond to the “lenght” message, returning the
//length of the string. e.g. “HELLO”.length returns 5. Also, they respond to the message
//charAt(index) that returns the character at the given index, where indices start at 0. e.g.
//“HELLO”.charAt(0) returns “H”, and “HELLO”.chatAt(2) returns “L”. Try to use this expressions
//in the console.

//16)Using the previously mentioned expressions for strings, write a procedure printLetters(word)
//that takes a string and prints to the console each letter of the word at a time.

let word = "animal"

function printLetters(word){
    for (let i = 0; i < word.length; i++) {
        console.log(word.charAt(i));
      }
}

printLetters(word)

//18  Try in the console the expresion: “1” == 1, and the expression “1” === 1. Analyze the results
//and think about the difference between == and ===.


//19) Write a function arrayFromTo(start, end) that takes two numbers where the second is greater
//than the first, and returns an array that contains each number from the “start” to the “end”
//including both. e.g. arrayFromTo(3, 7) returns [3,4,5,6,7].


function arrayFromTo(start, end){
const arrayX = []
    for (let i = start; i <= end; i++){
        arrayX.push(i);
    }
    console.log(arrayX)
}


//20 Write a function arrayFromToStepping(start, end, step) that takes three numbers where the
//second is greater than the first, and returns an array that contains numbers from the “start” to
//the “end” including both by steps of the given “steps”. e.g. arrayFromToStepping(3, 13, 3)
//returns [3,6,9,12].




//30 Write a function initials(person) that takes a person and returns the initials of the person. e.g.
//initials({ name: “John”, surname: “Doe”, age: 35, address: “Evergreen Ave 743” }) returns
//“J.D.”

let person = new Object();
person.name = "John";
person.surname = "Doe";
person.age = 35;
person.address = "Evergreen Ave 743"

function initials(person){
    const nameInitial = person.name.charAt(0);
    const surnameInitial = person.surname.charAt(0);
    
    return nameInitial+"." + nameInitial+".";
}

console.log(initials(person))

//Entrega 1
//Se pide que escriba la función personasConIniciales(personas, iniciales),
//que dado un array de personas y un String que representa iniciales de una persona,
//describe un nuevo array con todas las personas que tienen esas iniciales.

const people = [
    {name: "Juan", surname: "Pérez", age: 35, adress: "Calle Falsa 123"},
    {name: "Julian", surname: "Perea", age: 25, adress: "Calle Falsa 345"},
    {name: "Mariana", surname: "Pérez", age: 17, adress: "Calle Falsa 123"},
    {name: "Luciano", surname: "Cortéz", age: 41, adress: "Calle Falsa 999"}
 ]

function peopleWithInitials (people, initialLetters) {
   
    let peopleWithInitials = [];
    
    for (let i = 0; i < people.length; i++) {
        
        const nameInitial = people[i].name.charAt(0);
        const surnameInitial = people[i].surname.charAt(0);

        
        if (nameInitial === initialLetters[0] && surnameInitial === initialLetters[2]) {
            peopleWithInitials.push(people[i]);
        }
    }
  
    return peopleWithInitials;
}

const initialLetters = "J.P.";
const peopleFound = peopleWithInitials(people, initialLetters);
console.log(peopleFound);

