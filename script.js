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
      alert("Зима");

      break;
    case 2:
      alert("Зима");

      break;
    case 3:
      alert("Весна");

      break;
    case 4:
      alert("Весна");

      break;
    case 5:
      alert("Весна");

      break;
    case 6:
      alert("Лето");

      break;
    case 7:
      alert("Лето");

      break;
    case 8:
      alert("Лето");

      break;
    case 9:
      alert("Осень");

      break;
    case 10:
      alert("Осень");

      break;
    case 11:
      alert("Осень");

      break;
    case 12:
      alert("Зима");
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

console.log(sumOfNum(8, 9));
*/

// Задание 6

const giveCubNum = (a) => {
  a = prompt("Введите число");
  if (!isNaN(a)) {
    return `${a} В кубе равравняется ${a ** 3}`;
  } else {
    return "Переданный параметр не является числом";
  }
};

console.log(giveCubNum());
