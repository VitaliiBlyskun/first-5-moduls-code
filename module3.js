// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };
  
//   for (const key in book) {
//     // Ключ
//     console.log(key);
//     // Значення властивості з таким ключем
//     console.log(book[key]);
//   }



//   const animal = {
//     legs: 4,
//   };
//   const dog = Object.create(animal);
//   dog.name = "Манго";
  
//   console.log(dog); // {name: 'Манго'}
//   console.log(dog.name); // 'Манго'
//   console.log(dog.legs); // 4


//   // ❌ Повертає true для всіх властивостей
// console.log("name" in dog); // true
// console.log("legs" in dog); // true

// // ✅ Повертає true тільки для власних властивостей
// console.log(dog.hasOwnProperty("name")); // true
// console.log(dog.hasOwnProperty("legs")); // false



// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };
//   const keys = Object.keys(book);
  
//   for (const key of keys) {
//     // Ключ
//     console.log(key);
//     // Значення властивості
//     console.log(book[key]);
//   }




// let userInfo = {
//     name: "Vito",
//     age: 25,
//     "likes javascript": true,
// }

// console.log(userInfo);
// console.log(userInfo.name);
// console.log(userInfo["likes javascript"]);


// let firstPart = "likes";
// let userInfo = {
//     name: "Vito",
//     age: 25,
//     [firstPart + " js"] : true,
// }

// console.log(userInfo["likes js"]);


// let firstPart = "likes";
// let userInfo = {
//     name: "Vito",
//     age: 25,
//     [firstPart] : true,
// }

// console.log(userInfo[firstPart]);

// let key = "name"
// console.log(userInfo[key]);


// Symbol

// let id = Symbol("id");
// let userInfo = {
//     name: "Vito",
//     age: 25,
//     [id]: "Some value"
// };

// console.log(userInfo);


// function makeUserInfo(name, age) {
//     return {
//         name,
//         age,
//         "likes js": true
//     }
// }

// let user = makeUserInfo("Vito", 30)
// console.log(user);


// let userInfo = {
//     name: "Vito",
//     age: 25,
// }
// console.log(userInfo);

// let user = userInfo
// console.log(user);

// user.age = 18
// console.log(userInfo);


// let userInfo = {
//     name: "Vito",
//     age: 25,
// }

// if (userInfo.age) {
//     console.log(userInfo.age);
// }


// let userInfo = {
//     name: "Vito",
//     age: 25,
//     adress: {
//         city: "Voloc",
//         street: "Osypenko"
//     }
// }

// console.log(userInfo?.adress?.city);

// let userInfo = {
//     name: "Vito",
//     age: 25,
//     adress: {
//         city: "Voloc",
//         street: "Osypenko"
//     }
// }
// if ("name" in userInfo) {
//     console.log(userInfo.name);
// }


// for in


// let userInfo = {
//     name: "Vito",
//     age: 25,
//     adress: {
//         city: "Voloc",
//         street: "Osypenko"
//     }
// }

// for (let key in userInfo) {
//     console.log(key);
//     console.log(userInfo[key]);
// }

// for (let key in userInfo.adress) {
//     console.log(key);
//     console.log(userInfo.adress[key]);
// }




// task 12

// function countProps(object) {
//     let propCount = 0;
//     // Change code below this line
//    propCount = Object.keys(object).length
//     // Change code above this line
//     return propCount;
//   }

//   console.log(countProps({ name: "Mango", age: 2 }));
//   console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));


// task 13
// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   const values = [];
//   // Change code below this line
//   const keys = Object.keys(apartment);
//   for (const key of keys) {
//     values.push(key)
//   }

//   console.log(values);


// task 14

// function countProps(object) {
//     // Change code below this line
//     let propCount = 0;
  
//     const newArr = Object.keys(object)
//     for (const key of newArr) {
//       propCount += 1
//     }
  
//     return propCount;
//     // Change code above this line
//   }

//   console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
//   console.log(countProps({ name: "Mango", age: 2 }));
//   console.log(countProps({}));

// task 16

// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//     // Change code below this line
//   const allSalaries = Object.values(salaries);
//   for (const salary of allSalaries) {
//     totalSalary += salary 
//   }

//     // Change code above this line
//     return totalSalary;
//   }

//   console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
//   console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));


// task 17

// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];
  
//   const hexColors = [];
//   const rgbColors = [];
//   // Change code below this line

//   for (const color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb)
//   }

//   console.log(hexColors);
//   console.log(rgbColors);


// task 18
  

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
  // Change code below this line

//  for (const key of products) {
//     if (productName === key.name) {
//     return key.price;
//     }
//   }
//    return null;
  // Change code above this line
// }


//   console.log(getProductPrice("Radar"));
//   console.log(getProductPrice("Scanner"));

// task 19

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   function getAllPropValues(propName) {
//     // Change code below this line
//     const propValues = [];
    
//     for (const product of products) {
//         if (product[propName]) {
//      propValues.push(product[propName])
           
//         }
//     }
//     return propValues;


//     // Change code above this line
//   }


//   console.log(getAllPropValues("price"));
//   console.log(getAllPropValues("quantity"));

// task 20

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   function calculateTotalPrice(productName) {
//     // Change code below this line
//     let sum = 0;
//   for (const product of products) {
//     if (productName === product.name) {
//         sum = product.price * product.quantity;
//     return sum    
//     }
//    }
//   return 0
//     // Change code above this line
//   }
  
//    console.log(calculateTotalPrice('Radar'))
//    console.log(calculateTotalPrice('Droid'))


// task 21

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
//   // Change code below this line
  
//   const yesterday = highTemperatures.yesterday;
//   const today = highTemperatures.today;
//   const tomorrow = highTemperatures.tomorrow;
  
//   // Change code above this line
//   const meanTemperature = (yesterday + today + tomorrow) / 3;

//   task 22

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
//   // Change code below this line
  
//   const {yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures
  
  
//   // Change code above this line
//   const meanTemperature = (yesterday + today + tomorrow) / 3;

// task 31

// // Change code below this line
// function add(...args) {
//     // console.log(args);
// let multi = 0;
// for (const arg of args) {
//     multi += arg
// }
// return multi 
//     // Change code above this line
//   }
// console.log(add(12, 4, 11, 48));  


// task 32

// Change code below this line
// function addOverNum(firstNumber, ...args) {
//     let total = 0;
  
//     for (const arg of args) {
//         if(firstNumber < arg ) {
//       total += arg;
//         }
//     }
  
//     return total;
//     // Change code above this line
//   }

//   console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
//   console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));


// task 33

// Change code below this line
// function findMatches(arr, ...args) {
//     const matches = []; // Don't change this line
//   for (const arg of args) {
//     if (arr.includes(arg)){
//         matches.push(arg)
//     }
//   }
//     // Change code above this line
//     return matches;
//   }

//   console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
//   console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
//   console.log(findMatches([63, 11, 8, 29], 4, 7, 16));
  

// task 35

// const bookShelf = {
//     books: ["The last kingdom", "Haze", "The guardian of dreams"],
//     updateBook(oldName, newName) {
//       // Change code below this line
//     const numberIndex =  this.books.indexOf(oldName)
//     this.books.splice(numberIndex, 1, newName);
  
//   return this.books
//       // Change code above this line
//     },
//   };

//   console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
//   console.log(bookShelf.updateBook("The last kingdom", "Dune"));


// task 38

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     addPotion(potionName) {
//       // Change code below this line
//   return this.potions.push(potionName)
  
  
//       // Change code above this line
//     },
//   };

// console.log(atTheOldToad.addPotion("Invisibility"));


// task 39

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     removePotion(potionName) {
//       // Change code below this line
//     const numberIndex = this.potions.indexOf(potionName);
//     return this.potions.splice(numberIndex, 1)
  
//       // Change code above this line
//     },
//   };
  
//   console.log(atTheOldToad.removePotion("Dragon breath"));
//   console.log(atTheOldToad.potions);


// task 40

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     updatePotionName(oldName, newName) {
//       // Change code below this line
//       const numberIndex = this.potions.indexOf(oldName);
//       return this.potions.splice(numberIndex, 1, newName)
  
//       // Change code above this line
//     },
//   };

// task 41


// const atTheOldToad = {
//     potions: [
//       { name: "Speed potion", price: 460 },
//       { name: "Dragon breath", price: 780 },
//       { name: "Stone skin", price: 520 },
//     ],
//     // Change code below this line
//     getPotions() {
//       return this.potions;
//     },
//     addPotion(newPotion) {
//       if (this.potions.includes(newPotion)) {
//         return `Error! Potion ${newPotion} is already in your inventory!`;
//       }
  
//       this.potions.push(newPotion);
//     },
//     removePotion(potionName) {
//       const potionIndex = this.potions.indexOf(potionName);
  
//       if (potionIndex === -1) {
//         return `Potion ${potionName} is not in inventory!`;
//       }
  
//       this.potions.splice(potionIndex, 1);
//     },
//     updatePotionName(oldName, newName) {
//       const potionIndex = this.potions.indexOf(oldName);
  
//       if (potionIndex === -1) {
//         return `Potion ${oldName} is not in inventory!`;
//       }
  
//       this.potions.splice(potionIndex, 1, newName);
//     },
//     // Change code above this line
//   };
  
//   console.log(atTheOldToad.getPotions());
//   console.log(atTheOldToad.addPotion({ name: 'Invisibility', price: 620 }));
//   console.log(atTheOldToad.addPotion({ name: 'Power potion', price: 270 }));
//   console.log(atTheOldToad.addPotion({ name: 'Stone skin', price: 240 }));
//   console.log(atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 }));
//   console.log(atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 }));
//   console.log(atTheOldToad.removePotion('Dragon breath'));
//   console.log(atTheOldToad.removePotion('Speed potion'));
//   console.log(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'));
//   console.log(atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion'));
  

//   console.log( 5n > 1 )

//   const scores = [89, 64, 42, 17, 93, 51, 26];
// Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);
// const score = {...scores};

// console.log(bestScore);
// console.log(worstScore);
// console.log(score);




















// task 12

// function countProps(object) {
//     let propCount = 0;
//     // Change code below this line
//     propCount = Object.keys(object).length
//     // Change code above this line
//     return propCount;
//   }


//   console.log(countProps({ name: "Mango", age: 2 }));
//   console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
  

//? task 13  дивити вби було значення

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for (const key of keys) {
//   values.push(apartment[key])
// }
// console.log(values);



//   task 14

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
// const arr = Object.keys(object)
// for (const elem of arr) {
// propCount += 1
// }
// return propCount
//   // Change code above this line
// }

//   console.log(countProps({ name: "Mango", age: 2 }));
//   console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));


//   task 16

// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//     // Change code below this line
//     const array = Object.values(salaries)
//     for (const arr of array) {
//       totalSalary += arr
//     }
//     // Change code above this line
//     return totalSalary;
//   }

//   console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
//   console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));



//   task 17

// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];
  
//   const hexColors = [];
//   const rgbColors = [];
//   // Change code below this line
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }



//   console.log(hexColors);
//   console.log(rgbColors);


//! task 18 не зробив

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   function getProductPrice(productName) {
//     // Change code below this line
//     for (const product of products) {
//       if (product.name === productName) {
//         return product.price
//       }
//     }
//     return null
//     // Change code above this line
//   }

//   console.log(getProductPrice("Scanner"));
//   console.log(getProductPrice("Grip"));
//   console.log(getProductPrice("Engine"));


//! task 19 не зробив

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   function getAllPropValues(propName) {
//     // Change code below this line
//     const newArr = [];
//     for (const product of products) {
//       if (product[propName]) {
//          newArr.push(product[propName])
//       }
//     }
//   return newArr
//     // Change code above this line
//   }

//   console.log(getAllPropValues("name"));
//   console.log(getAllPropValues("quantity"));


//! task 20 не зробив

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   function calculateTotalPrice(productName) {
//     // Change code below this line
//     let total = 0;
//     for (const product of products) {
//       if (product.name === productName) {
//         total = product.price * product.quantity
//       }
//     }
//     return total
//     // Change code above this line
//   }

// console.log(calculateTotalPrice("Droid"));
// console.log(calculateTotalPrice("Scanner"));
// console.log(calculateTotalPrice("Blaster"));


//  task 21

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
//   // Change code below this line

//   // Change code above this line
//   const meanTemperature = (yesterday + today + tomorrow) / 3;

//   console.log(meanTemperature );

//   task 22

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
//   // Change code below this line

  
//   // Change code above this line
//   const meanTemperature = (yesterday + today + tomorrow) / 3;

// ? task 30 розібратися

// function makeTask(data) {
//     const completed = false;
//     const category = "General";
//     const priority = "Normal";
//     // Change code below this line
//     // return {
//     //   completed,
//     //   category,
//     //   priority,
//     //   ...data,
//     // }

//     // Change code above this line
//   }

//   console.log(makeTask({ category: "Finance", text: "Take interest" }));
//   console.log(makeTask({ priority: "Low", text: "Choose shampoo" }));
//   console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));

// task 31

// // Change code below this line
// function add(...args) {
// let total = 0;
// for (const arg of args) {
//   total += arg
// }
// return total
//     // Change code above this line
// }

//   console.log(add(32, 6, 13, 19, 8));
//   console.log(add(74, 11, 62, 46, 12, 36));



// task 32

// // Change code below this line
// function addOverNum(firstNumber, ...args) {
// let total = 0;
// for (const arg of args) {
//   if (arg > firstNumber) {
//     total += arg
//   }
// }
// return total;
//   // Change code above this line
// }

//   console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
//   console.log(addOverNum(15, 32, 6, 13, 19, 8));
  


// task 33

// // Change code below this line
// function findMatches(array, ...args) {
//   const matches = []; // Don't change this line
// for (const arg of args) {
//   if (array.includes(arg)) {
//     matches.push(arg)
//   }
// }
//   // Change code above this line
//   return matches;
// }


//   console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
//   console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
//   console.log(findMatches([63, 11, 8, 29], 4, 7, 16));
  

// task 35

// const bookShelf = {
//     books: ["The last kingdom", "Haze", "The guardian of dreams"],
//     updateBook(oldName, newName) {
//       // Change code below this line
//       const index =  this.books.indexOf(oldName);
//       return this.books.splice(index, 1, newName);
//       // Change code above this line
//     },
//   };
 
//   console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
//   console.log(bookShelf.updateBook("The last kingdom", "Dune"));
//   console.log(bookShelf.books);


// task 38

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     addPotion(potionName) {
//       // Change code below this line
//       return this.potions.push(potionName)
//       // Change code above this line
//     },
//   };

// console.log(atTheOldToad.addPotion("Invisibility"));


// task 39

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     removePotion(potionName) {
//       // Change code below this line
// const index = this.potions.indexOf(potionName);
// return this.potions.splice(index,1)
//       // Change code above this line
//     },
//   };
  
//   console.log(atTheOldToad.removePotion("Dragon breath"));
//   console.log(atTheOldToad.potions);


// task 40

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     updatePotionName(oldName, newName) {
//       // Change code below this line
// const index = this.potions.indexOf(oldName)
// return this.potions.splice(index, 1, newName)
//       // Change code above this line
//     },
//   };

//   console.log(atTheOldToad.potions);
//   console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
//   console.log(atTheOldToad.updatePotionName("Stone skin", "Invisibility"));
//   console.log(atTheOldToad.potions);


// task 41 the experiment

// const atTheOldToad = {
//     potions: [
//      { name: 'Speed potion', price: 460 },
//      { name: 'Dragon breath', price: 780 },
//      { name: 'Stone skin', price: 520 },
//     ],
//     // Change code below this line
//     getPotions() {
//      return this.potions;
//     },
//     addPotion(newPotion) {
//      for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//       return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//      }
//      this.potions.push(newPotion);
//     },
//     removePotion(potionName) {
//      for (const potion of this.potions) {
//        if (potionName === potion.name) {
//          return this.potions.splice(potion, 1);
//        }
//      }
//      return `Potion ${potionName} is not in inventory!`;
//     },
//     updatePotionName(oldName, newName) {
//        for (const potion of this.potions){
//          if (oldName === potion.name) {
//            return (potion.name = newName);
//       }
//      }
//      return `Potion ${oldName} is not in inventory!`;
//     },
//     // Change code above this line
//    };
   
   
   // console.log(atTheOldToad.getPotions());
   //   console.log(atTheOldToad.addPotion({ name: 'Invisibility', price: 620 }));
   //   console.log(atTheOldToad.addPotion({ name: 'Power potion', price: 270 }));
   //   console.log(atTheOldToad.addPotion({ name: 'Stone skin', price: 240 }));
   //   console.log(atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 }));
   //   console.log(atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 }));
    //  console.log(atTheOldToad.removePotion('Dragon breath')); //`[ { name: 'Speed potion', price: 460 }, { name: 'Stone skin', price: 520 } ]`
    //  console.log(atTheOldToad.removePotion('Speed potion')); // `[ { name: 'Dragon breath', price: 780 }, { name: 'Stone skin', price: 520 }]`
     // console.log(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'));
     // console.log(atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion'));
     
   











// Задача з лекції від ментора

// // ## Example 4 - Комплексные задачи

// // Напиши скрипт управления личным кабинетом интернет банка. Есть объект `account`
// // в котором необходимо реализовать методы для работы с балансом и историей
// // транзакций.

// ```js
// /*
//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
//  */
// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */
// const balance = "balance";

// const account = {
//   // Текущий баланс счета
//   balance: 0,

//   // История транзакций
//   transactions: [],

/*
 * Метод создает и возвращает объект транзакции.
 * Принимает сумму и тип транзакции.
 */
// createTransaction(amount, type) {
//   return {
//     amount,
//     type,
//     id: account.transactions.length,
//   };

// createTransaction(amount, type) {
//   // const this = account
//   return {
//     amount,
//     type,
//     id: this.transactions.length, // account.transactions.length
//   };

//   // return {
//   //   amount: amount,
//   //   type: type,
//   //   id: account.transactions.length,
//   // };
// },

/*
 * Метод отвечающий за добавление суммы к балансу.
 * Принимает сумму танзакции.
 * Вызывает createTransaction для создания объекта транзакции
 * после чего добавляет его в историю транзакций
 */
// deposit(amount) {
//   // const this = account
//   this.balance += amount;
//   const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
//   this.transactions.push(transaction);
// },

/*
 * Метод отвечающий за снятие суммы с баланса.
 * Принимает сумму танзакции.
 * Вызывает createTransaction для создания объекта транзакции
 * после чего добавляет его в историю транзакций.
 *
 * Если amount больше чем текущий баланс, выводи сообщение
 * о том, что снятие такой суммы не возможно, недостаточно средств.
 */
//   withdraw(amount) {
//     // const this = account
//     if (amount > this.balance) {
//       return "Не вистачає коштів";
//     }
//     this.balance -= amount;
//     const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
//     this.transactions.push(transaction);
//   },

//   /*
//    * Метод возвращает текущий баланс
//    */
//   getBalance() {
//     return this.balance;
//   },

//   /*
//    * Метод ищет и возвращает объект транзации по id
//    */
//   getTransactionDetails(id) {
//     for (const transaction of this.transactions) {
//       if (transaction.id === id) {
//         return transaction;
//       }
//     }
//     return "Операції не знайдено";
//   },

//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
//    */
//   getTransactionTotal(type) {
//     let total = 0;
//     for (const transaction of this.transactions) {
//       if (transaction.type === type) {
//         total += transaction.amount;
//       }
//     }
//     return total;
//   },
// };

// console.log(account.getBalance()); // 0
// account.deposit(150);
// account.deposit(550);
// account.deposit(50);
// account.deposit(1150);
// account.withdraw(350);
// account.withdraw(150);
// console.log(account.getBalance()); // 100
// console.log(account.transactions);
// console.log(account.getTransactionDetails(100));
// console.log(account.getTransactionTotal(Transaction.WITHDRAW));
// // ```


























// lesson with Mentor


// TASK 1

// Нужно написать функцию которая принимает 2 параметра
// obj и key, которая будет перебирать объект
// если у объекта есть такой ключ - вернет true

// const obj = {
//   name: "Vito",
//   car: "Mercedes",
//   carColor: "Black"
// }

// const fn = function(obj, key) {
//   const arr = Object.keys(obj)
//   for (const elem of arr) {
//     if (elem === key) {
//       return true
//     }
//   }
//   return false
// }


// console.log(fn(obj, "carColor"));
// console.log(fn(obj, "country"));



// TASK 2 (має додавати по 2 ближні елементи)

// Напиши функцію яка буде сумувати числа і пушити їх в новий масив

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// const doubleArr = [4, 8, 33, 88, 23, 53, 11, 90, 44, 99, 67, 22]


// function count(array) {
// const newArr =[];
// for (let i = 0; i < array.length; i += 2) {
//   newArr.push(array[i] + array[i + 1])
// }
// return newArr
// }

// console.log(count(someArr));
// console.log(count(doubleArr));


// TASK 3


// Напишіть код для сумування всіх зарплат і збережіть результат у змінній sum
// Має вийти 1200. Якшо об'єкт  salaries  пустий, то результат має бути 0.
// У нас є об'ект де зберігаються зарплати нашої команди:

// let salaries = {
//   Vito: 500,
//   Edo: 400,
//   Romo: 300,
// }

// const getTotalSalariesValue = function(salaries) {
// let total = 0;
// const arr = Object.values(salaries)
// for (const elem of arr) {
//   total += elem
// }
// return total
// }

// console.log(getTotalSalariesValue(salaries));



//! TASK 4 знати автоперевіка 1 модуль

// Функция formatMessage(message, maxLength)
// принимает строку (параметр message) и форматирует её,
// если длина превышает значение в параметре maxLength.

// formatMessage("Curabitur ligula sapien", 16);
//возвращает 'Curabitur ligula...'.
// formatMessage("Curabitur ligula sapien", 23);
//возвращает 'Curabitur ligula sapien'.
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 15);
//возвращает 'Nunc sed turpis...'.
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 41);
//возвращает 'Nunc sed turpis a felis in nunc fringilla'.

// function formatMessage(message, maxLength) {
//     if (message.length > maxLength) {
//       return message.slice(0, maxLength) + "..."
//     }

// return message
// }

// console.log(formatMessage("Curabitur ligula sapien", 16));
// console.log(formatMessage("Curabitur ligula sapien", 23));
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15));
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));




//? TASK 5 розібратися

// Треба перебрати об'єкти і вивести імя кращого працівника 

//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */

// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   })
// ); // lorence
// console.log(
//     findBestEmployee({
//         poly: 12,
//         mango: 17,
//         ajax: 4,
//     }),
// ); // mango
// console.log(
//     findBestEmployee({
//         lux: 147,
//         david: 21,
//         kiwi: 19,
//         chelsy: 38,
//     }),
// ); // lux


// function findBestEmployee(employes) {
// const values = Object.values(employes);
// const maxEmploye = Math.max(...values);
// const maxIndex = values.indexOf(maxEmploye);
// const keys = Object.keys(employes);
// const bestEmploye = keys[maxIndex]
// return bestEmploye
// }



//! TASK 6  розібратися

//Напишите функцию unique(arr), которая возвращает массив,
//содержащий только уникальные элементы arr.

// const words = ["HTML","CSS", "JS", "React", "JS", "CSS", "JS",
// "Node.js", "JS", "React", "CSS", "React", "HTML", "Node.js"];

// function unique(arr) {
// const newArr = [];
// for (const word of arr) {
//   if(newArr.includes(word)){
//     continue
//   }
// newArr.push(word)
// }
// return newArr
// }

// console.log(unique(words));






























//  // ## Example 4 - Комплексные задачи

//  // Напиши скрипт управления личным кабинетом интернет банка. Есть объект `account`
//  // в котором необходимо реализовать методы для работы с балансом и историей
//  // транзакций.

//  /*
//   * Типов транзацкий всего два.
//   * Можно положить либо снять деньги со счета.
//   */
//  const Transaction = {
//    DEPOSIT: "deposit",
//    WITHDRAW: "withdraw",
//  };

//  //   Каждая транзакция это объект со свойствами: id, type и amount

//  const balance = "balance";

//  const account =  {
//   // текущий баланс рахунку
//   balance: 0,

//   // історія транзакцій
//   transactions: [],


//   //  Метод создает и возвращает объект транзакции.
//   //  Принимает сумму и тип транзакции.
//   createTransaction(amount, type) {
//     return {
//       amount,
//       type,
//       id: account.transactions.length,
//     }
//   },



//   //  Метод отвечающий за добавление суммы к балансу.
//   //  Принимает сумму танзакции.
//   //  Вызывает createTransaction для создания объекта транзакции
//   //  после чего добавляет его в историю транзакций
//   deposit(amount) {
//     account.balance += amount;
//     const transaction = account.createTransaction(amount, Transaction.DEPOSIT);
//     account.transactions.push(transaction)
//   },



//   //  Метод отвечающий за снятие суммы с баланса.
//   //  Принимает сумму танзакции.
//   //  Вызывает createTransaction для создания объекта транзакции
//   //  после чего добавляет его в историю транзакций.
//   // 
//   //  Если amount больше чем текущий баланс, выводи сообщение
//   //  о том, что снятие такой суммы не возможно, недостаточно средств.
//   withdraw(amount) {
//     if (amount > account.balance) {
//       return "Не хватає коштів"
//     }
//     account.balance -= amount;
//     const transaction = account.createTransaction(amount, Transaction.WITHDRAW);
//     account.transactions.push(transaction)
//   },



// // Метод возвращает текущий баланс
//   getBalance() {
//     return account.balance;
//   },


// // Метод ищет и возвращает объект транзации по id
//   getTransactionDetails(id) {
//     for (const transaction of account.transactions) {
//       if (transaction.id === id) {
//         return transaction
//       }
//     }
//     return "Операція не знайдена"
//   },


// // Метод возвращает количество средств
// // определенного типа транзакции из всей истории транзакций
//   getTransactionTotal(type) { 
//     let total = 0
//     for (const transaction of account.transactions) {
//       if (transaction.type === type) {
//         total += transaction.amount
//       }
//     }
//     return total
//   },
// };


// //  console.log(account.getBalance()); // 0
//  account.deposit(150);
//  account.deposit(550);
//  account.deposit(50);
//  account.deposit(1150);
//  account.withdraw(350);
//  account.withdraw(150);
//  account.withdraw(1);
//  account.withdraw(5000);
//  console.log(account.getBalance()); // 100
//  console.log(account.transactions);
//  console.log(account.getTransactionDetails(1));
//  console.log(account.getTransactionDetails(100));
//  console.log(account.getTransactionTotal(Transaction.WITHDRAW));
//  console.log(account.getTransactionTotal(Transaction.DEPOSIT));


//  попробувати зробити про казіно, іхати властивість + добавляється і 
// -віднімається і так само повиводити


































//  // ## Example 4 - Комплексные задачи із словом this

//  // Напиши скрипт управления личным кабинетом интернет банка. Есть объект `account`
//  // в котором необходимо реализовать методы для работы с балансом и историей
//  // транзакций.

//  /*
//   * Типов транзацкий всего два.
//   * Можно положить либо снять деньги со счета.
//   */
//  const Transaction = {
//    DEPOSIT: "deposit",
//    WITHDRAW: "withdraw",
//  };

//  //   Каждая транзакция это объект со свойствами: id, type и amount

//  const balance = "balance";

//  const account =  { 
//   // текущий баланс рахунку
//   balance: 0,

//   // історія транзакцій
//   transactions: [],


//   //  Метод создает и возвращает объект транзакции.
//   //  Принимает сумму и тип транзакции.
//   createTransaction(amount, type) { 
//     return {
//       amount,
//       type,
//       id: this.transactions.length,
//     }
//   },


//   //  Метод отвечающий за добавление суммы к балансу.
//   //  Принимает сумму танзакции.
//   //  Вызывает createTransaction для создания объекта транзакции
//   //  после чего добавляет его в историю транзакций
//   deposit(amount) {
//     this.balance += amount;
//     const transaction = this.createTransaction(amount, Transaction.DEPOSIT)
//      this.transactions.push(transaction)
//   },



//   //  Метод отвечающий за снятие суммы с баланса.
//   //  Принимает сумму танзакции.
//   //  Вызывает createTransaction для создания объекта транзакции
//   //  после чего добавляет его в историю транзакций.
//   // 
//   //  Если amount больше чем текущий баланс, выводи сообщение
//   //  о том, что снятие такой суммы не возможно, недостаточно средств.
//   withdraw(amount) {
//     if (amount > this.balance) {
//       return "Не хватає коштів"
//     };
//     this.balance -= amount;
//     const transaction = this.createTransaction(amount, Transaction.WITHDRAW)
//     this.transactions.push(transaction)
//   },



// // Метод возвращает текущий баланс
//   getBalance() {
//     return this.balance;
//   },


// // Метод ищет и возвращает объект транзации по id
//   getTransactionDetails(id) {
//   for (const element of this.transactions) {
//   if (element.id === id){
//     return element;
//   } 
// }
//     return "Операція не знайдена"
//   },


// // Метод возвращает количество средств
// // определенного типа транзакции из всей истории транзакций
//   getTransactionTotal(type) {
//  let total = 0
//  for (const element of this.transactions) {
//  if (element.type === type) {
//   total += element.amount
//     } 
//   }
//   return total;
//  }
// }

//  console.log(account.getBalance()); // 0
//  account.deposit(150);
//  account.deposit(550);
//  account.withdraw(50);
//  account.deposit(60);
//  account.deposit(1150);
//  account.withdraw(350);
//  account.withdraw(1);
//  console.log(account.withdraw(10000));
//  console.log(account.getBalance()); // 100
//  console.log(account.transactions);
//  console.log(account.getTransactionDetails(3));
//  console.log(account.getTransactionDetails(30));
//  console.log(account.getTransactionTotal(Transaction.WITHDRAW));
//  console.log(account.getTransactionTotal(Transaction.DEPOSIT));







// //  попробувати зробити про казіно, іхати властивість + добавляється і 
// // -віднімається і так само повиводити

// // Моя задачка казіно

// const Stavka = {
//  POKLAV: "poklav",
//  ZNIAV: "zniav"
// }

// const balance = "balance";

// const account = {
//   balance: 0,
//   history: [],

//   createHistory(sum, type) {
//     return {
//       sum,
//       type,
//       id: this.history.length,
//     }
//   },

//   win(sum) {
//     this.balance += sum;
//     const sumHistory = this.createHistory(sum, Stavka.POKLAV);
//     this.history.push(sumHistory)
//   },

//   loose(sum) {
//     if (sum > this.balance) {
//       return 'Чувак, в тебе бабла не хватає!!!';
//     };
//     this.balance -= sum;
//     const sumHistory = this.createHistory(sum, Stavka.ZNIAV);
//     this.history.push(sumHistory)
//   },

//   getBalance () {
//     return this.balance;
//   },

//   getHistoryDetails (id) {
//     for (const element of this.history) {
//       if (element.id === id) {
//         return element;
//       }
//     }
//     return "Чувак, переставай грати!!!"
//   },

//   getHistoryTotal (type) {
//     let total = 0;
//     for (const element of this.history) {
//       if (element.type === type) {
//         total += element.sum
//       }
//     }
//     return total;
//   },
// }


// console.log(account.getBalance());
// account.win(500);
// account.loose(350);
// account.loose(50);
// console.log(account.getBalance());
// console.log(account.loose(600)); 
// console.log(account.history);
// console.log(account.getHistoryDetails(1));
// console.log(account.getHistoryDetails(4));
// console.log(account.getHistoryTotal(Stavka.POKLAV));
// console.log(account.getHistoryTotal(Stavka.ZNIAV));







// task 41


// const atTheOldToad = {
//     potions: [
//       { name: "Speed potion", price: 460 },
//       { name: "Dragon breath", price: 780 },
//       { name: "Stone skin", price: 520 },
//     ],
//     // Change code below this line
//     getPotions() {
//     return this.potions
//     },

//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//   return this.potions.push(newPotion)
//   },

//   removePotion(potionName) {
//   for (let i = 0; i < this.potions.length; i += 1) {
//    if (this.potions[i].name === potionName) {
//       return this.potions.splice(i, 1)
//    }  
//   }
//     return `Error! Potion ${potionName} is already in your inventory!`;;
//   },


//   updatePotionName(oldName, newName) {
// for (let i = 0; i < this.potions.length; i += 1) {
//   if (this.potions[i].name === oldName) {
//     return this.potions[i].name = newName;
//   }
//  }
//     return `Potion ${oldName} is not in inventory!`;
//   },
  

//     // Change code above this line
//   };
  
//   console.log(atTheOldToad.getPotions());
//   console.log(atTheOldToad.addPotion({ name: 'Invisibility', price: 620 }));
//   console.log(atTheOldToad.addPotion({ name: 'Power potion', price: 270 }));
//   console.log(atTheOldToad.addPotion({ name: 'Stone skin', price: 240 }));
//   console.log(atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 }));
//   console.log(atTheOldToad.removePotion('Dragon breath'));
//   console.log(atTheOldToad.removePotion('Speed potion'));
//   console.log(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'));
//   console.log(atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion'));











//  попробувати зробити про казіно, іхати властивість + добавляється і 
// -віднімається і так само повиводити

// Моя задачка казіно

// const Stavka = {
//  POKLAV: "poklav",
//  ZNIAV: "zniav"
// }

// const balance = "balance";

// const account = {
//   balance: 0,
//   history: [],

//   createHistory(sum, type) {
//     return {
//       sum, 
//       type,
//       id: this.history.length
//     }
//   },

//   win(sum) {
//     this.balance += sum;
//     const sumHistory = this.createHistory(sum, Stavka.POKLAV);
//     this.history.push(sumHistory);
//   },

//   loose(sum) {
//     if (sum > this.balance) {
//       return 'Чувак, в тебе бабла не хватає!!!';
//     };
//     this.balance -= sum;
//     const sumHistory = this.createHistory(sum, Stavka.ZNIAV);
//     this.history.push(sumHistory);
//   },

//   getBalance () {
//   return this.account;
//   },

//   getHistoryDetails (id) {
//   for (const element of this.history) {
//     if (element.id === id) {
//       return element
//     }
//   }
//   return "Чувак, переставай грати!!!"
//   },

//   getHistoryTotal (type) {
//     let total = 0;
//     for (const element of this.history) {
//       if (element.type === type) {
//         total += element.sum
//       } 
//     }
//     return total
//   },
// }


// console.log(account.getBalance());
// account.win(500);
// account.loose(350);
// account.loose(50);
// console.log(account.getBalance());
// console.log(account.loose(600)); 
// console.log(account.history);
// console.log(account.getHistoryDetails(1));
// console.log(account.getHistoryDetails(4));
// console.log(account.getHistoryTotal(Stavka.POKLAV));
// console.log(account.getHistoryTotal(Stavka.ZNIAV));











































// task last

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//        return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     return this.potions.push(newPotion)
//   },
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i +=1) {
//       if (this.potions[i].name === potionName) {
//         return this.potions.splice(i, 1);
//       }
//     }
//         return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (this.potions[i].name === oldName) {
//         return this.potions[i].name = newName;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
// }
    



//      console.log(atTheOldToad.getPotions());
//      console.log(atTheOldToad.addPotion({ name: 'Invisibility', price: 620 }));
//      console.log(atTheOldToad.addPotion({ name: 'Power potion', price: 270 }));
//      console.log(atTheOldToad.addPotion({ name: 'Stone skin', price: 240 }));
//      console.log(atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 }));
//      console.log(atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 }));
//      console.log(atTheOldToad.removePotion('Dragon breath')); //`[ { name: 'Speed potion', price: 460 }, { name: 'Stone skin', price: 520 } ]`
//      console.log(atTheOldToad.removePotion('Speed potion')); // `[ { name: 'Dragon breath', price: 780 }, { name: 'Stone skin', price: 520 }]`
//      console.log(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'));
//      console.log(atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion'));
     