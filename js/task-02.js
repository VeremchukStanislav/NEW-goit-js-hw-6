// Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив,
// в котором будут только те элементы оригинального массива, которые больше чем значение параметра value.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

function filterArray(numbers, value) {
    const filteredNumbers = [];
    // Пиши код ниже этой строки
  
    numbers.forEach(function (number) {
        number > value
            ? filteredNumbers.push(number)
            : []
    });
  
    // Пиши код выше этой строки
    return filteredNumbers;
}
  
console.log(filterArray([1, 2, 3, 4, 5], 3));//возвращает [4, 5].
console.log(filterArray([1, 2, 3, 4, 5], 4));//возвращает [5].
console.log(filterArray([1, 2, 3, 4, 5], 5));//возвращает [].
console.log(filterArray([12, 24, 8, 41, 76], 38));//возвращает [41, 76].
console.log(filterArray([12, 24, 8, 41, 76], 20));//  возвращает [24, 41, 76])