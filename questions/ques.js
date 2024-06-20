
// ques1
function fullname(firstName,lastName) {
    return firstName+" "+lastName;
}
console.log(fullname("Luxshayini","Thevapalan"));

// ques2

console.log("There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);

// ques3

console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");

// ques4
// all words seperately
let str = "There is a commonly stated “rule” of grammar that beginning a sentence with and, or any other conjunction, is a mistake. But this is just not true. This supposed “rule” has no basis in actual writing, and even formal writing features plenty of sentences that start with and and other conjunctions. And we think that is really cool. ",
split = str.split(" "),
obj = {};

for (let i = 0;i<split.length;i++){
  if (obj[split[i]]===undefined){
    obj[split[i]]=1;
  } else {
    obj[split[i]]++;
  }
}
console.log(obj)

// 
let text = "There is a commonly stated “rule” of grammar that beginning a sentence with and, or any other conjunction, is a mistake. But this is just not true. This supposed “rule” has no basis in actual writing, and even formal writing features plenty of sentences that start with and and other conjunctions. And we think that is really cool. "
let words = text.replace(/[,.-]/g, '').split(" ");
let array = [];

for (let i = 0; i < words.length; i++) {
  let exists = array.findIndex(a => a.word.toLowerCase() === words[i].toLowerCase());
  if (exists > -1) array[exists].count++;
  else array.push({
    word: words[i],
    count: 1
  });
}
console.log(array);
// QUES5
// 1
const d = new Date();
let year = d.getFullYear();
console.log(year);
// 2
let month = d.getMonth() + 1;
console.log(month);
// 3

let day = d.getDate();
console.log(day);
// 4
console.log(d)

// ques6
// y=mx+c
//y=2x-2
function straightline(m,c){
    const slope = m;
    const yIntercept = c;
    const xIntercept = -c/m;

    return `Slope: ${slope},\n Y-Intercept: ${yIntercept},\n X-Intercept: ${xIntercept}`;
}
   
console.log(straightline(2,-2));


// ques7
// (2,2),(6,10)
function calculateslope(x1,y1,x2,y2){
    const slope1 = (y2-y1)/(x2-x1);
    return `slope:${slope1}`
}
console.log(calculateslope(2,2,6,10));

// ques8
// weeklyearnings=h*rs/h
// const hours = prompt("Enter hours:");
// const rateperHour = prompt("Enter Rate Per Hour:");
// const weeklyearnings = hours * rateperHour;

// alert(`Your weekly earning is ${weeklyearnings}`);

// ques9
// age=current year-birthyear
// const currentyear = new Date().getFullYear();
// const birthyear = prompt("Enter your birth year:");
// const age = currentyear-birthyear;

// if(age >= 18){
//     alert(`You are:${age}. You are old enough to drive.`);
// }else{
//     const wait = 18- age;
// alert(`You are:${age}. You will be allowed to drive after${wait} years.`);
// };


// ques10
const numbers = [1,2,3,4,5,6,7];
const evenNumbers = numbers.filter((number)=>{
  return number%2===0;
});
console.log("Even Numbers:",evenNumbers);

// ques11
const NumBers = [1,2,3,4,5];
const squareNumbers = NumBers.map((number)=>{
  return number * number;
});
console.log("Square Numbers:",squareNumbers);

// ques12
const books = [ 
    {
     title: "To Kill a Mockingbird",
     author: "Harper Lee", 
     genre: "Fiction",
     pages: 336, 
     publication_year: 1925, 
    }, 
    { 
    title: "1984", 
    author: "George Orwell",
    genre: "Dystopian",
    pages: 328, 
    publication_year: 1949,
     }, 
    {
     title: "Pride and Prejudice", 
     author: "Jane Austen",
     genre: "Romance",
     pages: 432, 
     publication_year: 1813,
     }, 
    {
     title: "The Great Gatsby",
     author: "F. Scott Fitzgerald", 
     genre: "Classic", 
     pages: 180,
     publication_year: 1925,
     },
     ];
// map  1.1 
  const titles = books.map((book)=>{
    return book.title
  });
  console.log('Titles:',titles);
// map  1.2
  const author = books.map((book)=>{
    return book.author
  });
  console.log("Authors:",author);
// map 1.3
const titleAuthor = books.map((book)=>{
  return ({title:book.title,author:book.author})
});
console.log("Titles and Authors:",titleAuthor);

// reduce 2.1
const fullPages = books.reduce((sum,book)=>{
  return sum + book.pages;
},0);
console.log("Total Pages:",fullPages)

// reduce2.2
const totalNumberbyPublicationYear = books.reduce((result,books)=>{
  if(typeof result [books.publication_year]==="undefined"){
    result[books.publication_year]=1;
   } else{
      result[books.publication_year]+=1;
    }
    return result;
  
},{});
console.log(totalNumberbyPublicationYear)

// reduce 2.3
const totalNumberbytitles = books.reduce((total,book)=>{
  return total+book.title.length;
  },0);
  console.log("Total number of characters in all book titles:", totalNumberbyPublicationYear);


//filter 3.1
const books100 = books.filter((book)=>{
  return book.pages > 100;
},{});
console.log("Books with more than 100 pages:",books100);

//filter 3.2
const books200 = books.filter((book)=>{
  return book.pages < 200;
},{});
console.log("Books with less than 200 pages:",books200);

//filter 3.3
const fictionBooks = books.filter((book)=>{
  return book.genre === "Fiction";
},{});
console.log("Fiction books:",fictionBooks);

//filter 3.4
const romanceBooks = books.filter((book)=>{
  return book.genre === "Romance";
},{});
console.log("Romance books:",romanceBooks);

// ques13
const greets = name => {
  return(`Welcome ${name} to the team? `)
};

console.log(greets('Ran')); // "Welcome Ryan to the team?"
console.log(greets('Sara')); // "Welcome  Sara to the team?"

// ques14
const litres = time => {
  const water = time*0.5;
  return Math.floor(water);
};

console.log(litres(0)); // 0
console.log(litres(2)); // 1
console.log(litres(1.4)); // 0

// ques15
const positiveSum = arr => {
  return arr.reduce((sum,num)=>{
    return num>0 ?sum+num:sum;
  },0);
};

console.log(positiveSum([1, 2, 3, 4, 5])); // 15
console.log(positiveSum([1, -2, 3, 4, 5])); // 13
console.log(positiveSum([-1, 2, 3, 4, -5])); // 9
console.log(positiveSum([-1, -2, -3, -4, -5])); // 0
console.log(positiveSum([])); // 0

// ques16
// bmi=weight/(height*height)
// const calculateBmi = ()=>{
//   const weight=parseFloat(prompt("Enter your weight in Kg"));
//   const height=parseFloat(prompt("Enter your height in m"));
//   const bmi=weight/(height*height);

//   const group =
//   bmi < 18.5 ? "Under weight" :
//   bmi >= 18.5 && bmi <=24.9 ? "Normal weight":
//   bmi >= 25 && bmi <= 29.9 ? "Over weight":
//   "Obese";
  
//   alert(`Your BMI is:${bmi.toFixed(1)}\nCategory:${group}`)
// };

// calculateBmi();

// ques16 method 2
// const calculateBMI = function(weight, height) {
  
//   const bmi = weight / (height * height);

  
//   const category =
//       bmi < 18.5 ? "Underweight" :
//       bmi >= 18.5 && bmi <= 24.9 ? "Normal weight" :
//       bmi >= 25 && bmi <= 29.9 ? "Overweight" :
//       "Obese";

 
//   return {
//       bmi: bmi.toFixed(1), 
//       category: category
//   };
// };


// console.log(calculateBMI(70, 1.75)); // { bmi: '22.9', category: 'Normal weight' }
// console.log(calculateBMI(85, 1.8)); // { bmi: '26.2', category: 'Overweight' }
// console.log(calculateBMI(55, 1.7)); // { bmi: '19.0', category: 'Normal weight' }
// console.log(calculateBMI(100, 1.65)); // { bmi: '36.7', category: 'Obese' }
// console.log(calculateBMI(45, 1.6)); // { bmi: '17.6', category: 'Underweight' }

// part2
// ques1

let n = -1;
let positiveNegative = n < 0 ? "Negative" : n=0 ? "Zero":"Positive";
console.log(positiveNegative );

// ques2
let n1= 4;
let oddEven = n1%2===0 ? "Even Number" :"Odd Number";
console.log(oddEven);

// ques3
let num1 = 20;
let num2 = 30;
let max = num1>num2 ? num1 : num2;
console.log(`The greater number is:${max}`);

// ques4
let age = 11;
let ticketPrice = age<12 ? "Rs5" : age<18 ? "Rs10" : age<60 ? "Rs20" : "Rs15";
console.log(ticketPrice);

// ques5
let year1 = 2011;
let leapYear = year1%4===0 ? "Leap year" : "Not a leap year";
console.log(leapYear); 

// ques6
let price = 120;
let priceDiscount = price>100 ? 20 : price>= 50 ? 10 : 0;
console.log(priceDiscount);

// ques7
const greetUser = (currentTime)=>{
  const greetings = 
  currentTime >= 5&& currentTime<12? "Good morning":
  currentTime>=12&& currentTime<18 ? "Good afternoon":
  "Good evening";

  console.log(`${greetings},there!`)
};
greetUser(8);
greetUser(15);
greetUser(21);

// ques8
// const playGame = () => {
//   const minNumber = 1;
//   const maxNumber = 100;
//   const secretNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
//   let guess;

//   alert(`Welcome to the Number Guessing Game!\nI'm thinking of a number between ${minNumber} and ${maxNumber}. Can you guess it?`);

//   while (true) {
//       guess = parseInt(prompt(`Enter your guess (between ${minNumber} and ${maxNumber}):`));

//       const message = 
//           isNaN(guess) || guess < minNumber || guess > maxNumber ? 
//           `Please enter a valid number between ${minNumber} and ${maxNumber}.` :
//           guess < secretNumber ? `Too low! Try guessing higher.` :
//           guess > secretNumber ? `Too high! Try guessing lower.` :
//           `Congratulations! You've guessed the correct number ${secretNumber}!`;

//       alert(message);

//       if (guess === secretNumber) {
//           break;
//       }
//   }

//   alert(`Thank you for playing!`);
// };


// playGame();

// loop
// ques1
for (let i = 0;i<=5;i++){
  console.log(i);
};

// ques2
let sum=0;
for(let i=0;i<100;i++){
  sum+=i;

}
console.log(sum);

// ques3
let sum1=0;
for(let i=10;i<=100;i+=2){
  sum+=i;
}
console.log(sum);

// ques4
let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
arr.reverse().forEach(element => console.log(element));

// loop ques5
let arr_3   = [4, 6, 7];
let arr_4    = [8, 1, 9];
let result1=[];

for(let i=0;i<arr_3.length;i++){
  result1.push(arr_3[i]+arr_4[i]);
}
console.log(result1);

// loop ques6
let str1 = "javascript";
let result = "";

for (let i = 0; i < str1.length; i++) {
    result+= ((i + 1) % 2 == 0) ? "Z" : str1[i];
        
    }
console.log(result);

// loop ques7
let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];
let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];

let sum_1 = 0;
for (let i = 0; i < arr_1.length; i++) {
    sum_1 += arr_1[i];
}

let sum2 = 0;
for (let i = 0; i < arr_2.length; i++) {
    sum2 += arr_2[i];
}

let totalSum = sum_1 + sum2;

console.log(`${sum_1} + ${sum2} = ${totalSum}`); 