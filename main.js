let length = parseInt(prompt("Введіть довжину масиву:"));

let array = [];

for (let i = 0; i < length; i++) {
    array.push(parseInt(prompt("Введіть елемент масиву:")));
}

console.log("Початковий масив:", array);

array.sort(function(a, b) {
    return a - b;
});

console.log("Відсортований масив:", array);

array.splice(1, 3);

console.log("Масив після видалення елементів з 2 по 4:", array);