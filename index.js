//1
console.log("Задание 1");
console.log("     ");
//создаем переменные
let username = "Маша";
let bonusBalance = 1000;
//выводим информацию в консоль
console.log("Пользователь", username);
console.log("Баланс бонусов", bonusBalance);
//2
console.log("     ");
console.log("Задание 2");
console.log("     ");
//исходный баланс из 1 задачи
const pointsPerPurchase = 50;
const pointsBurnedPerDay = 3;
const days = 7;
//рассчитываем количество покупок(раз в 2 дня, начиная с вт)
const purchases = Math.floor(days / 2);
//итоговый баланс
const totalPointsAdded = purchases * pointsPerPurchase;
const totalPointsBurned = days * pointsBurnedPerDay;
bonusBalance = bonusBalance + totalPointsAdded - totalPointsBurned;
//вывод результата
console.log("Баланс через", days, "дней:", bonusBalance, "бонусов");
//3
console.log("     ");
console.log("Задание 3.1");
console.log("     ");
//нициализация массива сообщений
const messages = [
  "Пойдем гулять в парк?",
  "Кажется, дождь собирается. Лучше пойдем в кино!",
  "Давай, сегодня как раз вышел новый фильм.",
  "Встречаемся через час у кинотеатра?",
];
//вывод сообщений по хронологии
for (let i = 0; i < messages.length; i++) {
  const sender = i % 2 === 0 ? "Друг" : "Я";
  console.log(sender, ":", messages[i]);
}
console.log("     ");
console.log("Задание 3.2");
console.log("     ");
const searchText = "кино";
messages.forEach((message, index) => {
  if (message.includes(searchText)) {
    const sender = index % 2 === 0 ? "Друг" : "Я";
    console.log(sender, ":", message);
  }
});
console.log("     ");
