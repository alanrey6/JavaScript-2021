// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/* const x = '23';
if (x === 23) console.log(23);

const calcAge = birthYear => 2037 - birthYear;

console.log(); */

/* const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    // C) FIX
    // value: Number(prompt('Dregrees celsius')),
    value: 10,
  };

  console.log(measurement);
  console.table(measurement);

  //   console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) INDENTIFY
console.log(measureKelvin());

// Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  debugger;
  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// A) IDENTIFY
console.log(amplitudeBug); */

const printForecast = function (arr) {
  let forecast = '... ';
  for (let i = 0; i < arr.length; i++) {
    forecast += ` ${arr[i].toString()}C in ${arr.indexOf(arr[i]) + 1} days ...`;
  }
  return forecast;
};

console.log(printForecast([17, 21, 23]));
console.log(printForecast([12, 5, -5, 0, 4]));

// Understand the problem
// Array transformed to string, seperated by ...
// What is the X days

// Break up into sub problems
// Transform array into string
// Transform each element to string with C
// String needs to cntain day (index + 1)
// Add ... between elements and start and end of string

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast2 = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]} C`;
  }

  console.log(str);
};

printForecast2(data1);
