const arrays = [];
for (let i = 0; i < 15; i++) {
    const length = Math.floor(Math.random() * 6) + 5;
    const array = Array.from({ length }, () => Math.floor(Math.random() * 100)); 
    arrays.push(array);
}

console.log("Массивдер:", arrays);

let isUnique = true;

for (let i = 0; i < arrays.length; i++) {
    for (let j = i + 1; j < arrays.length; j++) {
        if (JSON.stringify(arrays[i]) === JSON.stringify(arrays[j])) {
            isUnique = false;
            console.log(`Массив ${i} жана ${j} бирдей:`, arrays[i], arrays[j]);
        }
    }
}

if (isUnique) {
    console.log("Бардык массивдер бири-бирине окшобойт.");
} else {
    console.log("Кайсыдыр массивдер бирдей.");
} 

arrays.forEach((array, index) => {
    const sum = array.reduce((acc, val) => acc + val, 0);
    console.log(`Массив ${index} суммасы:`, sum);
});