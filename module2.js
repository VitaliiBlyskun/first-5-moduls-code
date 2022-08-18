// task 8

// const fruits = ["banana", "kiwi", "apple", "pinapple"]

// const lastElementIndex = fruits.length - 1
// console.log(lastElementIndex);

// const lastElement = fruits[lastElementIndex]
// console.log(lastElement);




// task 9

// function getExtremeElements(array) {
// return [array[0], array[array.length - 1]]
//  }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));


// task 16

// function makeArray(firstArray, secondArray, maxLength) {

// const allArray = firstArray.concat(secondArray);

// return allArray.slice(0, maxLength)

// }

// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));


// taks 18

// function calculateTotal(number) {
// let sum = 0;
// for (let i = 0; i < number; i += 1) {
//   sum += i
// }
// return sum;
// }

// console.log(calculateTotal(3));
// console.log(calculateTotal(6));
// console.log(calculateTotal(28));
// console.log(calculateTotal(300));




// task 21

// function findLongestWord(string) {
//   const word = string.split(" ");
//   let longestWord = word[0];
//   for (const element of word) {
//     if (longestWord.length < element.length) {
//       longestWord = element
//       // console.log(longestWord);
//     }
//   } 
// return longestWord 
// }


// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));



// function findLongestWord(string) {
//   // Change code below this line

//   let word = string.split(' ');
//   let longestWord = word[0];
//   for(let i = 0; i < word.length; i += 1){
//     if(word[i].length > longestWord.length){
//   longestWord = word[i];
//      }
//   }
//   return longestWord;
// }
  
//   // Change code above this line

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));


//? Ще раз зробити


// task 22

// function createArrayOfNumbers(min, max) {
//     let array = [];
//     for (let i = min; i <= max; i += 1) {
//       array.push(i)
//     }
//     return array;
//   }
  
//   console.log(createArrayOfNumbers(14, 17));
  
  
  
// task 23

// function filterArray(numbers, value) {
//     const newArray = [];
//     for (const number of numbers) {
//         if (number > value) {
//         newArray.push(number.length)
//     }
//   }
//     return newArray 
// } 

// console.log(filterArray([12, 24, 8, 41, 76], 38));


// function filterArray(numbers, value) {
//     let newArray = [];
//     for (let i = 0; i < numbers.length; i += 1) {
//         if (numbers[i] > value) {
//             newArray.push(numbers[i])
//         }  
//     }
//     return newArray 
// } 

// console.log(filterArray([12, 24, 8, 41, 76], 38));


// task 25

// function getCommonElements(array1, array2) {
//     const newArray = [];
//     for (let i = 0; i < array1.length; i +=1) {
//         if (array2.includes(array1[i])) {
//             newArray.push(array1[i]) 
//         }
//     }
//     return newArray
// }
  
//     console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));


// task 29

// function getEvenNumbers(start, end) {
//     const newArray = [];
//     for (let i = start; i < end; i += 1) {
//         if (i % 2 === 0) {
//             newArray.push(i)
//         }
//     }
//     return newArray
// }

// console.log(getEvenNumbers(3, 11));



// task 32

// function includes(array, value) {
//     for (const number of array) {
//        if(number === value) {
//        return true
//     }
//   }
//   return false
// }

// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));


// function calculateEngravingPrice(message, pricePerWord) {
    // Change code below this line
  
  
  // return message.split(" ").length * pricePerWord
  
  //   // Change code above this line
  // }
  
  // console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
  // console.log(calculateEngravingPrice("Web-development is creative work", 40));
  
  
  
  // function slugify(title) {
    // Change code below this line
  
  // return title.split(" ").join("-")
  
    // Change code above this line
  // }
  
  
  // console.log(slugify("Ten secrets of JavaScript"));
  



  
  
  // const styles = ["Джаз", "Блюз"]
  
  // const result1 = styles.push("Рок-н-ролл");
  // console.log(result1);
  // const result2 = styles[1] = "Классика";
  // console.log(result2);
  // const result3 = styles.shift();
  // console.log(result3);
  // const result4 = styles.unshift("Рэп", "Регги");
  // console.log(result4);
  
  
  
//   const message = "Серус газдньо! Як ся маєш, у вароши)"
  
//   console.log(message.split(" "));
//   console.log(message.split("!"));
//   console.log(message.split(","));
//   console.log(message.split(")"));
//   console.log(message.split(""));
//   console.log(message.split("").reverse().join(""));
//   console.log(message.split("!").reverse());
  
  
//   const cities = ["Voloc", "Skotar", "Huklash", "Kanora"]
  
//   const index = cities.indexOf("Kanora")
  
//   cities[index] = "Beskid"
  
//   console.log(cities);






    // module 2.1 
// =================================== 
 /**
  * TODO Example 7 - Сортировка массива с циклом
  * Напиши скрипт сортировки массива строк в алфавитном порядке по первой букве элемента.
  */
  const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
  // const ua = ['б', 'а', 'е', 'ж', 'в', 'д'];
  // const numbers = [2, 5, 1, 7, 9, 3]
  
  // #1 [2, 1, 5, 7, 3, 9]
  // #2 [1, 2, 5, 3, 7, *9]
  // #3 [1, 2, 3, 5, *7, *9]
  // #3 [1, 2, 3, *5, *7, *9]
  
  // endI - граница основного цикла, это всегда длина массива - 1
  // endJ - граница вложенного массива минус текущая итерация основного цикла
  
  // was swap - если они прошел по всему массиву и не поменял местами не один элемент
  // значит все стоят в нужном порябке и дальше идти по массиву не нужно
  
 
  
  /**
   * TODO Example 8 - Поиск элемента
   * Напиши скрипт поиска самого маленького числа в массиве.
   * Код должен работать для любого массива чисел. Используй цикл для решения задачи.
   */
  
  const numbers = [2, 17, 94, 1, 23, 37];
  
  
  // console.log('min', min); // 1
 


//   module 2.2

/**
 * Example 6
 * Реализуйте функцию twoSum. 
 * На вход передаем массив с числами первым аргументом и искомое число вторым.
 * Функция должна вернуть массив из 2-х индексов чисел при сложении которых сумма будет равна искомому числу (второму аргументу). 
 * 
 * console.log(twoSum([2, 4, 1, 5, 7], 8)); // [2, 4]
 * console.log(twoSum([2, 4, 1, 5, 7], 3)); // [0, 2]
 */






// task 8
// const fruits = ["apple", "peach", "pear", "banana"];
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex]

// console.log(lastElementIndex);
// console.log(lastElement);

// task 16

// function makeArray(firstArray, secondArray, maxLength) {
// const allArray = firstArray.concat(secondArray)
// if (allArray.length > maxLength) {
//   return allArray.slice(0,maxLength)
// }
// return allArray
// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));


// task 18

// function calculateTotal(number) {
//   let sum = 0;
// for (let i = 0; i <= number; i += 1) {
//   sum += i
// }
// return sum
// }

// console.log(calculateTotal(1));
// console.log(calculateTotal(18));


// //! task 21  forgot

// function findLongestWord(string) {
//   const newString = string.split(" ")
//   let longestString = newString[0];
//   for (const string of newString) {
//     if (string.length > longestString.length) {
//       longestString = string
//     }
//   }
//   return longestString
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("May the force be with you"));


// task 22

// function createArrayOfNumbers(min, max) {
//   const newArr = [];
//   for (let i = min; i <= max; i += 1) {
//     newArr.push(i)
//   }
//   return newArr
// }

// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));


// task 23

// function filterArray(numbers, value) {
// const newArr = [];
// for (const number of numbers) {
//   if (number > value) {
//     newArr.push(number)
//   }
// }
// return newArr
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([12, 24, 8, 41, 76], 38));


// task 25

// function getCommonElements(array1, array2) {
// const newArr = [];
// for (let i = 0; i < array1.length; i += 1) {
//   if (array2.includes(array1[i])) {
//     newArr.push(array1[i])
//   }
// }
// return newArr
// }

// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));


// task 29

// function getEvenNumbers(start, end) {
// const newArr = [];
// for (let i = start; i < end; i += 1) {
//  if (i % 2 === 0) {
//    newArr.push(i)
//  }
// }
// return newArr
// }

// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(6, 12));

// task 32

// function includes(array, value) {
// const newArr = [];
// for (let i = 0; i < array.length; i += 1) {
//   if (array[i] === value) {
//     return true;
//   }
// }
// return false;
// }

// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));
// console.log(includes([1, 2, 3, 4, 5], 17));









// заняття з ментором

// task 1

// You need to calculate amount of tip to give in a restaurant/cafe.
// 	Workflow:
// 1.	User inputs check summ. (Use “prompt” function).
// 2.	User inputs tip percentage. (Use “prompt” function)
// 3.   For cancelled input show “Canceled.”
// 4.	You need to validate the input data: both values should be numbers, check summ can’t be
// a negative number, percentage can’t be negative and bigger than 100.
// 5.	If input data isn’t valid, you should show message “Invalid input data”. (Use “alert” function).
// 6.	You need to calculate tip amount and total sum to pay.
// 7.	Show message: (example). Use ”alert” function
// Check summ: 200
// Tip: 15%
// Tip amount: 30
// Total sum to pay:  230



// Вам потрібно розрахувати суму чайових, яку потрібно дати в ресторані/кафе.
// Робочий процес:
// 1. Контрольна сума введених користувачем даних. (Використовуйте функцію «підказка»).
// 2. Відсоток чайових, введених користувачем. (Використовуйте функцію «підказка»)
// 3. Для скасованого введення показати «Скасовано».
// 4. Необхідно перевірити вхідні дані: обидва значення мають бути числами, контрольна сума не може бути
// від’ємне число, відсоток не може бути від’ємним і перевищувати 100.
// 5. Якщо вхідні дані недійсні, ви повинні показати повідомлення «Недійсні вхідні дані». (Використовуйте функцію «попередження»).
// 6. Вам потрібно розрахувати суму чайових і загальну суму до сплати.
// 7. Показати повідомлення: (приклад). Використовуйте функцію «попередження».
// Чекова сума: 200
// Чайові: 15%
// Сума чайових: 30
// Загальна сума до сплати: 230


// const summ =  prompt("Input sum");
// const percentage = prompt("Inputs tip percentage");
// if(summ === null  ||  percentage === null) {
// console.log("cenceled");
// } else {
//   const parseSumm = Number.parseFloat(summ)
//   const parsePercentage = Number.parseFloat(percentage)
  
//   if (Number.isNaN(parseSumm) || 
//   Number.isNaN(parsePercentage) ||
//   parseSumm < 0 ||
//   parsePercentage < 0 ||
//   parsePercentage > 100
//   ) {
//     alert("Invalid input data")
//   } else {
//     const tipAmount = (parseSumm * parsePercentage) / 100;
//     const total = parseSumm + tipAmount;
//    alert (
//      alert(`Check summ: ${parsedSumm} \nTip: ${parsedParcentage}  \nTip amount: ${tipAmount.toFixed(2)}  \nTotal sum to pay:  ${total.toFixed(2)}`)
//     )
//   }
// }

// task 2

// Користувач збирається ввести слово. Ваше завдання знайти середній символ цього слова.
// Якщо довжина слова непарна - повертає середній символ. Якщо довжина слова парна - повертає середні 2 символи.
// Ви повинні перевірити порожнє значення та значення лише з пробілами, у такому випадку показати повідомлення: «Недійсне значення».
// Для введення користувачем використовуйте функцію «підказка». Для відображення результату використовуйте функцію «alert».
 
// Приклади:
// Для введення користувачем «test» має повернути «es»
// Для введення користувачем «символ» має повернути «a»
// Для введення користувачем «B» має повернути «B»
// Для введення користувачем «» має повернути «Недійсне значення»
// Для введення користувачем « » має повернути «Недійсне значення»


// User is going to input a word. Your task is to find the middle character of this word. 
// If the word’s length is odd - return the middle character.If word’s length is even - return the middle 2 characters. 
// You should validate for empty value and for value with spaces only, in that case show message: “Invalid value”. 
// For user input use “prompt” function. For displaying result use “alert” function. 
 
// Examples: 
//  For user input “test” should return “es” 
//  For user input “character” should return “a” 
//  For user input “B” should return “B” 
//  For user input “” should return “Invalid value” 
// For user input “       “ should return “Invalid value”


// const string = prompt("write your string");


// if (string === null || string.trim() === " "){
//   alert("Invalied value")
// } else {
//   const count = string.length
//   if (string.length % 2 === 0) {
//     alert (string.slice(count / 2 - 1 , count / 2 + 1))
//   } else {
//     const middle = Math.floor(count / 2)
//     alert(string.slice(middle, middle + 1));
//   }
// }

// task 3

// const a = ["a", "b", "c"]; 
// const b = [1, [2, 3]]; 
// const c = 0;


// const firstB = [b[0]].concat(b[1])
// const sum = a.concat(c, firstB)

// console.log(firstB);
// console.log(sum);



// Result: ["a", "b", "c", 0, 1, 2, 3];


// task 4


// const a = ["a", "b", "c", "d", "e", "f", "g", "h"];

// const b = a.slice()

// const string = b.splice(3, 3, b[0], b[1], b[2])
// console.log(b);
// console.log(a);


// const c = a.copyWithin(3, 0, 3)
// console.log(c);


// Result: ["a", "b", "c", "a", "b", "c", "g", "h"];


// task 5


// const a = ['a', 'k', 'n', 'h', 'n', 'n', 'k']
// let index = 0
// for (let i = 0; i < a.length; i += 1) {
//  if (a[i] === "n") {
//   index = i
//  }
// }

// console.log(index);



// task 6



// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // const b = a.splice(6, 3, 0, 0, 0)

// // console.log(a);

// const result = a.fill(0, 5, 8)

// console.log(result);


// // Result: [1, 2, 3, 4, 5, 0, 0, 0, 9, 10];



















































// заняття з ментором


// You need to calculate amount of tip to give in a restaurant/cafe.
// 	Workflow:
// 1.	User inputs check summ. (Use “prompt” function).
// 2.	User inputs tip percentage. (Use “prompt” function)
// 3.   For cancelled input show “Canceled.”
// 4.	You need to validate the input data: both values should be numbers, check summ can’t be
// a negative number, percentage can’t be negative and bigger than 100.
// 5.	If input data isn’t valid, you should show message “Invalid input data”. (Use “alert” function).
// 6.	You need to calculate tip amount and total sum to pay.
// 7.	Show message: (example). Use ”alert” function
// Check summ: 200
// Tip: 15%
// Tip amount: 30
// Total sum to pay:  230



// Вам потрібно розрахувати суму чайових, яку потрібно дати в ресторані/кафе.
// Робочий процес:
// 1. Контрольна сума введених користувачем даних. (Використовуйте функцію «підказка»).
// 2. Відсоток чайових, введених користувачем. (Використовуйте функцію «підказка»)
// 3. Для скасованого введення показати «Скасовано».
// 4. Необхідно перевірити вхідні дані: обидва значення мають бути числами, контрольна сума не може бути
// від’ємне число, відсоток не може бути від’ємним і перевищувати 100.
// 5. Якщо вхідні дані недійсні, ви повинні показати повідомлення «Недійсні вхідні дані». (Використовуйте функцію «попередження»).
// 6. Вам потрібно розрахувати суму чайових і загальну суму до сплати.
// 7. Показати повідомлення: (приклад). Використовуйте функцію «попередження».
// Чекова сума: 200
// Чайові: 15%
// Сума чайових: 30
// Загальна сума до сплати: 230




// const summ = prompt("User inputs check summ");
// const percentage = prompt("Input tip percentage");

// if (summ === null || percentage === null) {
//   alert("Cenceled")
// } else {
//   const parsedSumm = Number.parseFloat(summ);
//   const parsedParcentage = Number.parseFloat(percentage);

//   if(Number.isNaN(parsedSumm) || Number.isNaN(percentage) ||
//   parsedSumm <= 0  || parsedParcentage <= 0 || parsedParcentage > 100) {
//   alert("Invalid input data")
//   } else {
//     const tipAmount = parsedSumm * parsedParcentage /  100;
//     const total = parsedSumm + tipAmount
//     alert(`Check summ: ${parsedSumm} \nTip: ${parsedParcentage}  \nTip amount: ${tipAmount.toFixed(2)}  \nTotal sum to pay:  ${total.toFixed(2)}`)
//   }

// }






// Логіку зробив сам
// const input = Number.parseInt(prompt("User inputs check summ"))
// const percentage = Number.parseInt(prompt("Input tip percentage"))
// const sumPercentage = input * percentage / 100

// if(input === null || percentage === null) {
//   alert("Canceled")
// } else if (isNaN(input) || isNaN(percentage) || input <= 0 
// || percentage <= 0 || percentage > 100) {
//   alert("Invalid input data")
// } else {
//   alert (` 
//   Чекова сума: ${input}
//   Чайові: ${percentage}%
//   Сума чайових: ${sumPercentage} 
//   Загальна сума до сплати: ${input + sumPercentage}`)
// }

// console.log(input);
// console.log(percentage);





// User is going to input a word. Your task is to find the middle character of this word. 
// If the word’s length is odd - return the middle character.If word’s length is even - return the middle 2 characters. 
// You should validate for empty value and for value with spaces only, in that case show message: “Invalid value”. 
// For user input use “prompt” function. For displaying result use “alert” function. 
 
// Examples: 
//  For user input “test” should return “es” 
//  For user input “character” should return “a” 
//  For user input “B” should return “B” 
//  For user input “” should return “Invalid value” 
// For user input “       “ should return “Invalid value”


// Користувач збирається ввести слово. Ваше завдання знайти середній символ цього слова.
// Якщо довжина слова непарна - повертає середній символ. Якщо довжина слова парна - повертає середні 2 символи.
// Ви повинні перевірити порожнє значення та значення лише з пробілами, у такому випадку показати повідомлення: «Недійсне значення».
// Для введення користувачем використовуйте функцію «підказка». Для відображення результату використовуйте функцію «alert».
 
// Приклади:
// Для введення користувачем «test» має повернути «es»
// Для введення користувачем «символ» має повернути «a»
// Для введення користувачем «B» має повернути «B»
// Для введення користувачем «» має повернути «Недійсне значення»
// Для введення користувачем « » має повернути «Недійсне значення»

// const string = prompt("write your string");


// if (string === null || string.trim() === " "){
//   alert("Invalied value")
// } else {
//   const count = string.length
//   if (string.length % 2 === 0) {
//     alert (string.slice(count / 2 - 1 , count / 2 + 1))
//   } else {
//     const middle = Math.floor(count / 2)
//     alert(string.slice(middle, middle + 1));
//   }
// }









// const a = ["a", "b", "c"]; 
// const b = [1, [2, 3]]; 
// const c = 0;




// Result: ["a", "b", "c", 0, 1, 2, 3];









// const a = ["a", "b", "c", "d", "e", "f", "g", "h"];




// Result: ["a", "b", "c", "a", "b", "c", "g", "h"];









// const a = ['a', 'k', 'n', 'h', 'n', 'n', 'k']








// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]




// Result: [1, 2, 3, 4, 5, 0, 0, 0, 9, 10];


















