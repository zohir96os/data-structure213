//Challnege - 1
function even(arr) {
  let evenNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNumbers.push(arr[i]);
    }
  }
  return evenNumbers;
}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(even(numbers));
//Challnege - 2
function overThirty(persons) {
  let over30 = [];
  for (let i = 0; i < persons.length; i++) {
    if (persons[i].age > 30) {
      over30.push(persons[i].age);
    }
  }
  return over30;
}
let persons = [
  {
    name: "zohir",
    age: 28,
    email: "zohir@menubar.com",
  },
  {
    name: "ahmed",
    age: 38,
    email: "ahmed@menubar.com",
  },
  {
    name: "karim",
    age: 42,
    email: "karim@menubar.com",
  },
];
console.log(overThirty(persons));
//Challnege - 3
let arr = ["Algeria", "Albania", "Qater", "USA"];

arr.push("Niger");

arr.shift();
//Challnege - 4
function removeVowels(str) {
  const regex = /[aeiou]/gi;
  let withoutVowels = str.replace(regex, "");
  return withoutVowels;
}
let str = "Hello from JavaScript";
console.log(removeVowels(str));
