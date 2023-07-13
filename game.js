const getSeason = (monthNumber) => {
  if (monthNumber === 12 || monthNumber === 1 || monthNumber === 2) {
    alert("Зима");
  } else if (monthNumber >= 3 && monthNumber <= 5) {
    alert("Весна");
  } else if (monthNumber >= 6 && monthNumber <= 8) {
    alert("Лето");
  } else if (monthNumber >= 9 && monthNumber <= 11) {
    alert("Осень");
  } else {
    alert("Неправильный номер месяца");
  }
};

const gameWords = () => {
  let arr = [
    "Яблоко",
    "Груша",
    "Дыня",
    "Виноград",
    "Персик",
    "Апельсин",
    "Мандарин",
  ];
  arr = arr.sort(() => Math.random() - 0.5);
  alert(arr);
  const arrElementFirst = arr.shift();
  const arrElementLast = arr.pop();

  const answerElementFirst = prompt("Чему равнялся первый элемент массива?");
  const answerElementLast = prompt("Чему равнялся последний элемент массива?");

  if (
    arrElementFirst.toLowerCase() === answerElementFirst.toLowerCase() &&
    arrElementLast.toLowerCase() === answerElementLast.toLowerCase()
  ) {
    alert("🏆Поздравляю вы угадали оба элемента🏆");
  } else if (
    arrElementFirst.toLowerCase() === answerElementFirst.toLowerCase() ||
    arrElementLast.toLowerCase() === answerElementLast.toLowerCase()
  ) {
    alert("Вы были близки к победе!🗿");
  } else {
    alert("Ответы не верны, попробуйте снова😿");
  }
  console.log(arrElementFirst);
  console.log(arrElementLast);
};
