// 📌  F-Task: findDoublers function tuzing, unga faqat bitta string argument pass bolib, agar stringda bir hil harf qatnashgan bolsa true, qatnashmasa false qaytarishi kerak.
// masalan: getReverse("hello") return true return qiladi



function findDoublers(str) {
  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];
    if (str.indexOf(currentChar, i + 1) !== -1) {
      return true;
    }
  }
  return false;
}

console.log(findDoublers("hello")); 
console.log(findDoublers("nimadur"));





// // 9-Dars


// console.log("Jack Ma maslahatlari");
// const list =[
//   "yahshi talaba boling", //0-20
//   "togri boshliq tanlang va koproq xato qiling", //20-30
//   "uzingizga ishlashni boshlang", //30-40
//   "siz kuchli bo'lgan narsalarni qiling", //40-50
//   "yoshlarga investitsiya qiling", //50-60
//   "endi dam oling, foydasi yoq", //60-
// ];

// function maslahatBering(a, callback) {
//    if(typeof a !== 'number') callback("insert a number",null);
//    else if(a <= 20) callback(null, list[0]);
//    else if(a > 20 && a <= 30) callback(null, list[1]);
//    else if(a > 30 && a <= 40) callback(null, list[2]);
//    else if(a > 40 && a <= 50) callback(null, list[3]);
//    else if(a > 50 && a <= 60) callback(null, list[4]);
//    else{
//     setTimeout(function () {
//     callback(null, list[5]);
//    }, 3000);
//   }
// }
// console.log("passed here 0");
// maslahatBering(65, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else{
//     console.log("javob", data);
//   }
// });
// console.log("passed here 1");


// 10-Dars


//console.log("Jack Ma maslahatlari");
//const list =[
//   "yahshi talaba boling", //0-20
//   "togri boshliq tanlang va koproq xato qiling", //20-30
//   "uzingizga ishlashni boshlang", //30-40
//   "siz kuchli bo'lgan narsalarni qiling", //40-50
//   "yoshlarga investitsiya qiling", //50-60
//   "endi dam oling, foydasi yoq", //60-
// ];
//ASYNC function
// async function maslahatBering(a) {
//    if(typeof a !== 'number') throw new Error("insert a number");
//    else if(a <= 20) (null, list[0]);
//    else if(a > 20 && a <= 30) return list[1];
//    else if(a > 30 && a <= 40) return list[2];
//    else if(a > 40 && a <= 50) return list[3];
//    else if(a > 50 && a <= 60) return list[4];
//    else{
       
//       return new Promise((resolve, reject) => {
//         setInterval(() =>{
//           resolve(list[5]);
//         }, 1000);
//       });
//   }
// }
// console.log("passed here 0");
// maslahatBering(25)
// .then(data => {
//   console.log('javob:', data);
// })
//  .catch((err) => {
//   console.log("ERROR:", err);
//  });
// console.log("passed here 1");

//call via then /catch
// async function run() {
//   let javob = await maslahatBering(66);
//   console.log(javob);
  // javob = await maslahatBering(70);
  // console.log(javob);
  // javob = await maslahatBering(41);
   // console.log(javob);
// }
// run();

//CALLBACK function
//  function maslahatBering(a, callback) {
//      if(typeof a !== 'number') callback("Insert a number",null);
//      else if(a <= 20) callback(null, list[0]);
//      else if(a > 20 && a <= 30) callback(null, list[1]);
//      else if(a > 30 && a <= 40) callback(null, list[2]);
//      else if(a > 40 && a <= 50) callback(null, list[3]);
//      else if(a > 50 && a <= 60) callback(null, list[4]);
//      else{
//       setInterval(function () {
//       callback(null, list[5]);
//      }, 3000);
//     }
//   }
//   console.log("passed here 0");
//   maslahatBering(65, (err, data) => {
//     if (err) console.log("ERROR:", err);
//     else{
//       console.log("javob", data);
//     }
//   });
//   console.log("passed here 1");
  

 //  📌  E-TASK: E-Task: Shunday function tuzing, u bitta string argumentni qabul qilib osh stringni teskari qilib return qilsin

//masalan: getReverse("hello") return qilsin "olleh"

// function getReverse(inputString) {
//   return inputString.split('').reverse().join('');
// }

// var reversedString = getReverse("kiyikk");
// console.log(reversedString); 


 