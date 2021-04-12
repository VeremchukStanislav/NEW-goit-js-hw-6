// Выполни рефакторинг функции calculateTotalPrice() так, чтобы она была объявлена как стрелочная.

// Пиши код ниже этой строки


const calculateTotalPrice = (quantity, pricePerItem) => {
  return quantity * pricePerItem;
}

console.log(calculateTotalPrice(5, 100));
console.log(calculateTotalPrice(8, 60));
console.log(calculateTotalPrice(3, 400));