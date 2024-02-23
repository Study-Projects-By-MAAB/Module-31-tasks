/* 1)
You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
Now convert this array into an even array (array with even
numbers). [ 2, 4, 6, 8, 1O ]. Do this using for loop & array.map()
method. Hints: add one to any odd number and it will become an even
number. */

const array = [1, 3, 5, 7, 9]
let even = []

// for loop
for (const arr of array) {
    even.push(arr + 1)
}
console.log(even);

// array.map()
const evenArray = array.map(n => n + 1)
console.log(evenArray);

// =================================================
/* 2)
You are given an array say: [33, 50, 79, 78, 90, 101, 30] Now
return/get all the elements which are divisible by 1O using
array.filter() method.
Now do the same task of question 2. But do this using array.find
method. Then compare the output of question 2 & question 3. */

const array2 = [33, 50, 79, 78, 90, 101, 30]
const divisible10 = array2.filter(n => n % 10 === 0)
console.log(divisible10);
const divisible10find = array2.find(n => n % 10 === 0)
console.log(divisible10find);
// compare those
console.log(divisible10 === divisible10find);
console.log(typeof divisible10 === typeof divisible10find);

// =================================================
/* 3) You have an array of objects:
const instructor : [
{name: 'Nodi', age:28, position:'Senior'),
{name: 'Akil, age:26, position:'Junior'),
{name: 'Shobuj', age:30, position:'Senior')
Your task is to display the instructor names that has the position
senior using filter */

const instructor = [
    { name: 'Nodi', age: 28, position: 'Senior' },
    { name: 'Akil', age: 26, position: 'Junior' },
    { name: 'Shobuj', age: 30, position: 'Senior' }
]

const filterIns = instructor.filter(p => p.position === 'Senior')
console.log(filterIns);

// =================================================
/* 
const people = [
    { name: 'Meena', age: 20 },
    { name: 'Rina', age: 15 },
    { name: 'Suchorita', age: 22 }
];

1)
Follow above array of objects. So, you have 3 objects as array
element. Can you find out the total sum from here?
20 + 15 + 22 = 57 . frhe output will be 57
What are you thinking? Yeah! Do it with for loop. I know you can do it.
But! Wait !! Wait !!! Do the same task using array.reduce() method. */

const people = [
    { name: 'Meena', age: 20 },
    { name: 'Rina', age: 15 },
    { name: 'Suchorita', age: 22 }
];

// for loop
let sum = 0;
for (const peo of people) {
    sum += peo.age
}
console.log(sum);

// array.reduce
const sum2 = people.reduce((p, c) => p + c.age, 0)
console.log(sum2);
