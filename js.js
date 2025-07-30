let num1= 123
let num2 =84
let sum= num1 + num2
console.log(sum)
let difference = num1 - num2
console.log(difference)
let product = num1 * num2
console.log(product)
let quotient = num1 / num2
console.log(quotient)
let remainder = num1 % num2
console.log(remainder)

let x= 5
let summary= x+=10
console.log(summary)

let value1 = 'henry is a student'
let value2 = 'henry has a library card'
let value3= value1+ ' ' + value2
console.log(value3)

let firstName = 'henry'
let lastName = 'john'
let messsage = `my name is ${firstName} ${lastName}`
console.log(messsage)
let fullName = 'joy';

let fruit =['apple', 'banana', 'orange', 'grape', 'kiwi']
console.log(fruit)
fruit[2]= 'paw-paw'
console.log(fruit)
fruit.push('mango')
console.log(fruit)
fruit.pop()
console.log(fruit)
fruit.unshift('strawberry')
console.log(fruit)
fruit.shift()
console.log(fruit)

for(let i=2; i<=20; i+=7
    
){
    console.log(i)
}

let person1 = {
    name: 'henry',
    age: 25,
    occupation: 'student',
    size:'medium',
    hobbies: ['reading', 'gaming', 'sports'],
    ismarried: false,
    insurance: {
        provider: 'ABC Insurance',
        policyNumber: '123456789',
        coverageAmount: 100000,
    },
};
console.log(person1);
console.log(person1.hobbies[2])
console.log(person1.insurance.provider);







let score = 20;
if (score >= 70) {
    console.log('Grade: A');
}
else if (score >= 60) {
    console.log('Grade: B');
}
else if (score >= 50) {
    console.log('Grade: C');
}
else if (score >= 40) {
    console.log('Grade: D');
}
else if (score < 40 && score >= 30){
    console.log('Grade: E');
}
else {
    console.log('Grade: F');
}


let day = 3;
if( day === 1) {
    console.log('Monday');
}
else if (day === 2) {
    console.log('Tuesday');
}
else if (day === 3) {
    console.log('Wednesday');
}
else if (day === 4) {
    console.log('Thursday');
}
else if (day === 5) {
    console.log('Friday');
}
else if (day === 6) {
    console.log('Saturday');
}
else{
    console.log('Sunday');
}

let drivingAge = 10;
let hasLicense = true;
if (drivingAge >= 18 && hasLicense) {
    console.log('You can drive.');
}
else{
    console.log('if I catch you for road ehh!!.');
}
let age = 20;
let hasLibraryCard = true;
if (age >= 18 && hasLibraryCard) {
    console.log('You are eligible for the program.');
}
else {
    console.log('You are not eligible for the program.');
}

let isRaining = true;
if (!isRaining) {
    console.log('do not Take an umbrella.');
}
else {
    console.log('Take an umbrella.');
}

let workingAge = 17;
let isEmployed = false;
let creditScore = 700;

if ((workingAge >= 18 && creditScore >= 650) ||isEmployed) {
    console.log('You are eligible for the loan.');
}
else {
    console.log('You are not eligible for the loan.');
}


let user = { name: 'henry' };
if (user) {
    console.log(`Welcome, ${user.name}!`);  
}
else{
    console.log('Welcome, Guest!');
}


