// // 1-task
// let input = prompt("Сан же текст киргизиңиз (1ден 99га чейин):");

// let ones = ["", "бир", "эки", "үч", "төрт", "беш", "алты", "жети", "сегиз", "тогуз"]; //бирдиктер
// let tens = ["", "он", "жыйырма", "отуз", "кырк", "элүү", "алтымыш", "жетимиш", "сексен", "токсон"]; //ондуктар
// let teens = ["он", "он бир", "он эки", "он үч", "он төрт", "он беш", "он алты", "он жети", "он сегиз", "он тогуз"];



// if (!isNaN(input)) {
//     let num = parseInt(input);
//     let tenPart = num - num % 10;
//                   //  27 - 20
                  
//     let onePart = num % 10;

//     let result = "";
//     for (let i in tens)
//         if (tenPart === i * 10)
//             result += tens[i] ;
//         console.log(tens,'rrr');
        
//     for (let i in ones) 
//         if (onePart === +i)
//              result += ones[i];
//     if (num >= 10 && num <= 19)
//          result = teens[num - 10];
//     console.log(result);
// } else {
//     let num = 0, word = "";
//     for (let text of input + " ") {
//         if (text === " ") {
//             for (let i in tens) 
//                 if (word === tens[i])
//                      num += i * 10;
//             for (let i in ones) 
//                 if (word === ones[i])
//                      num += +i;
//             for (let i in teens)
//                  if (input === teens[i]) 
//                     num = 10 + +i;
//             word = "";
//         } else word += text;
//     }

//     console.log(num);
// }






// 2-task
// let n =+(prompt("Сан киргизиңиз (үч бурчтук үчүн):"));

// // Үч бурчтукту чыгаруу
// for (let i = 1; i <= n; i++) {
//   let stars = ""; // Жылдыздарды сактоочу сап
//   for (let j = 1; j <= i; j++) {
//     stars += "*"; // Ар бир сапка жылдыз кошулат
//   }
//   console.log(stars); // Натыйжаны чыгаруу
// }









// 3-task

// Колдонуучудан маалыматтарды алабыз
// let year = parseInt(prompt("Жылды киргизиңиз:"));
// let month = parseInt(prompt("Айды киргизиңиз (1ден 12ге чейин):"));
// let day = parseInt(prompt("Күндү киргизиңиз:"));

// if (month < 3) {
//   month += 12;
//   year--;
// }

// let yearPart = year % 100; // Жылдын акыркы 2 саны
// let century = (year - yearPart) / 100; // Жүздүк бөлүгү
// // Бүтүн бөлүгүн цикл менен алуу
// let part1 = 0;
// for (let n = 13* (month + 1); n >= 5; n -= 5) {
//   part1++;
// }
// // Жыл бөлүгүн цикл менен алуу
// let part2 = 0;
// for (let i = yearPart; i >= 4; i -= 4) {
//   part2++;
// }
// // Жүздүк бөлүгүн цикл менен алуу
// let part3 = 0;
// for (let i = century; i >= 4; i -= 4) {
//   part3++;
// }
// let sum = day + part1 + yearPart + part2 + part3 + (5 * century);
// // Күндү табуу
// while (sum >= 7) { sum -= 7; }
// let weekDays = ["Ишемби", "Жекшемби", "Дүйшөмбү", "Шейшемби", "Шаршемби", "Бейшемби", "Жума"];
// console.log(`Сиз киргизген күн: ${weekDays[sum]}`);









// 4-task
// let n = parseInt(prompt("Сан киргизиңиз:"));

// // Сандарды жана алардын квадраттарын чыгаруу
// for (let i = 1; i <= n; i++) {
//   console.log(`Сан: ${i}, Квадраты: ${i * i}`);
// }






















// //5-task
// let text = prompt("Текст киргизиңиз:");
// let vowels = "аеёиоуыэюяАЕЁИОУЫЭЮЯ";
// let consonants = "бвгджзйклмнпрстфхцчшщБВГДЖЗЙКЛМНПРСТФХЦЧШЩ";

// let vowelCount = 0;
// let consonantCount = 0;

// for (let i = 0; i < text.length; i++) {
//   let isVowel = false;
//   let isConsonant = false;

//   // Үн тыбыштарды текшерүү
//   for (let j = 0; j < vowels.length; j++) {
//     if (text[i] === vowels[j]) {
//       isVowel = true;
//       break;
//     }
//   }
 
  

//   // Үнсүз тыбыштарды текшерүү
//   for (let j = 0; j < consonants.length; j++) {
//     if (text[i] === consonants[j]) {
//       isConsonant = true;
//       break;
//     }
//   }

//   if (isVowel) {
//     vowelCount++;
//   } else if (isConsonant) {
//     consonantCount++;
//   }else('текст жок')
// }

// console.log(`Үн тыбыштар: ${vowelCount}, Үнсүз тыбыштар: ${consonantCount}`);
















// Берилген массивдеги жуп сандарды жаңы массивге салып кайтарган функция:  

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

function getEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}

console.log(getEvenNumbers(numbers)); 






// Массивдеги сөздөрдүн узундугун табуу

const words = ["alma", "banan", "kavun"];

function getWordLengths(arr) {
  return arr.map(word => word.length);
}

console.log(getWordLengths(words));


const fruits = ["banan", "kavun"];
fruits.unshift("alma");
console.log(fruits); // ["alma", "banan", "kavun"]



// Массив элементтерин алфавит боюнча сорттоо

// const fruits = ["банан", "алма", "ананас", "өрүк"];

// function sortAlphabetically(arr) {
//   return arr.sort();
// }

// console.log(sortAlphabetically(fruits)); 


-+-

function greet(name) {
    console.log("Салам, " + name + "!");
  }
  
  // Колдонуу:
  greet("Бегимай");  // Output: Салам, Бегимай!
  greet("Айша");    // Output: Салам, Айша!
  


  function futureAge(currentAge, yearsLater) {
    let future = currentAge + yearsLater;
    return `Сиз ${yearsLater} жылдан кийин ${future} жашта болосуз!`;
  }
  
  console.log(futureAge(20, 5)); // Сиз 5 жылдан кийин 25 жашта болосуз!
 
  