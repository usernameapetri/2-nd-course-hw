/*
Задание 1 
let a = 10;
a = 20;
alert(a);

Задание 2
const iphoneRelease = 2007;
alert(iphoneRelease);

Задание 3
const founderJs = "Brendan Eich";
alert(founderJs);

Задание 4
let a = 10;
let b = 2;
let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;
alert(`sum is ${sum}`);
alert(`difference is ${difference}`);
alert(`product is ${product}`);
alert(`quotient is ${quotient}`);

Задание 5
let b = 2;
let result = b ** 5;
alert(result);

Задание 6
let a = 9;
let b = 2;
let result = a % b;
alert(result);

Задание 7 
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

Задание 8
let age = Number(prompt(`Солько вам лет ?`));
alert(age);

Задание 9
const user = {
  name: "Octavian",
  age: 25,
  isAdmin: true,
};
user.cityofResidence = "Chisinau";
user.age = 15;
delete user.cityofResidence;
let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);

Задание 10
let name = prompt("Как мне к вам обращаться");
alert(`Привет ${name} !`);
*/

//hw 3

//Задание 1

/*
let password = String("скайпро");
let ceck = String(prompt("Введите пароль"));

ceck === password
  ? alert("Пароль введен верно")
  : alert("Пароль введен неправильно");
*/

//Задание 2
/*
const c = 2;

if (c > 0 && c < 10) {
  console.log("Верно");
} else {
  console.log("Не верно");
}
*/

//Задание 3
/*
const d = 54;
const e = 166;

if (d > 100 || e > 100) {
  console.log("Верно");
} else {
  console.log("Не верно");
}
*/
//Задание 4
/*
let a = "2";
let b = "3";
// Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже:
alert(Number(a) + Number(b));
*/

//Задание 5
/*
let monthNumber = Number(
  prompt("Введите номер месяца и узнайко к какому сезону он принадлежит")
);

if (monthNumber < 13 && monthNumber > 0) {
  switch (monthNumber) {
    case 1:
    case 2:
    case 12:
      alert("Зима");

      break;
    case 3:
    case 4:
    case 5:
      alert("Весна");

      break;
    case 6:
    case 7:
    case 8:
      alert("Лето");

      break;
    case 9:
    case 10:
    case 11:
      alert("Осень");

      break;
  }
} else {
  alert("Вы ввели не правельный номер месяца ");
}
*/
//Задание 7
/*
let a = Number(prompt("Введите чисто"));

if (!isNaN(a)) {
  if (a % 2 === 0) {
    alert("«Число четное»");
  } else {
    alert("«Число нечетное»");
  }
} else {
  console.log(NaN);
}
*/

//Задание 8
/*
let isIOS = 1;

if ((isIOS = 1)) {
  alert("Установите версию приложения для iOS по ссылке.");
} else {
  alert("«Установите версию приложения для Android по ссылке».");
}
/*
if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
  alert("«Установите версию приложения для iOS по ссылке».");
} else {
  alert("«Установите версию приложения для Android по ссылке».");
}



//Задание 9

const clientDeviceYear = 2015;
const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

if (clientDeviceYear <= 2014) {
  if (isIOS) {
    alert("Установите облегченную версию приложения для iOS по ссылке.");
  } else {
    alert("Установите облегченную версию приложения для Android по ссылке.");
  }
} else {
  if (isIOS) {
    alert("Установите версию приложения для iOS по ссылке.");
  } else {
    alert("Установите версию приложения для Android по ссылке.");
  }
}


//hw4

//Задание 1
/*
let a = 0;

while (a < 2) {
  console.log("Привет");
  a++;
}
*/

//Задание 2

/*
let a = 1;

while (a <= 5) {
  console.log(a);
  a++;
}

*/

//Задание 3
/*
for (let i = 7; i < 23; i++) {
  console.log(i);
}

let i = 7;

while (i < 23) {
  console.log(i);
  i++;
} 

*/
//Задание 4
/*
const obj = {
  Коля: 200,
  Вася: 300,
  Петя: 400,
};

for (let key in obj) {
  alert(`${key} -- Зарплата ${obj[key]}`);
}
*/

//Задание 5
/*
let num = 0;
let n = 1000;
while (50 < n) {
  n /= 2;
  num++;
}

console.log(`Число итерации ${num}`);
*/
//Задание 6
/*
for (let a = 2; a < 30; a += 7) {
  console.log(`Сегодня пятница число ${a} Необходимо подготовить отчет.`);
}
*/

//hw5

//Задание 1
/*
const givMinNum = (a, b) => {
  return Math.min(a, b);
};

console.log(givMinNum(6, 9));   


// Решение через if else

const givMinNum = (a, b) => {
  if (a <= b) {
    return a;
  } else {
    return b;
  }
};

console.log(givMinNum(8, 9));


*/

//Задание 2
/*
const givNumParity = (a) => {
  if (a % 2 == 0) {
    return "Число четное ";
  } else {
    return "Число нечетное ";
  }
};

console.log(givNumparity(8));
*/

// Задание 3

//3.1
/*
const printSquareNum = (a) => console.log(a ** 2);
printSquareNum(8);
*/
//3.2
/*
const printSquareNum = (a) => {
  return a ** 2;
};

console.log(printSquareNum(7));
*/

//Задание 4
/*
const sayHello = () => {
  age = prompt("Сколько тебе лет");
  if (age <= 0) {
    alert("Вы ввели неправильное значение");
  } else if (age > 0 && age <= 12) {
    alert("Привет, друг!");
  } else {
    alert("Добро пожаловать!");
  }
};
sayHello(8);
*/

//Задание 5
/*
const sumOfNum = (a, b) => {
  if (isNaN(a) || isNaN(b)) {
    return "Одно или оба значения не являются числом";
  } else {
    return a * b;
  }
};

console.log(sumOfNum());
*/
// Задание 6
/*
const giveCubNum = (a) => {
  a = prompt("Введите число");
  if (!isNaN(a)) {
    return `${a} В кубе равравняется ${a ** 3}`;
  } else {
    return "Переданный параметр не является числом";
  }
};

console.log(giveCubNum());
*/
// Задание 7
/*
const getCircleArea = function () {
  const area = Math.PI * this.radius ** 2;
  return area.toFixed(2);
};

const getCirclePerimeter = function () {
  const perimeter = 2 * Math.PI * this.radius;
  return perimeter.toFixed(2);
};
const circle1 = {
  radius: 6,
  getArea: getCircleArea,
  getPerimeter: getCirclePerimeter,
};

const circle2 = {
  radius: 9,
  getArea: getCircleArea,
  getPerimeter: getCirclePerimeter,
};

console.log("Площадь circle1:", circle1.getArea());
console.log("Периметр circle1:", circle1.getPerimeter());

console.log("Площадь circle2:", circle2.getArea());
console.log("Периметр circle2:", circle2.getPerimeter());
*/
//Задание 8

//Решение 1
/*
const getSeason = (monthNumber) => {
  if (monthNumber === 12 || monthNumber === 1 || monthNumber === 2) {
    return "Зима";
  } else if (monthNumber >= 3 && monthNumber <= 5) {
    return "Весна";
  } else if (monthNumber >= 6 && monthNumber <= 8) {
    return "Лето";
  } else if (monthNumber >= 9 && monthNumber <= 11) {
    return "Осень";
  } else {
    return "Неправильный номер месяца";
  }
};

console.log(getSeason(4));
console.log(getSeason(7));
console.log(getSeason(10));
console.log(getSeason(13));
*/
//Решение 2
/*
const gameSeasons = () => {
  let monthNumber = Number(
    prompt("Введите номер месяца и узнайко к какому сезону он принадлежит")
  );

  if (monthNumber < 13 && monthNumber > 0) {
    switch (monthNumber) {
      case 1:
      case 2:
      case 12:
        alert("Зима");

        break;
      case 3:
      case 4:
      case 5:
        alert("Весна");

        break;
      case 6:
      case 7:
      case 8:
        alert("Лето");

        break;
      case 9:
      case 10:
      case 11:
        alert("Осень");

        break;
    }
  } else {
    alert("Вы ввели не правельный номер месяца ");
  }
};
*/

//hw6

//Задание 1
/*
const arr = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  if (arr[i] == 10) break;
}
*/
//Задание 2
/*
const arr = [1, 5, 4, 10, 0, 3];
const findIndex = arr.indexOf(4);
console.log(findIndex);
*/
//Задание 3
/*
const arr = [1, 3, 5, 10, 20];
const joinArr = arr.join(" ");
console.log(joinArr);
*/
//Задание 4
/*
const multiArray = [];

for (let i = 0; i < 3; i++) {
  const innerArray = [];

  for (let j = 0; j < 3; j++) {
    innerArray.push(1);
  }

  multiArray.push(innerArray);
}

console.log(multiArray);
*/

//Задание 5
/*
const arr = [1, 1, 1];
arr.push(2, 2, 2);
console.log(arr);
*/

//Задание 6
/*
const arr = [9, 8, 7, "a", 6, 5];

arr.sort();

arr.pop();

console.log(arr);
*/

//Задание 7
/*
let arr = [9, 8, 7, 6, 5];

let n = Number(prompt("Введите число"));

if (arr.includes(n)) {
  alert("Вы угадали");
} else {
  alert("Вы не угадали");
}
*/

//Задание 8
/*
let string = "abcdef";

let arr = string.split("");

arr.reverse();

arr = arr.join("");

console.log(arr);
*/

//Задание 9
/*
const bigArr = [
  [1, 2, 3],
  [4, 5, 6],
];

const arr = bigArr.flat();

console.log(arr);
*/

//Задание 10
/*
const arr = [7, 6, 5, 4, 1, 2, 5, 8, 9, 2, 7, 4, 5];

for (let i = 0; i < arr.length - 1; i++) {
  const curentN = arr[i];
  const nextN = arr[i + 1];
  const sum = curentN + nextN;

  console.log(`Сумма ${curentN} и ${nextN} равна ${sum}`);
}
*/

//Задание 11
/*
const squareArray = (innerArray) => {
  const squaredNumbers = innerArray.map((num) => num ** 2);
  return squaredNumbers;
};

const arr = [2, 3, 4, 5, 6, 8, 8];

const newArr = squareArray(arr);

console.log(newArr);
*/

//Задание 12
/*
const array = ["skypro", "java script", "security", "application"];

const newAray = [];

for (let i = 0; i < array.length; i++) {
  newAray.push(array[i].length);
}

console.log(newAray);
*/
//Задание 13
/*
const array = [-25, 25, 0, -1000, -2];

function filterPositive(array) {
  const filtred = array.filter((array) => array < 0);
  console.log(filtred);
}

filterPositive([-1, 0, 5, -10, 56]);
filterPositive([-25, 25, 0, -1000, -2]);
*/

//Задание 14

// const createAndfilter = () => {
//   const array = [];
//   const arrsort = [];
//   for (let i = 0; i < 10; i++) {
//     const randomNumber = Math.floor(Math.random() * 10) + 1;
//     array.push(randomNumber);
//     if (randomNumber % 2 == 0) {
//       arrsort.push(randomNumber);
//     }
//   }
//   return console.log(array), console.log(arrsort);
// };

// createAndfilter();

// Задание 15

// const getArithmeticArr = () => {
//   const arr = [];
//   for (let i = 0; i < 6; i++) {
//     const randomNumber = Math.floor(Math.random() * 10) + 1;
//     arr.push(randomNumber);
//   }
//   let result = arr.reduce(function (a, b) {
//     return a + b;
//   });
//   result /= arr.length;
//   return console.log(
//     `Дан рандомный массив [${arr}] его среднее арифметическое значение равно ${result.toFixed(
//       2
//     )}`
//   );
// };
// getArithmeticArr();

// hw7

// Задание 1

// let str = "skypro";
// console.log(str.toUpperCase());

// Задание 2

// const arr = ["Кошка", "Кит", "Комар", "Носорог"];

// const findArrStr = (arr, str) => {
//   const arrSearch = [];

//   arr.forEach((item) => {
//     if (item.toLowerCase().startsWith(str.toLowerCase())) {
//       arrSearch.push(item);
//     }
//   });

//   return arrSearch;
// };

// console.log(arr);
// console.log(findArrStr(arr, "ко"));

// Задание 3

// console.log(Math.floor(32.58884));
// console.log(Math.ceil(32.58884));
// console.log(Math.round(32.58884));

// Задание 4

// console.log(Math.max(52, 53, 49, 77, 21, 32));
// console.log(Math.min(52, 53, 49, 77, 21, 32));

// Задание 5

// const getRandomNum = () => {
//   const randomNumber = Math.floor(Math.random() * 10) + 1;
//   console.log(randomNumber);
// };

// getRandomNum();

// Задание 6

// const getNum = (num) => {
//   const arr = [];
//   const arrLeght = Math.floor(num / 2);

//   for (let i = 0; i < arrLeght; i++) {
//     const randomNumber = Math.round(Math.random() * (num + 1));
//     arr.push(randomNumber);
//   }
//   return arr;
// };

// console.log(getNum(15));

// // Задание 7
// const getNum = (a, b) => {
//   const min = Math.min(a, b);
//   const max = Math.max(a, b);
//   const randomNumber = Math.round(Math.random() * (max - min)) + min;
//   return randomNumber;
// };
// console.log(getNum(1, 3));

// Задание 8

// console.log(new Date());

// Задание 9

// let currentDate = new Date();
// let newDate = new Date();

// newDate.setDate(currentDate.getDate() + 73);

// console.log(currentDate);
// console.log(newDate);

// Задание 10

// const formatDate = (date) => {
//   const months = [
//     "января",
//     "февраля",
//     "марта",
//     "апреля",
//     "мая",
//     "июня",
//     "июля",
//     "августа",
//     "сентября",
//     "октября",
//     "ноября",
//     "декабря",
//   ];
//   const daysOfWeek = [
//     "воскресенье",
//     "понедельник",
//     "вторник",
//     "среда",
//     "четверг",
//     "пятница",
//     "суббота",
//   ];

//   const day = date.getDate();
//   const month = date.getMonth();
//   const year = date.getFullYear();
//   const dayOfWeek = date.getDay();
//   const hours = date.getHours();
//   const minutes = date.getMinutes();
//   const seconds = date.getSeconds();

//   const formattedDate = `Дата: ${day} ${months[month]} ${year} - это ${daysOfWeek[dayOfWeek]}.`;
//   const formattedTime = `Время: ${hours}:${minutes}:${String(seconds).padStart(
//     2,
//     "0"
//   )}`;

//   return `${formattedDate} \n ${formattedTime}`;
// };

// const myDate = new Date();
// const formattedDateTime = formatDate(myDate);
// console.log(formattedDateTime);

//Задание 11

// const gameWords = () => {
//   let arr = [
//     "Яблоко",
//     "Груша",
//     "Дыня",
//     "Виноград",
//     "Персик",
//     "Апельсин",
//     "Мандарин",
//   ];
//   arr = arr.sort(() => Math.random() - 0.5);
//   alert(arr);
//   const arrElementFirst = arr.shift();
//   const arrElementLast = arr.pop();

//   const answerElementFirst = prompt("Чему равнялся первый элемент массива?");
//   const answerElementLast = prompt("Чему равнялся последний элемент массива?");

//   if (
//     arrElementFirst.toLowerCase() === answerElementFirst.toLowerCase() &&
//     arrElementLast.toLowerCase() === answerElementLast.toLowerCase()
//   ) {
//     alert("🏆Поздравляю вы угадали оба элемента🏆");
//   } else if (
//     arrElementFirst.toLowerCase() === answerElementFirst.toLowerCase() ||
//     arrElementLast.toLowerCase() === answerElementLast.toLowerCase()
//   ) {
//     alert("Вы были близки к победе!🗿");
//   } else {
//     alert("Ответы не верны, попробуйте снова😿");
//   }

// };

// gameWords();

// hw 8

// Задание 1

// const people = [
//   { name: "Глеб", age: 29 },
//   { name: "Анна", age: 17 },
//   { name: "Олег", age: 7 },
//   { name: "Оксана", age: 47 },
// ];

// // Допишите колбэк для sort, изучите, как работает колбэк, в документации
// people.sort((a, b) => a.age - b.age);
// console.log(people);
// код выше должен вывеcти =>
// [
//  { name: 'Олег', age: 7 },
//  { name: 'Анна', age: 17 },
//  { name: 'Глеб', age: 29 },
//  { name: 'Оксана', age: 47 }
// ]


