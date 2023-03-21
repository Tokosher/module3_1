// Обчислювальні властивості
// const userInfo = {
//     keyName: 'userName1', // зберігти
//     name1234: 'Robert', // зберігти
//     sureNameUser: 'Grace',
//     keyAge: 'userAge', // зберігти
//     age1: 29, // зберігти
//     address: 'Franlin st.'
// }
// //////////
//
// const userData = {
//     [userInfo.keyName]: userInfo.name1234,
//     [userInfo.keyAge]: userInfo.age1
// }
//
// console.log(userData[userInfo.keyName])

// const propName = "userName";
// const user = {
//     age: 25,
//     // Ім'я цієї властивості буде взяте зі значення змінної propName
//     [propName]: "Генрі Сибола",
// };
//
// console.log(user[propName]);

// hasOwnProperty()
// const person1 = {
//     name: 'John',
//     surname: 'Smith',
//     age: 39
// }
//
// const person2 = {
//     name: 'Anna',
//     surname: 'Devier'
// }
//
// console.log(person1.hasOwnProperty('address'))


// function getName () {
//     const surname = 'Grace';
// }
//
// getName()
// console.log(surname)

// const user = {
//     name: "Jacques Gluke",
//     tag: "jgluke",
//     location: {
//         country: "Jamaica",
//         city: "Ocho Rios",
//     },
//     hobbies: ["swiming", "music", "sci-fi"],
// };
//
// const userLocation = user.location;
// console.log(userLocation); // Об'єкт location. -------- що показуватиме консоль в цьому випадку? у мене помилку"

// різницю між for of i for in

// const numbers = [1, 2 ,3];
//
// for (const number of numbers) {
//     // console.log(number)
// }
//
// const user = {
//     name: 'John',
//     surname: 'Smith',
//     age: 39
// }
//
// for (const userData in user) {
//     console.log(userData, user[userData])
// }

// Example 7 - Сортування масиву із циклом
// Напиши скрипт сортування масиву рядків в алфавітному порядку за першою літерою елемента.

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// for (const str of langs) {
//
// }

// Example 1 - Основи об'єктів
// Напиши скрипт, який для об'єкта user, послідовно:
//
// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of
// Код

// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
// };
//
// user.mood = 'happy';
// user['hobby'] = 'skydiving';
// user.premium = false;
//
// const userKeys = Object.keys(user);
// for (const userKey of userKeys) {
//     console.log(`${userKey}: ${user[userKey]}`)
// }

// Example 2 - метод Object.values()
// У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для підсумовування всіх зарплат і збережіть результат у змінній sum. Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.
//

// const salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// };
//
// const salariesValues = Object.values(salaries);
// let sum = 0;
// for (const salary of salariesValues) {
//     sum += salary;
// }
//
// console.log(sum);

// Example 3 - Масив об'єктів
// Напишіть функцію calcTotalPrice(stones, stoneName), яка приймає масив об'єктів та рядок з назвою каменю. Функція рахує і повертає загальну вартість каміння з таким ім'ям, ціною та кількістю з об'єкта
//

// const stones = [
//   { name: 'Смарагд', price: 1300, quantity: 4 },
//   { name: 'Діамант', price: 2700, quantity: 3 },
//   { name: 'Сапфір', price: 400, quantity: 7 },
//   { name: 'Щебінь', price: 200, quantity: 2 },
// ];
//
// const stoneTotalPrice = calcTotalPrice(stones, 'Діамант');
// console.log(stoneTotalPrice);
//
// function calcTotalPrice (stones, stoneName) {
//     for (const stone of stones) {
//         if (stone.name === stoneName) {
//             return stone.price * stone.quantity
//         }
//     }
// }

// Домашня практика
// Example 4 - Комплексні завдання
// Напиши скрипт управління особистим кабінетом інтернет банку. Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.
//
// /*
//  * Типів транзакцій всього два.
//  * Можна покласти чи зняти гроші з рахунку.
//  */
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };
//
// /*
//  * Кожна транзакція це об'єкт із властивостями: id, type та amount
//  */
//
// const account = {
//   // Поточний баланс рахунку
//   balance: 0,
//
//   // Історія транзакцій
//   transactions: [],
//
//   /*
//    * Метод створює та повертає об'єкт транзакції.
//    * Приймає суму та тип транзакції.
//    */
//   createTransaction(amount, type) {},
//
//   /*
//    * Метод, що відповідає за додавання суми до балансу.
//    * Приймає суму транзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його до історії транзакцій
//    */
//   deposit(amount) {},
//
//   /*
//    * Метод, що відповідає за зняття суми з балансу.
//    * Приймає суму транзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його до історії транзакцій.
//    *
//    * Якщо amount більше ніж поточний баланс, виводь повідомлення
//    * про те, що зняття такої суми не можливе, недостатньо коштів.
//    */
//   withdraw(amount) {},
//
//   /*
//    * Метод повертає поточний баланс
//    */
//   getBalance() {},
//
//   /*
//    * Метод шукає та повертає об'єкт транзакції по id
//    */
//   getTransactionDetails(id) {},
//
//   /*
//    * Метод повертає кількість коштів
//    * певного типу транзакції з усієї історії транзакцій
//    */
//   getTransactionTotal(type) {},
// };
