function fizzBuzz(number) {
    if (number % 3 === 0 && number % 5 === 0) {
      console.log('FizzBuzz');
    } else if (number % 3 === 0) {
      console.log('Fizz');
    } else if (number % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log('Pop');
    }
  }
  
 
  fizzBuzz(49); 
  fizzBuzz(55);
  fizzBuzz(120);
  fizzBuzz(9999);

//

  function averager(arr) {
    if (arr.length === 0) {
      return 0; 
    }
  
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  
    return sum / arr.length;
  }
  
  const prices = [12.99, 17.75, 88.12, 111.11, 77.09, 53.45];
  let result = averager(prices);
  console.log(result);

  //

  function celToFah(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    return parseFloat(fahrenheit.toFixed(2));
  }
  
  function celToKel(celsius) {
    const kelvin = celsius + 273.15;
    return parseFloat(kelvin.toFixed(2));
  
  console.log(celToFah(37.5));
  console.log(celToFah(-40));
  console.log(celToKel(173.13));

  //

  function pow(base, exponent) {
    if (exponent === 0) {
      return 1;
    }
  
    let result = base;
    for (let i = 1; i < Math.abs(exponent); i++) {
      result *= base;
    }
  
    if (exponent < 0) {
      return 1 / result;
    }
  
    return result;
  }
  
  console.log(pow(2, 3));
  console.log(pow(2, -3));}
