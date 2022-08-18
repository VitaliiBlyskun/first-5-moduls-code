
// // Change code below this line
// function add(a, b, c) {
//   const result = a + b + c
//   console.log(`Addition result equals ${result}`);
//   // Change code above this line
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);




// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line
// const result = orderedQuantity * pricePerDroid + deliveryFee
// return `You ordered droids worth ${result} credits. Delivery (${deliveryFee} credits) is included in total price.`

//   // Change code above this line
//   return message;
// }

// console.log(makeOrderMessage(2, 100, 50));
// console.log(makeOrderMessage(4, 300, 100));





// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
// //   Change code below this line
//   const isMatch = password === SAVED_PASSWORD;

// //   Change code above this line
//   return isMatch;
// }

// console.log(isValidPassword("mangodab3st"));
// console.log(isValidPassword('jqueryismyjam'));
// console.log(isValidPassword());



// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
// if (totalSpent >= 50000) {
// discount = GOLD_DISCOUNT
// } else if (totalSpent >= 20000 &&  totalSpent < 50000) {
// discount = SILVER_DISCOUNT
// } else if (totalSpent >= 5000 &&  totalSpent < 20000) {
// discount = BRONZE_DISCOUNT
// } else { 
// discount = BASE_DISCOUNT
// }
//   // Change code above this line
//   return discount;
// }



// console.log(getDiscount(46900));
// console.log(getDiscount(8250));
// console.log(getDiscount(5000));
// console.log(getDiscount(20000));



// function getShippingCost(country) {
//     let message;
//     // Change code below this line
//     let price
//     switch(country) {
//      case "China":
//      price = 100;
//      message = `Shipping to ${country} will cost ${price} credits`
//      break;
//      case "Chile":
//      price = 250;
//      message = `Shipping to ${country} will cost ${price} credits`
//      break;
//      case "Australia":
//      price = 170;
//      message = `Shipping to ${country} will cost ${price} credits`
//      break;
//      case "Jamaica":
//      price = 120;
//      message = `Shipping to ${country} will cost ${price} credits`
//      break;
//      default: 
//      message = "Sorry, there is no delivery to your country" 
//     }
//     // Change code above this line
//     return message;
//   }
  

// console.log(getShippingCost("Chile"));









// function checkForSpam(message) {
//     let result;
//     // Change code below this line
//     if (message.toLowerCase().includes("spam") || message.toLowerCase().includes("sale")) {
//     result = true
//     } else {
//     result = false
//     }
//     // Change code above this line
//     return result;
//   }

// console.log(checkForSpam('Amazing SalE, only tonight!') );
// console.log(checkForSpam('[SPAM] How to earn fast money?'));





// module 1.2

/**
 * Example 9 - Значение по умолчанию и оператор нулевого слияния
 * Отрефактори код так, чтобы в переменную value присваивалось значение переменной incomingValue,
 * если оно не равно undefined или null. В противном случае должно присваиваться значение defaultValue.
 * Проверь работу скрипта для слепдующих значений переменной incomingValue: null, undefined, 0, false.
 * Используй оператор ?? (nullish coalescing operator).
 */
//  const incomingValue = 5;
//  const defaultValue = 10;
//  const value = incomingValue || defaultValue;
//  console.log(value);



// const incomingValue = 5;
//  const defaultValue = 10;
//  let value = 0;
//  if ((incomingValue ?? undefined) || (incomingValue ?? null)) {
//     value += incomingValue
//  } else {
//     value += defaultValue
//  }

//  console.log(value);






/**
 * Example 10 - Опертор % и методы строк
 * Напиши скрипт который переведёт значение totalMinutes (количество минут) в строку в формате часов и минут HH:MM.
 *
 * 70 покажет 01:10
 * 450 покажет 07:30
 * 1441 покажет 24:01
 */


// розібратися?







// module 1.1

// ==================
// Додаткові завдання
// ==================

/**
 * Example 10 - Ввод пользователя и ветвления
 * Напиши скрипт, который будет спрашивать логин с помощью prompt и логировать результат в консоль браузера.
 *
 * Если посетитель вводит "Админ", то prompt запрашивает пароль
 * Если ничего не введено или нажата клавиша Esc - вывести строку "Отменено"
 * В противном случае вывести строку "Я вас не знаю"
 * Пароль проверять так:
 *
 * Если введён пароль "Я админ", то вывести строку "Здравствуйте!"
 * Иначе выводить строку "Неверный пароль"
 */

// let total = 0;

//   const value = prompt("Уведіть логін");
//   if (value === "Адмін") {
//     alert('Уведіть пароль');
//   } else if (value === null) {
//     alert("Відмінено"); 
//   } else if (value === "Я адмін") {
//     alert("Привіт"); 
//   } else if (value !== "Я адмін") {
//     alert("Невірний пароль");
//   } else {
//     alert("Я вас не знаю");
//   }

// дорозобрати .........


/**
 * Example 11
 * На основе строки "JavaScript is a pretty good language"
 * Cделать новую строку, где каждое слово начинается с большой 
 * буквы, а пробелы удалены. Использовать цикл for.
 */

//  const oldString = "JavaScript is a pretty good language";
//  const newString = oldString.split(" ")
//  console.log(newString);
//  let words = [];
//  for (let i = 0; i < newString.length; i += 1) {
//      words = newString[i].slice(1, newString.length);;
   
//  }
 
//  console.log(words);
 
 // const newString = oldString.split(" ")
 // console.log(newString);
 
 /**
  * Example 12
  * Порахувати кількість рядків в змінній text. Використовуючи цикл while.
  */
 
 //  const text = `Думи мої, думи мої,
 //  Лихо мені з вами!
 //  Нащо стали на папері
 //  Сумними рядами?..
 //  Чом вас вітер не розвіяв
 //  В степу, як пилину?
 //  Чом вас лихо не приспало,
 //  Як свою дитину?...`;
  
  
  /**
   * Example 13
   * Перевірте, чи має рядок однакову кількість символів «x» і «o». 
   * В змінну res ви маєте записати логічне значення true або false. 
   * Рядок може містити будь-який символ. І бути нечутливим до регістру
   * Протестувати на наступних рядках: xo, xxOo, xxxm, Oo, ooom
   * Використовувати цикл for
   */
  
 //  const string = 'xo';
 //  let res = false;
 
 
 
 
 
 
 
 
 
 
 





// 1 заняття з ментором

// Task 1

// let counter = 0;

// while(counter <= 50) {
//   console.log(counter)
//   counter += 1
// }

// Task 2

// const browser = 'Opera';

// if (browser === 'Edge') {
//   alert( "You've got the Edge!" );
// } else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera'); {
//   alert( 'Okay we support these browsers too' );
// }
// else {
//   alert( 'We hope that this page looks ok!' );
// }

// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert('Okay we support these browsers too');
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }

// Task 3

// let totalAnswer = 0;

// while (true) {
// const answer = prompt("input (введіть) number >= 100");
// if (answer === null) {
//   alert(totalAnswer);
//   break;
// } else if (Number.isNaN(+answer)) {
//   alert("This is not a number");
// } else if (answer < 100) {
//   alert "<100";
// } else {
//   totalAnswer += Number(answer);
// }
// }

// by Maryna

// let totalAnswer = 0;
// while (true) {
//   const answer = prompt("Vvedit number >= 100");
//   if (answer === null) {
//     alert(totalAnswer);
//     break;
//   } else if (Number.isNaN(+answer)) {
//     alert("This is not a number");
//   } else if (answer < 100) {
//     alert("<100");
//   } else {
//     totalAnswer += Number(answer);
//   }
// }

// let total = 0;
// while (true) {
//   const value = prompt('Enter number > 100');
//   if (value !== null && +value < 100) {
//     alert('vi vveli chislo menshe 100');
//     continue;
//   }
//   if (value === null) {
//     alert(`total sum = ${total}`);
//     break;
//   }
//   if (Number.isNaN(+value)) {
//     alert('vi vveli ne chislo');
//     continue;
//   }
// }









































// const hours = Number(prompt("Enter hours"))

// if (hours < 17) {
//   alert("Pending")
// } else if (hours >= 17 && hours <= 24) {
//   alert("Expires")
// } else {
//   alert("Overdue")
// }




// const dedline = Number(prompt("The deadline remains"));

// if (dedline === 0) {
//   alert ("Today")
// } else if (dedline === 1) {
//   alert ("Tomorrow")
// } else if (dedline === 2) {
//   alert ("Day after tomorrow")
// } else {
//   alert ("Data in the future")
// }


// const hour = Number (prompt("Write hour"));

// if (hour >= 0 && hour < 15) {
//   alert ("first part")
// } else if (hour >= 15 && hour < 30) {
//   alert ("second part")
// } else if (hour >= 30 && hour < 45) {
//   alert ("thirt part")
// } else if (hour >= 45 && hour <= 60) {
//   alert ("foth part")
// } else {
//   alert ("Its not hours")
// }



// const number = prompt("Enter number");
// let multi = 0;


// if (isNaN(number)) {
//  console.log("Ви ввели не число");
// } else if (number.length !== 3) {
//   console.log("Ви ввели не тризначне число");
// } else {
//   for (let i = 0; i < number.length; i += 1 ) {
//    multi += Number(number[i])
// }
// }

// console.log(multi);




// const email = prompt("Enter your email")

// if((email.length >= 4 && email.length <= 10) && email.includes("@") && email.includes(".")) {
//   alert("Your email valide");
// } else {
// alert("Your email is not valide");
// }




// const string = prompt("Enter your name")

// const firstLetter = string.slice(0, 1).toUpperCase()

// const otherLetter = string.slice(1, string.length).toLowerCase()

// const allstring = firstLetter + otherLetter

// console.log(allstring);




// Задачки з лекцій Мельник

// ## Task #7  - Ввод пользователя и ветвления

// Напиши скрипт, который будет спрашивать логин с помощью `prompt` и логировать
// результат в консоль браузера.

// - Если посетитель вводит `"Админ"`, то `prompt` запрашивает пароль
// - Если ничего не введено или нажата клавиша Esc - вывести строку `"Отменено"`
// - В противном случае вывести строку `"Я вас не знаю"`

// Пароль проверять так:

// - Если введён пароль `"Я админ"`, то вывести строку `"Здравствуйте!"`
// - Иначе выводить строку `"Неверный пароль"`



// const input = prompt("input something");
// const password = prompt("input password");


// if (input === null || password === null) {
//   alert("Отменено")
// } else if (input === "Админ") {
//   if (password === "Я админ") {
//     alert("Здравствуйте!")
//   } else {
//     alert("Неверный пароль")
//   }
// } else {
//     alert("Я вас не знаю")  
// }




// Task #8 - Написать игру Камень - Ножницы - Бумага

// const play = prompt("Давай грати в чу-ван-чі");

// const stone = Math.random().toFixed(2);
// const scissors = Math.random().toFixed(2);
// const paper = Math.random().toFixed(2);


// if(play === null) {
//   alert("Cenceled")
// } else if (stone > scissors || scissors > paper || paper > stone) {
//   alert("You win")
// } else if(stone < scissors || scissors < paper || paper < stone) {
//   alert("You lose")
// } else {
//   alert ("WRONG ITEM")
// }



// const ramdom1 = Math.random().toFixed(2);
// const ramdom2 = Math.random().toFixed(2);


// if(play === null) {
//   alert("Cenceled")
// } else if (play === ramdom1 > ramdom2) {
//   alert("You win")
// } else if(ramdom1 < ramdom2) {
//   alert("You lose")
// } else {
//   alert ("WRONG ITEM")
// }
 








// Task #9 - Выведите столбец чисел от 1 до 50 использую while, for

// for (let i = 0; i <= 50; i += 1) {
//   console.log(i);
// }


// let counter = 0;

// while(counter < 50) {
// counter += 1
// console.log(counter);
// }





// Task #10 - Выведите столбец четных чисел в промежутке от 0 до 100 использую while, for

// for (let i = 0; i <= 100; i += 10) {
//   console.log(i);
// }


// let counter = 0;

// while(counter < 100) {
// counter += 10
// console.log(counter);
// }




// Task #11 - С помощью цикла найдите сумму чисел от 1 до 100 использую while, for

// let sum = 0

// for (let i = 0; i <= 100; i += 1) {
// sum += i
// }

// console.log(sum);


// let counter = 0;

// while(counter < 100) {
// counter += 1
// }

// console.log(counter);





// Task #12 - Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50.

// Какое число получится ?
// Посчитайте количество итераций, необходимых для этого(итерация - это проход цикла), и запишите его в переменную num.

// ???? ======






// Task #13 - Напишите программу которая спрашивает пароль и имя у пользователя.
// У пользователя есть 3 попытки на ввод пароля
// Если пользователь вводит пароль и он правильный - выводим сообщение "Приветствую тебя {neme}"
// Если пользователь вводит не правельный пароль - выводитм сообщение "Пароль не верный. У тебя осталось {n} попыток"
// Если попытки закончились - выводим сообщение "Попытки закончились Доступ запрещен"


// const hotelName = prompt("Please enter desired hotel name");
// // alert(hotelName);

// if(hotelName === null) {
//   alert("Cencelled")
// }


// const name = "Vitaliy"
// const password = "123v"
// const n = 3

// const input = prompt("Введіть імя користувача")

// if (input === null) {
//   alert ("Cenceled");
//  } 
 
//  else if (input === name) {
//   const inputPass = prompt("Введіть пароль користувача")

// if (inputPass === null) {
//   alert ("Cenceled")
// } 
// else if (inputPass !== password){
//    const inputPass2 = prompt(`Пароль не верный. У тебя осталось ${n - 1} попытки`)
//   if (inputPass2 !== password) {
//     const inputPass3 =  prompt(`Пароль не верный. У тебя осталось ${n - 2} попытка`)
//   } else if (inputPass3 !== password) {
//     alert("Попытки закончились Доступ запрещен")
//   }  else {
//     alert (`Приветствую тебя ${name}`)
//   }
  
// } else if (inputPass === password) {
//   alert (`Приветствую тебя ${name}`)
// } 


// } else {
//   alert ("Не знайдено користувача")
// }

//! Доробляти!!!!


//* Зробив по іншому, не 3 перевірки а 2

// const name = "Vitaliy"
// const password = "123v"
// const n = 2

// const input = prompt("Введіть імя користувача")

// if (input === null) {
//   alert ("Cenceled");
//  } 
 
//  else if (input === name) {
//   const inputPass = prompt("Введіть пароль користувача")

// if (inputPass === null) {
//   alert ("Cenceled")
// } else if (inputPass !== password){
//    const inputPass2 = prompt(`Пароль не верный. У тебя осталось ${n - 1} попытка`)
//   if (inputPass2 !== password) {
//     alert("Попытки закончились Доступ запрещен")
//   }  else {
//     alert (`Приветствую тебя ${name}`)
//   }
  
// } else if (inputPass === password) {
//   alert (`Приветствую тебя ${name}`)
// } 

// } else {
//   alert ("Не знайдено користувача")
// }





// Task #14 - Написать программу которая спрашивает у пользователя пароль и проверяет его на валидность по количеству симвлолов
// Правила валидации -
// 1) минимум 3 символа, - если символов меньше выводим сообщение "Пароль должен содержать минимум 3 символа"
// 2) максимум 16 символов - если символов больше, выводим сообщение "Пароль должен содержать максимум 16 символов"


// const password = prompt("Введіть пароль");

// if (password === null) {
//   alert ("Cencel")
// } else if (password.length < 3) {
//   alert("Пароль должен содержать минимум 3 символа")
// } else if (password.length > 16) {
//   alert("Пароль должен содержать максимум 16 символов")
// } else if (!Number(password)) {
//   alert("You need to write numbers")
// } else {
//   alert ("Welcome")
// }