//value of my age is 35 
const myAge= 35;

//setting a variable that will change
let earlyYears= (2 * 10.5);//using multiply operatr and reassing to 10.5 to earlyYears
//setting later years by subtracting 35 -2
let laterYears= 33 *4; //multiply variable by 4

console.log(earlyYears, laterYears);
//adding earlyYears and laterYears
let myAgeInDogYears= earlyYears + laterYears;
let myName= 'Jessica';//write my name as a string
myName.toLowerCase();// lowercase method returning string with all lower case letters
//use string interpolation to display the value
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);