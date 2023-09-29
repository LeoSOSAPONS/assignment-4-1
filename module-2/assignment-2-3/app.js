let grades = [56, 87, 99, 40];
grades.push(68);
grades.shift();

let index40 = grades.indexOf(40);
if (index40 !== -1) {
  grades[index40] = 60;
}
let sum = 0;
for (let i = 0; i < grades.length; i++) {
  sum += grades[i];
}
let average = sum / grades.length;

console.log("Updated grades array:", grades);
console.log("Average:", average);

let vehicle = {
  name: "Car",
  brand: "Toyota",
  yearOfMake: 2022,
  numberOfWheels: 4,
  isEnvironmentFriendly: false,
};

for (let key in vehicle) {
  console.log(`${key}: ${vehicle[key]}`);
}
