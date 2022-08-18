// task 1


// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   // Change code below this line
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
//   // Change code above this line
// };


// console.log(pizzaPalace.order('Smoked'));
// console.log(pizzaPalace.order('Four meats'));
// console.log(pizzaPalace.order('Big Mike'));
// console.log(pizzaPalace.order('Viennese'));



// task 2


// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]



// task 3


// const historyService = {
//   orders: [
//     { email: "jacob@hotmail.com", dish: "Burrito" },
//     { email: "solomon@topmail.net", dish: "Burger" },
//     { email: "artemis@coldmail.net", dish: "Pizza" },
//     { email: "solomon@topmail.net", dish: "Apple pie" },
//     { email: "jacob@hotmail.com", dish: "Taco" },
//   ],
//   // Change code below this line
//   getOrdersLog() {
//     return this.orders
//       .map(order => `email: ${order.email} dish: ${order.dish}`)
//       .join(" - ");
//   },
//   getEmails() {
//     const emails = this.orders.map(order => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter(order => order.email === email);
//   },
//   // Change code above this line
// };


// console.log(historyService.getOrdersLog());
// console.log(historyService.getEmails());
// console.log(historyService.getOrdersByEmail('solomon@topmail.net'));
// console.log(historyService.getOrdersByEmail('artemis@coldmail.net'));


// task 4

// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };
// // Change code below this line

// const child = Object.create(parent);

// // Change code above this line
// child.name = "Jason";
// child.age = 27;


// task 5

// const ancestor = {
//   name: "Paul",
//   age: 83,
//   surname: "Dawson",
//   heritage: "Irish",
// };
// // Change code below this line

// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// // Change code above this line


// console.log(ancestor);
// console.log(parent);
// console.log(child);


// ancestor.isPrototypeOf("parent")
// parent.isPrototypeOf("child")
// ancestor.hasOwnProperty("surname")


// task 6

// class Car {
//   // Change code below this line
// constructor(brand, model, price) {
//   this.brand = brand,
//   this.model = model,
//   this.price = price
// }


//   // Change code above this line
// }


// task 9

// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code below this line

//   getPrice() {
//     return this.price;
//   }

//   changePrice(newPrice) {
//     return this.price = newPrice;
//   }


//   // Change code above this line
// }



// task 10


// // Change code above this line
// class Storage {
//     constructor (items) {
//         this.items = items
//     }

// getItems() {
// return this.items;
// }

// addItem(newItem) {
// this.items.push(newItem)
// }

// removeItem(itemToRemove) {
// this.items = this.items.filter((item) => item !== itemToRemove)
// };

// };

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]



// class StringBuilder {
//   constructor(value) {
//    this.value = value;
//   }
 
//   getValue() {
//    return this.value;
//   }
//   padEnd(str) {
//    this.value = this.value + str;
//   }
 
//   padStart(str) {
//    this.value = str + this.value;
//   }
 
//   padBoth(str) {
//    this.padStart(str);
//    this.padEnd(str);
//   }
//  }
 
//  // Change code above this line
//  const builder = new StringBuilder(".");
//  console.log(builder.getValue()); // "."
//  builder.padStart("^");
//  console.log(builder.getValue()); // "^."
//  builder.padEnd("^");
//  console.log(builder.getValue()); // "^.^"
//  builder.padBoth("=");
//  console.log(builder.getValue()); // "=^.^="



// // task 12
// class Car {
//   // Change code below this line
//   #brand

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   getBrand() {
//     return this.#brand;
//   }

//   changeBrand(newBrand) {
//    this.#brand = newBrand;
//   }

//   // Change code above this line
// }








// task 15


// class Car {
//   // Change code below this line
//   #brand;
//   #model;
//   #price

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.model;
//   }

//   set model(newModel) {
//     this.model = newModel;
//   }

//   get price() {
//     return this.price;
//   }

//   set price(newPrice) {
//     this.price = newPrice;
//   }
//   // Change code above this line
// }


// task 16

// class Car {
//   // Change code below this line
//   static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice <= Car.MAX_PRICE) {
//     this.#price = newPrice;
//     }
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000



// task 17

// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line
// static checkPrice (price) {
//   if (price > Car.#MAX_PRICE) {
//     return "Error! Price exceeds the maximum"
//   }
//     return "Success! Price is within acceptable limits"
// }

//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"




// task 19

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Change code below this line

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"


// task 20

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line

//   blacklistedEmails = [];
  
//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }

//   isBlacklisted(email) {
//     if (this.blacklistedEmails.includes(email)) {
//       return true
//     }
//     return false
//   }

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }

//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true








// Урок із ментором

// task 1

// const account = {
//     owner: 'Mango',
//     balance: 24000,
//     discount: 0.1,
//     orders: ['order-1', 'order-2', 'order-3'],
//     changeDiscount(value) {
//       this.discount = value;
//     },
//     showOrders() {
//       return this.orders;
//     },
//     addOrder(cost, order) {
//       this.balance -= cost;
//       this.orders.push(order);
//     },
//   };

//   account.changeDiscount(0.15);
//   console.log(account.discount); // 0.15

//   console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3']

//   account.addOrder(5000, 'order-4');
//   console.log(account.balance); // 19000
//   console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3', 'order-4']

// task 2

// Напиши функцию-конструктор Account, которая создает объект со
// свойствами login и email. В prototype функции-конструктора добавь
// метод getInfo(), который выводит в консоль значения полей login и
// email объекта который его вызвал.

// function Account ({login, email}) {
//     this.login = login;
//     this.email = email;

// }

// Account.prototype.getInfo = function ( ) {
//     console.log(this.login, this.email);
// }

// console.log(Account.prototype.getInfo); // function

// const mango = new Account({
//   login: 'Mangozedog',
//   email: 'mango@dog.woof',
// });

// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// const poly = new Account({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// poly.getInfo(); // Login: Poly, Email: poly@mail.com

// інший метод через клас

// class Account {
//     constructor({login, email}){
//     this.login = login;
//     this.email = email;
//     }
// getInfo (){
//    console.log(this.login, this.email);
//   }
// }

// console.log(Account.prototype.getInfo); // function

// const mango = new Account({
//   login: 'Mangozedog',
//   email: 'mango@dog.woof',
// });

// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// const poly = new Account({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// poly.getInfo(); // Login: Poly, Email: poly@mail.com

// task 3

// Напиши класс Storage, который будет создавать объекты для управления складом товаров. При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.

// Добавь методы класса:

// getItems() - возвращает массив текущих товаров
// addItem(item) - получает новый товар и добавляет его к текущим
// removeItem(item) - получет товар и, если он есть, удаляет его из текущих

// class Storage {
//     constructor(items){
//         this.items = items;
//     }

//     getItems () {
//         return this.items
//     }

//     addItem(item){
//         this.items.push(item)
//     }

//     removeItem(item){
//       this.items = this.items.filter(el => el !== item)
//     }
// }

// const storage = new Storage([
//   'Нанитоиды',
//   'Пролонгер',
//   'Железные жупи',
//   'Антигравитатор',
// ]);

// const items = storage.getItems();
// console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

// storage.addItem('Дроид');
// console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

// storage.removeItem('Пролонгер');
// console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

// task 4

// const inventory = {
//     items: ['Knife', 'Gas mask'],
//     add(itemName) {
//       console.log(`Adding ${itemName} to inventory`);

//       this.items.push(itemName);
//     },
//     remove(itemName) {
//       console.log(`Removing ${itemName} from inventory`);

//       this.items = this.items.filter(item => item !== itemName);
//     },
//   };

//   const invokeInventoryAction = function(itemName, action) {
//     console.log(`Invoking action on ${itemName}`);
//     action(itemName);
//   };

//   invokeInventoryAction('Medkit', inventory.add.bind(inventory));
//   // Invoking action on Medkit
//   // Adding Medkit to inventory

//   console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

//   invokeInventoryAction('Gas mask', inventory.remove.bind(inventory));
//   // Invoking action on Gas mask
//   // Removing Gas mask from inventory

//   console.log(inventory.items); // ['Knife', 'Medkit']

// інший метод

//   const inventory = {
//     items: ['Knife', 'Gas mask'],
//     add(itemName) {
//       console.log(`Adding ${itemName} to inventory`);

//       this.items.push(itemName);
//     },
//     remove(itemName) {
//       console.log(`Removing ${itemName} from inventory`);

//       this.items = this.items.filter(item => item !== itemName);
//     },
//   };

//   const invokeInventoryAction = function(itemName, action) {
//     console.log(`Invoking action on ${itemName}`);
//    action.call(inventory, itemName);

//   invokeInventoryAction('Medkit', inventory.add);

//   // Invoking action on Medkit
//   // Adding Medkit to inventory

//   console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

//   invokeInventoryAction('Gas mask', inventory.remove);
//   // Invoking action on Gas mask
//   // Removing Gas mask from inventory

//   console.log(inventory.items); // ['Knife', 'Medkit']

//   дописати ..........









// task 1

// const account = {
//     owner: 'Mango',
//     balance: 24000,
//     discount: 0.1,
//     orders: ['order-1', 'order-2', 'order-3'],
//     changeDiscount(value) {
//       this.discount = value;
//     },
//     showOrders() {
//       return this.orders;
//     },
//     addOrder(cost, order) {
//       this.balance -= cost;
//       this.orders.push(order);
//     },
//   };

//   account.changeDiscount(0.15);
//   console.log(account.discount); // 0.15

//   console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3']

//   account.addOrder(5000, 'order-4');
//   console.log(account.balance); // 19000
//   console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3', 'order-4']



// task 2

// console.log(Account.prorotype.getInfo);

// class Account {
//   constructor ({login, email}) {
//     this.login = login;
//     this.email = email;
//   }

// getInfo (){
//    console.log(this.login, this.email);
//   }
// }

// // console.log(Account.prototype.getInfo); // function

// const mango = new Account ({
//   login: "Mangozedog",
//   email: "mango@dog.woof",
// });

// mango.getInfo();  //login: "Mangozedog", Email: mango@dog.woof

// const Poly = new Account ({
//   login: "Poly",
//   email: "poly@mail.com",
// });

// Poly.getInfo(); //login: "Poly", Email: poly@mail.com



// function Account ({login, email}) {
//     this.login = login;
//     this.email = email;
  
// }

// Account.prototype.getInfo = function ( ) {
//     console.log(this.login, this.email);
// }


// console.log(Account.prototype.getInfo); // function

// const mango = new Account ({
//   login: "Mangozedog",
//   email: "mango@dog.woof",
// });

// mango.getInfo();  //login: "Mangozedog", Email: mango@dog.woof

// const Poly = new Account ({
//   login: "Poly",
//   email: "poly@mail.com",
// });

// Poly.getInfo(); 

// console.log(mango);


// task 3

 // Напиши класс Storage, который будет создавать объекты для
  // управления складом товаров. При вызове будет получать один аргумент
  //  - начальный массив товаров, и записывать его в свойство items.

// Добавь методы класса:

// getItems() - возвращает массив текущих товаров
// addItem(item) - получает новый товар и добавляет его к текущим
// removeItem(item) - получет товар и, если он есть, удаляет его из текущих


// class Storage {
//   constructor (items) {
//     this.items = items;
//   }
  

//   getItems() {
//     return this.items;
//   }

//   addItem(item) {
//     this.items.push(item);
//   }

//   removeItem(item) {
//   this.items = this.items.filter(element => element != item)
//   }
// }




// const storage = new Storage([
//   'Нанитоиды',
//   'Пролонгер',
//   'Железные жупи',
//   'Антигравитатор',
// ]);

// const items = storage.getItems();
// console.log(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

// storage.addItem('Дроид');
// console.log(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

// storage.removeItem('Пролонгер');
// console.log(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]



// task 4


// const inventory = {
//     items: ['Knife', 'Gas mask'],
//     add(itemName) {
//       console.log(`Adding ${itemName} to inventory`);

//       this.items.push(itemName);
//     },
//     remove(itemName) {
//       console.log(`Removing ${itemName} from inventory`);

//       this.items = this.items.filter(item => item !== itemName);
//     },
//   };

//   const invokeInventoryAction = function(itemName, action) {
//     console.log(`Invoking action on ${itemName}`);
//     action(itemName);
//   };

//   invokeInventoryAction('Medkit', inventory.add.bind(inventory));
//   // Invoking action on Medkit
//   // Adding Medkit to inventory

//   console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

//   invokeInventoryAction('Gas mask', inventory.remove.bind(inventory));
//   // Invoking action on Gas mask
//   // Removing Gas mask from inventory

//   console.log(inventory.items); // ['Knife', 'Medkit']

// інший метод

  // const inventory = {
  //   items: ['Knife', 'Gas mask'],
  //   add(itemName) {
  //     console.log(`Adding ${itemName} to inventory`);

  //     this.items.push(itemName);
  //   },
  //   remove(itemName) {
  //     console.log(`Removing ${itemName} from inventory`);

  //     this.items = this.items.filter(item => item !== itemName);
  //   },
  // };

  // const invokeInventoryAction = function(itemName, action) {
  //   console.log(`Invoking action on ${itemName}`);
  //   action.call(inventory, itemName);
  // };

  // invokeInventoryAction('Medkit', inventory.add);

  // // Invoking action on Medkit
  // // Adding Medkit to inventory

  // console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

  // invokeInventoryAction('Gas mask', inventory.remove);
  // // Invoking action on Gas mask
  // // Removing Gas mask from inventory

  // console.log(inventory.items); // ['Knife', 'Medkit']


















// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line
 
//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }

//   blacklistedEmails = [];

//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }

//   isBlacklisted(email) {
//     if (this.blacklistedEmails.includes(email)){
//       return true;
//     }
//       return false;  
//   }
//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true



// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line
  
// const message = `You ordered droids worth ${orderedQuantity * pricePerDroid} credits. Delivery (${deliveryFee} credits) is included in total price.`

//   // Change code above this line
//   return message;
// }


// console.log(makeOrderMessage(2, 100, 50));



// class Car {
//   // Change code below this line
//   static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (this.#price < Car.MAX_PRICE) {
//     this.#price = newPrice;
//     }
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000


 



















// const animal = {
//     eats: true,
//   };
//   const dog = Object.create(animal);
//   dog.barks = true;
  
//   for (const key in dog) {
//     if (!dog.hasOwnProperty(key)) break;
  
//     console.log(key); // barks
//   }


// const user = {
//   tag: "Mango", 
//   showTag () {
//     console.log("showTag -> this", this);
//   },
// }

// user.showTag();




// const foo = function () {
//     console.log("foo -> this", this);
// };

// foo();




// const showTag = function () {
//   console.log("showTag -> this" , this);
//   console.log("showTag -> this.tag" , this.tag);
// }

// // showTag();

// const user = {
//   tag: 'Mango', 
// };

// user.showUserTag = showTag;
// console.log("user", user);

// user.showUserTag();


// const user = {
//   tag: "Mango",
//   showTag () {
//     console.log("showTag -> this", this);
//     console.log("showTag -> this.tag", this.tag);
//   },
// };


// const invokeAction = function (action) {
//   console.log(action);

//   action()
// };

 
// const fn = function () {
//   console.log("fn -> this", this)
// };

// fn()


// const book = {
//   title: "React for beginners",
//   showThis () {
//     console.log("ShowThis -> this", this);
//   },
//   showTitle () {
//     console.log("showTitle -> this.title", this.title);
//   },
// };

// book.showThis();


// const outerShowThis = book.showThis;
// outerShowThis();

// const outerShowTitle = book.showTitle;
// outerShowTitle();




// const makeChangeColor = function () {
//   const changeColor = function (color) {
//     console.log("changeColor -> color", this);
//     this.color = color
//   }

//   changeColor();

//   const sweater = {
//     color: "teal",
//   }


//   sweater.updateColor = changeColor;

//   // sweater.updateColor("red");

//   return sweater.updateColor
// }

// const swapColor = makeChangeColor();

// swapColor("blue")


// const makeChangeColor = function () {
//   const changeColor = function (color) {
//     console.log("changeColor -> this", this);
//     this.color = color
//   };

//   return changeColor
// };

// const updateColor = makeChangeColor();
// updateColor("yellow")


// const hat = {
//   color: "blue", 
//   updateColor,
// }

// hat.updateColor("orange")





// const counter = {
//   value: 0,
//   increment(value) {
//     console.log("increment -> this", this);
//     this.value += value;
//   },
//   decrement(value) {
//     console.log("decrement -> this", this);
//     this.value -= value;
//   }
// };

// const updateCounter = function (value, operation) {
//   operation(value)
// }

// updateCounter(10, counter.increment);
// updateCounter(5, counter.decrement);



// const showThis = function () {
//   console.log("showThis -> this", this);
// };

// // console.log(showThis);

// showThis();

// const objA = {
//   a: 5,
//   b: 10
// }

// showThis.call(objA, 1, 2, 3, 4, 5)
// showThis.apply(objA, [1, 2, 3, 4, 5])

// const changeColor = function (color) {
//   console.log("changeCalor -> this", this);
//   this.color = color;
// }

// const hat = {
//   color: "green",
// }




// const changeColor = function (color) {
//   console.log("changeColor -> this", this);
//   this.color = color
// };

// const hat = {
//   color: "black",
// };

// // changeColor.call(hat, "orange");
// // console.log(hat);

// const sweater = {
//   color: "green",
// }; 

// // changeColor.call(sweater, "blue");
// // console.log(sweater);


// // bind 

// const changeHatColor  = changeColor.bind(hat);
// const changeSweaterColor  = changeColor.bind(sweater);

// changeHatColor()
// changeHatColor();
// changeSweaterColor();






// const counter = {
//   value: 0,
//   increment(value) {
//     console.log("increment -> this", this);
//     this.value += value;
//   },
//   decrement(value) {
//     console.log("decrement -> this", this);
//     this.value -= value;
//   }
// };

// const updateCounter = function (value, operation) {
//   operation(value)
// }

// updateCounter(10, counter.increment.bind(counter));
// updateCounter(5, counter.decrement.bind(counter));

// console.log(counter);




// const objC = {
//   z: 5, 
// };
// console.log("objC", objC);

// const objB = Object.create(objC)
// objB.y = 2;

// console.log("objB", objB);

// console.log(objB.z);
// console.log(objB.y);

// const objA = Object.create(objB);
// objA.x = 1;

// console.log(objA.z);

// console.log("objA", objA);



// const Car = function ( {brand, model, price} = {} ) {
 
//   this.brand = brand;
//   this.model = model;
//   this.price = price;

//   this.changePrice = function (newPrice) {
//     this.price = newPrice
//   }
// };

// Car.prototype.sayHi = function () {
//   console.log("Car.prototype.sayHi -> this", this);
//   console.log("Hello :)");
// }

// console.log(Car.prototype);

// const myCar = new Car({
//   brand: "Audi",
//   model: "Q8",
//   price: 125000,
// });
// console.log(myCar);

// myCar.sayHi();

// const myCar2 = new Car({
//   brand: "BMW",
//   model: "X6",
//   price: 120000,
// });
// console.log(myCar2);

// myCar2.sayHi();

// const myCar3 = new Car({
//   brand: "Tesla",
//   model: "Model s",
//   price: 120000,
// });
// console.log(myCar3);

// myCar3.sayHi();









// const User = function ( {email, password} = {} ) {

//   this.email = email;
//   this.password = password
// };

// console.log(User.prototype);


// User.prototype.changeEmail = function (newEmail) {
//   this.email = newEmail
// }

// const mango = new User( {email: "mango@gmail.com", password: 123456})

// mango.changeEmail("my-new-mail@gmail.com")

// // console.log(mango);

// User.message = "Я статична властивість мене нема на екземплярі або в прототипі.";

// User.logInfo = function (obj) {
//   console.log("User.logInfo -> obj", obj);
//   console.log("Пошта :", obj.email);
//   console.log("Пароль :", obj.password);
// }

// User.logInfo(mango)


// class User {
//   // Оголошення та ініціалізація статичної властивості
//   static Roles = {
//     ADMIN: "admin",
//     EDITOR: "editor",
//   };

//   #email;
//   #role;

//   constructor({ email, role }) {
//     this.#email = email;
//     this.#role = role;
//   }

//   get role() {
//     return this.#role;
//   }

//   set role(newRole) {
//     this.#role = newRole;
//   }
// }

// const mango = new User({
//   email: "mango@mail.com",
//   role: User.Roles.ADMIN,
// });

// // console.log(mango.Roles); // undefined
// // console.log(User.Roles); // { ADMIN: "admin", EDITOR: "editor" }

// console.log(mango.role); // "admin"
// mango.role = User.Roles.EDITOR;
// console.log(mango.role); // "editor"



// class Car {

// static description = "Клас, який описує автомобіль";

// static logInfo(carObj) {
//   console.log("Car.logInfo -> carObj", carObj);
// }

// #test = "test";

//   constructor( {brand, model, price} = {} ) {
//   this.brand = brand;
//   this._model = model;
//   this.price = price;
//   }

//   changePrice(newPrice) {
//     this.price = newPrice;
//   }


//   get model () {
//     return this._model;
//   }

//   set model (newModel) {
//     this._model = newModel
//   }


  // getModel() {
  //   return this.model;
  // }

  // setModel(newModel) {
  //   this.model = newModel
  // }
// }

// console.dir(Car)

// const myCar = new Car({
//   brand: "Audi",
//   model: "Q8",
//   price: 125000,
// });
// console.log(myCar);

// console.log(Object.getPrototypeOf(myCar) === Car.prototype);


// console.log(Car.description);

// Car.logInfo(myCar)


// console.log(myCar.getModel());

// myCar.setModel("Q9");

// console.log(myCar.getModel());

// console.log(myCar);
// console.log(myCar.model);

// myCar.model = "Q9"

// console.log(myCar.model);





// const user = {
//   name: "John",
//   age: 30,
//   // sayHello() {
//   //   console.log(`Hello, my name is ${this.name}`);
//   // },
//   sayHello: function () {
//     // this
//     console.log(`Hello, my name is ${this.name}`);
//   },
// };

// console.log(user.name); // John
// console.log(user.age); // 30
// console.log(user.sayHello()); // [Function: sayHello]






// const objA = {
//   showThis() {
//     console.log(this);
//   },
// };


// const objB = {
//   foo: objA.showThis(), // foo: undefined
//   foo() {
//   // this - context of objB
//   console.log(this)
//   }
// };

// console.log("objB", objB.foo);


  
// function showThis() {
//   console.log(this);
// }

// const user = {
//   name: "John",
//   age: 30,
// };

// // showThis(); // window | undefined

// const bindShowThis = showThis.bind(user);
// bindShowThis();

// // console.log("objA", objA.logCtx); // [Function: logCtx]
// console.log("objB", objB.foo); // [Function: logCtx]
// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     console.log("this", this);
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   // callback() - це виклик методу getFullName без об'єкта
//   console.log(`Обробляємо заявку від ${callback()}.`);
// }

// const bindedCallback = customer.getFullName.bind(customer);

// makeMessage(bindedCallback); // Буде помилка у виклику функції

// const somePeople = {
//   name: "Serhii",
//   prof: "hronometr",
// };

// function helloMyFriend(args) {
//   console.log(`hello, ${this.name} ` + args);
// }

// const myBind = function (fn) {
//   // this
//   const context = this;
//   return function (...args) {
//     // this
//     return fn.apply(context, args);
//   };
// };

// Object.prototype.myBinsProto = myBind;

// const tesMySelfBind = somePeople.myBinsProto(helloMyFriend);
// tesMySelfBind(", my dear friend");

// const showThis = () => {
//   console.log(this); // window
// };

// showThis();




// ## Example 1 - Мастерская драгоценностей

// Напишите метод `calcTotalPrice(stoneName)`, который принимает название камня и
// рассчитывает и возвращает общую стоимость камней с таким именем, ценой и
// количеством из свойства `stones`.

// ```js
// const chopShop = {
//   stones: [
//     { name: "Emerald", price: 1300, quantity: 4 },
//     { name: "Diamond", price: 2700, quantity: 3 },
//     { name: "Sapphire", price: 1400, quantity: 7 },
//     { name: "Ruby", price: 800, quantity: 2 },
//   ],
//   calcTotalPrice(stoneName) {
//     const stone = this.stones.find(({ name }) => name === stoneName);
//     return stone.price * stone.quantity;
//   },
// };

// console.log(chopShop.calcTotalPrice("Emerald")); // 5200
// console.log(chopShop.calcTotalPrice("Diamond")); // 8100
// console.log(chopShop.calcTotalPrice("Sapphire")); // 9800
// console.log(chopShop.calcTotalPrice("Ruby")); // 1600


// ## Example 2 - Телефонная книга

// Выполните рефакторинг методов объекта `phonebook` чтобы код заработал.

// ```js
// const phonebook = {
//   contacts: [],
//   add(contact) {
//     const newContact = {
//       list: "default",
//       ...contact,
//       id: this.generateId(),
//       createdAt: this.getDate(),
//     };
//     this.contacts.push(newContact);
//   },
//   generateId() {
//     return "_" + Math.random().toString(36).substr(2, 9);
//   },
//   getDate() {
//     return Date.now();
//   },
// };

// console.log(
//   phonebook.add({
//     name: "Mango",
//     email: "mango@mail.com",
//     list: "friends",
//   })
// );
// console.log(
//   phonebook.add({
//     name: "Poly",
//     email: "poly@hotmail.com",
//   })
// );

// console.log(phonebook.contacts);


// ## Example 3 - Калькулятор

// Создайте объект `calculator` с тремя методами:

// - `read(a, b)`- принимает два значения и сохраняет их как свойства объекта.
// - `add()` - возвращает сумму сохранённых значений.
// - `mult()` - перемножает сохранённые значения и возвращает результат.

// ```js
// const calculator = {
//   read(a, b) {
//     this.a = a; // calculator.a = a
//     this.b = b; // calculator.b = b
//   },

//   // read(...args) {
//   //   this.numbers = args;
//   // },

//   add() {
//     return this.a + this.b;
//   },

//   mult() {
//     return this.a * this.b;
//   },
// };
// // ```

// calculator.read(5, 4);
// console.log(calculator);
// console.log(calculator.add()); // 9
// console.log(calculator.mult()); // 20
/////////////////////////////////////////////////////////////////////////////////////////////////

// function User(name, age, status) {
//   // this = {}
//   this.name = name;
//   this.age = age;
//   this.status = "active";
//   //   this.status = status;
//   // return this; // this = {name, age, status}
// }

// User.prototype.sayHello = function () {
//   console.log(`Hello, I am ${this.name}`);
// };

// class User {
//   constructor(name, age, status) {
//     // this = {}
//     this.name = name;
//     this.age = age;
//     this.status = "active";
//     // return this; // this = {name, age, status}
//   }

//   sayHello() {
//     console.log(`Hello, I am ${this.name}`);
//   }
// }

// function Array(...args) {
//   this.args = args;
//   this.length = args.length;
// }

// Array.prototype.map;
// Array.prototype.push;
// Array.prototype.filter;

// 1) User() // this = undefined || window
// 2) new User() // this = {}

// const Bob = new User("Bob", 30, "active"); // { name: "Bob", age: 30 }
// // 1)  this = {} => {name: 'Bob"} => {name: 'Bob', age: 30} => {name: 'Bob', age: 30, status: 'active'}  => return this
// // 2) const Bob ={name: 'Bob', age: 30, status: 'active'}
// // 3) Bob.prototype = User.prototype
// // 4) Bob може користуватися методом SayHello()
// const Alice = new User("Alice", 25, "pending"); // { name: "Alice", age: 25 }
// const Mary = new User("Mary", 20, "unactive"); // { name: "Mary", age: 20 }

// function Student(user) {
//   this.user = user;
// }

// const student = new Student(Bob);

// const numbers = [1, 2, 3, 4, 5];
// const numbers = new Array(1, 2, 3, 4, 5);

// const user = {
//     name: "Bob",
//     age: 30,
// }

// const user = new Object ()

// const name = "Bob".toUpperCase();

// const name = new String("Bob");

// Array
// Object
// String
// Number
// Boolean

// console.log(numbers);

// console.log(Bob);
// console.log(Alice);
// console.log(Mary);
// Bob.sayHello();
// Alice.sayHello();
// Mary.sayHello();

// class User {
//   // Объявление и инициализация статического свойства
//   static Roles = {
//     ADMIN: "admin",
//     EDITOR: "editor",
//     STUDENT: "student",
//     MENTOR: "mentor",
//   };

//   //   static getRole(user) {
//   //     return user.role;
//   //   }

//   #email;
//   #role;

//   constructor({ email, role }) {
//     this.#email = email;
//     this.#role = role;
//   }

//   get role() {
//     return this.#role;
//   }

//   set role(newRole) {
//     this.#role = newRole;
//   }
// }

// const mango = new User({
//   email: "mango@mail.com",
//   role: User.Roles.ADMIN,
// });

// console.log(mango);
// // console.log(User.Roles);

// // console.log(mango.Roles); // undefined
// // console.log(User.Roles); // { ADMIN: "admin", EDITOR: "editor" }

// console.log(mango.role); // "admin"
// console.log(mango.email);
// mango.role = User.Roles.EDITOR;
// console.log(mango.role); // "editor"
// class User {
//   static #takenEmails = [];

//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email);
//   }

//   #email;

//   constructor({ email }) {
//     this.#email = email;
//     User.#takenEmails.push(email);
//   }
// }

// const mango = new User({ email: "mango@mail.com" });

// console.log(User.isEmailTaken("poly@mail.com")); // false
// console.log(User.isEmailTaken("mango@mail.com")); // true



// const calculator = {
//   read(a, b) {
//     this.a = a; // calculator.a = a
//     this.b = b; // calculator.b = b
//   },

//   // read(...args) {
//   //   this.numbers = args;
//   // },

//   add() {
//     return this.a + this.b;
//   },

//   mult() {
//     return this.a * this.b;
//   },
// };

// calculator.read(8, 46);
// console.log(calculator);
// console.log(calculator.add());
// console.log(calculator.mult());




// class User {
//   constructor (name, age, status) {
//     this.name = name;
//     this.age = age;
//     this.status = status;
//   }

//   sayHello() {
//     console.log(`Hello, i am ${this.name}`);
//   }

// }

// const Bob = new User("Bob", 30, "active"); 
// const Alice = new User("Alice", 25, "pending"); 
// const Valera = new User("Valera", 99, "unactive"); 

// console.log(Valera); // User {name: 'Valera', age: 99}
// console.log(Bob); // User {name: 'Valera', age: 99}
// console.log(Alice); // User {name: 'Valera', age: 99}

// Bob.sayHello();
// Valera.sayHello();
// Alice.sayHello();



// class User {
//   constructor(name, age, status) {
//     // this = {}
//     this.name = name;
//     this.age = age;
//     this.status = "active";
//     // return this; // this = {name, age, status}
//   }

//     sayHello() {
//       console.log(`Hello, i am ${this.name}`);
//     }
  
// }


// // function Array(...args) {
// //   this.args = args;
// //   this.length = args.length;
// // }

// // Array.prototype.map;
// // Array.prototype.push;
// // Array.prototype.filter;

// // 1) User() // this = undefined || window
// // 2) new User() // this = {}

// const Bob = new User("Bob", 30, "active"); // { name: "Bob", age: 30 }
// // 1)  this = {} => {name: 'Bob"} => {name: 'Bob', age: 30} => {name: 'Bob', age: 30, status: 'active'}  => return this
// // 2) const Bob ={name: 'Bob', age: 30, status: 'active'}
// // 3) Bob.prototype = User.prototype
// // 4) Bob може користуватися методом SayHello()
// const Alice = new User("Alice", 25, "pending"); // { name: "Alice", age: 25 }
// const Mary = new User("Mary", 20, "unactive"); // { name: "Mary", age: 20 }


// console.log(Bob);
// console.log(Alice);
// console.log(Mary);
// Bob.sayHello()
// Alice.sayHello()
// Mary.sayHello()



// class User {
//   // Оголошення та ініціалізація статичної властивості
//   static Roles = {
//     ADMIN: "admin",
//     EDITOR: "editor",
//   };

//   // static getRole(user) {
//   //   return user.role
//   // }

//   #email;
//   #role;

//   constructor({ email, role }) {
//     this.#email = email;
//     this.#role = role;
//   }

//   get role() {
//     return this.#role;
//   }

//   set role(newRole) {
//     this.#role = newRole;
//   }
// }

// const mango = new User({
//   email: "mango@mail.com",
//   role: User.Roles.ADMIN,
// });

// console.log(mango);
// // console.log(User.Roles);

// // console.log(mango.Roles); // undefined
// // console.log(User.Roles); // { ADMIN: "admin", EDITOR: "editor" }

// console.log(mango.role); // "admin"
// console.log(mango.email);
// // mango.role = User.Roles.EDITOR;
// // console.log(mango.role); // "editor"








// ## Example 4 - Заметки

// Напиши класс `Notes` который управляет коллекцией заметок в свойстве `items`.
// Заметка это объект со свойствами `text` и `priority`. Добавь классу статическое
// свойство `Priority`, в котором будет храниться объект с приоритетами.

// ```js
// {
//   LOW: 'low',
//   NORMAL: 'normal',
//   HIGH: 'high'
// }
// ```

// const priority = {
//   LOW: "low",
//   NORMAL: "normal",
//   HIGH: "high",
// };

// const notes = {
//   items: [],
//   addItem(item) {
//     this.items.push(item);
//   },
//   removeItem(text) {
//     this.items = this.items.filter((item) => item.text !== text);
//   },
//   updatePriority(text, newPriority) {
//     this.items = this.items.map((item) =>
//       item.text === text ? { ...item, priority: newPriority } : item
//     );
//   },
// };

// class Notes {
//   static Priority = {
//     LOW: "low",
//     NORMAL: "normal",
//     HIGH: "high",
//   };

//   constructor(items = []) {
//     this.items = items;
//   }

//   addItem(item) {
//     this.items.push(item);
//   }

//   removeItem(text) {
//     this.items = this.items.filter((item) => item.text !== text);
//   }

//   updatePriority(text, newPriority) {
//     this.items = this.items.map((item) =>
//       item.text === text ? { ...item, priority: newPriority } : item
//     );
//   }
// }

// // Добавь методы `addNote(note)`, `removeNote(text)` и
// // `updatePriority(text, newPriority)`.

// // ```js
// const myNotes = new Notes();
// console.log(myNotes);

// myNotes.addItem({ text: "Моя первая заметка", priority: Notes.Priority.LOW });
// console.log(myNotes.items);

// myNotes.addItem({
//   text: "Моя вторая заметка",
//   priority: Notes.Priority.NORMAL,
// });
// console.log(myNotes.items);

// myNotes.removeItem("Моя первая заметка");
// console.log(myNotes.items);

// myNotes.updatePriority("Моя вторая заметка", Notes.Priority.HIGH);
// console.log(myNotes.items);
// // ```






// {
//   LOW: 'low',
//   NORMAL: 'normal',
//   HIGH: 'high'
// }

// class Notes {
//   static Priority = {
//     LOW: "low",
//     NORMAL: "normal",
//     HIGH: "high",
//   };

//   constructor(items = []) {
//     this.items = items
//   }

//   addItem(item) {
//     this.items.push(item)
//   }

//   removeItem(text) {
//     this.items = this.items.filter(item => item.text !== text);
//   }

//   updatePriority (text, newPriority) {
//     this.items.map(item => 
//       item.text === text ? {...item, priority : newPriority}: item
//     );
//   }
// } 

// const myNotes = new Notes()
// console.log(myNotes);

// myNotes.addItem({ 
//   text: "Моя первая заметка", 
//   priority: Notes.Priority.LOW 
// });
// console.log(myNotes.items);

// myNotes.addItem({
//   text: "Моя вторая заметка",
//   priority: Notes.Priority.NORMAL,
// });
// console.log(myNotes.items);


// myNotes.removeItem("Моя первая заметка");
// console.log(myNotes.items);

// myNotes.updatePriority("Моя вторая заметка", Notes.Priority.HIGH);
// console.log(myNotes.items);


























// Тяжка задача

const cars = [
  { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
  { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
  { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
  { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
  { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
  { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
  { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
  { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
  { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
  { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false }
];



// map

// const carsMap = cars.map(car => car.price);
// console.log(carsMap);

// flatMap

// const carsFlatMap = cars.flatMap(car => car.model)
// console.log(carsFlatMap);

// filter 

// const carsFilter = cars.filter(car => car.price > 25000);
// console.log(carsFilter);

// const carsFilter1 = cars.filter(car => car.amount < 10);
// console.log(carsFilter1);

// find 

// const carsFind = cars.find(car => car.model === 'CR-V');
// console.log(carsFind);

// findIndex

// const carsIndex = cars.findIndex(car => car.price === 34210)
// console.log(carsIndex);

// every

// const carsEvery = cars.every(car => car.price >= 0)
// const carsEvery1 = cars.every(car => car.price <= 0)

// console.log(carsEvery);
// console.log(carsEvery1);

// some

// const carsSome = cars.some(car => car.amount > 17)
// const carsSome1 = cars.some(car => car.amount > 20)

// console.log(carsSome);
// console.log(carsSome1);

// reduce 

// const carsReduce = cars.reduce((acc, car) => acc + car.price, 0);
// console.log(carsReduce);

// const carsReduceAm = cars.reduce((acc, car) => acc + car.amount, 0);
// console.log(carsReduceAm);

// sort

// const carsSort = [...cars].sort((first, second) => first.price - second.price);
// console.log(carsSort);

// const carsSort1 = [...cars].sort((first,second) => first.make.localeCompare(second.make))
// console.log(carsSort1);








// // { 'suv': [{...}, {...}], 'sedan': [...], 'truck': [...] } 

// // Task #1
// const getModels = cars => cars.map(({ model }) => model)

// // console.log(getModels(cars));


// // Task #2
// const makeCarsWithDiscount = (cars, discount) => {
//   return cars.map((car) => {
//       const { price } = car
//       const newPrice = price - (price * discount)
      
//       return {
//           ...car,
//           price: newPrice
//       }
//   })
// };
// // const newCarsArr = makeCarsWithDiscount(cars, 0.2)
// // console.log(newCarsArr);

// // Task #3
// const filterByPrice = (cars, threshold) => cars.filter(({ price }) => price < threshold)

// // console.log(filterByPrice(cars, 30000));
// // console.log(filterByPrice(cars, 25000));

// // Task #4
// const getCarsWithDiscount = cars => cars.filter(({ onSale }) => onSale);

// // console.table(getCarsWithDiscount(cars));

// // Task #5
// const getCarsWithType = (cars, type) => {
//   return cars.filter(({ type: carType }) => carType === type)
// };

// // console.log(getCarsWithType(cars, 'suv'));
// // console.log(getCarsWithType(cars, 'sedan'));

// // Task #6
// const getCarByModel = (cars, model) => {
//   return cars.find((car) => car.model === model)
// };

// // console.log(getCarByModel(cars, 'F-150'));
// // console.log(getCarByModel(cars, 'CX-9'));

// // const carIndex = cars.findIndex((car) => car.model === 'F-150')
// // console.log(carIndex)

// // Task #7
// const sortByAscendingAmount = cars => {
//   return [...cars].sort((prev, next) => prev.amount - next.amount)
//   // return cars.slice().sort((prev, next) => prev.amount - next.amount)
// };

// // console.log(sortByAscendingAmount(cars));

// // Task #8
// const sortByDescendingPrice = cars => {
//   return [...cars].sort((prev, next) => next.price - prev.price)
// };

// // console.log(sortByDescendingPrice(cars));

// // Task #9
// const sortByModel = (cars, order) => {
//   const callbackDic = {
//       asc(prev, next) {
//           return prev.model.localeCompare(next.model)
//       },
//       desc(prev, next) {
//           return next.model.localeCompare(prev.model)
//       }
//   }

//   return [...cars].sort(callbackDic[order])
// };

// // console.log(sortByModel(cars, 'asc'));
// // console.log(sortByModel(cars, 'desc'));

// // Task #10
// const getTotalAmount = cars => {
//   return cars.reduce((acc, { amount }, i) => acc + amount, 0)
// };

// // console.log(getTotalAmount(cars));

// // Task #11
// // { 'CR-V': { ... }, 'Accord': {...} }

// const carsObj = cars.reduce((acc, car) => {
//   // acc[car.model] = { ...car }
//   return { ...acc, [car.model]: { ...car } }
// }, {})

// // console.log(carsObj)
// // console.log(carsObj['Accord'])
// // const obj = {}
// // 1
// // obj['CR-V'] = {}

// // Task #12
// const getModelsOnSale = cars => {
//   return cars.filter(({ onSale }) => onSale)
//   .map(({ model }) => model)
// };

// // console.log(getModelsOnSale(cars));

// // Task #13
// const getSortedCarsOnSale = cars => {
//   return [...cars].filter(({ onSale }) => onSale)
//       .sort((prev, next) => prev.price - next.price)
// };

// // console.log(getSortedCarsOnSale(cars));

// // some, every
