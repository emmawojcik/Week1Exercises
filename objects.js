
// // ACTIVITY 1

// const person = {
//   name: "Emma",
//   age: 25,
//   films: ["Truman Show", "Spirited Away"],
//   sayHi: () => {
//     console.log( `Hello my name is ${person.name}`);
//   }
// };
// person.sayHi();



// // ACTIVITY 2

// const pet = {
//   name: "Oscar",
//   typeOfPet: "Cat",
//   age: 3,
//   colour: "Black",
//   eat: () => {
//     return `${pet.name} is eating.`;
//   },
//   drink: () => {
//     return `${pet.name} is drinking.`;
//   }
// };

// console.log(pet.eat());
// console.log(pet.drink());



// // ACTIVITY 3

// const coffeeShop = {

//   branch: "Liverpool",
//   drinksWithPrices: [
//     ["cappuccino", 3.50],
//     ["americano", 2.99],
//     ["flat white", 2.70]
//   ],
//   foodWithPrices: [
//     ["ham and cheese panini", 2.99],
//     ["blueberry muffin", 2.50],
//     ["croissant", 2.75]
//   ],
//   drinksOrdered:(drink, price) => {
//     return coffeeShop.drinksWithPrices[drink][price];
//   },
//   foodOrdered:(food, price) => {
//     return coffeeShop.foodWithPrices[food][price];
//   }
  
// };

// let orderTotal = coffeeShop.drinksOrdered(0, 1) + coffeeShop.drinksOrdered(2, 1) + coffeeShop.foodOrdered(1, 1) + coffeeShop.foodOrdered(0, 1);

// console.log(`You have ordered ${coffeeShop.drinksWithPrices[0][0]}, ${coffeeShop.drinksWithPrices[2][0]}, ${coffeeShop.foodWithPrices[1][0]} and ${coffeeShop.foodWithPrices[0][0]}. The total cost is: £${orderTotal}.`);




// // Alarm Activity 

// let day = "Wednesday";
// let setAlarm = "";

// const alarm = {
//   weekendAlarm: "no alarm needed",
//   weekdayAlarm: "get up at 7am"
// };

// if(day == "Saturday" || day == "Sunday") {
//   setAlarm = alarm.weekendAlarm;
// } else if (day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday") {
//   setAlarm = alarm.weekdayAlarm;
// } else {
//   console.log("Invalid day of week")
// }

// console.log(setAlarm);


