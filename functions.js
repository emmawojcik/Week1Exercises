// // ACTIVITY 1

// const factorial = (n) => {
//   if((n === 0) || (n === 1)) {
//     return 1;
//   } else {
//     return (n * factorial(n-1));
//   }
// }
// console.log(factorial(33));



// // ACTIVITY 2

// let orderCount = 0;

// const takeOrder = (firstTopping, secondTopping) => {
//   console.log(`Pizza with ${firstTopping} and ${secondTopping}`);
//   orderCount++;
// }
// takeOrder("pepperoni", "peppers");




// // ACTIVITY 3

// let pinNumber = "3901";
// let balance = 50004.00;
// let failedLoginAttempts = 0;

// const cashMachine = (enteredPin, withdrawal) => {
//   if(enteredPin === pinNumber) {

//     if(withdrawal <= balance) {
//       balance -= withdrawal;
//       console.log(`You have withdrawn £${withdrawal}. Your new balance is £${balance}.`);
//     }
//     else {
//       console.log(`Your balance is: £${balance}. You do not have sufficient funds to withdraw £${withdrawal}.`);
//     }

//   } else {

//     failedLoginAttempts++;

//     if(failedLoginAttempts < 3){
//       console.log("Invalid pin number.");
//     } else {
//       console.log("Too many failed login attempts. Account has been locked.");
//     }
//   }

// }

// cashMachine("3902", 5002.44);
// cashMachine("3902", 5002.44);
// cashMachine("3902", 5002.44);





// // NOTES

// // Arrow function

// const pressGrindBeans = () => {
//   console.log("Grinding for 20 seconds");
// }

// pressGrindBeans();

// const cashWithdrawal = (amount, accnum) => {
//   console.log(`Withdrawing ${amount} from account ${accnum}`);
// }

// cashWithdrawal(300, 50449921);
// cashWithdrawal(30, 5044921);
// cashWithdrawal(200, 50447921);


// const addUp = (num1, num2) => {
//   return num1 + num2;
// }
// addUp(7, 3)
// console.log(addUp(2,5));


// // Function Declaration

// function square(number) {
//   return number*number;
// };

// console.log(square(5));



// // Function Expression

// const square = function(number) {
//   return number * number;
// }

// console.log(square(5));