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
