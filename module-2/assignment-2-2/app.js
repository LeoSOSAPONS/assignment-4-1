let q1test = 15;

if (q1test % 3 === 0 && q1test % 5 === 0) {
  console.log(`${q1test} is divisible by both 3 and 5.`);
} else if (q1test % 3 === 0) {
  console.log(`${q1test} is divisible by 3.`);
} else if (q1test % 5 === 0) {
  console.log(`${q1test} is divisible by 5.`);
} else {
  console.log(`${q1test} is not divisible by either 3 or 5.`);
}

let year = 1999;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(`${year} is a leap year.`);
} else {
  console.log(`${year} is not a leap year.`);
}

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 || i % 4 === 0) {
      console.log(i);
    }
  }
  