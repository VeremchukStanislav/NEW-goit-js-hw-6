// Онлайн бибилиотеке необходимо отображать книги отсортированные по автору, в алфавитном и обратном алфавитном порядке.
// Дополни код так, чтобы в переменной authorsInAlphabetOrder получилась отсортированная по алфавиту копия массива authors,
// а в переменной authorsInReversedOrder копия отсортированная в обратном алфавитном порядке.

const authors = [
    'Ли Танит',
    'Бернард Корнуэлл',
    'Роберт Шекли',
    'Федор Достоевский',
    'Говард Лавкрафт'
  ];
  // Пиши код ниже этой строки
  
  const authorsInAlphabetOrder = [...authors].sort((firstString, secondString) => firstString.localeCompare(secondString));
  
const authorsInReversedOrder = [...authors].sort((firstString, secondString) => secondString.localeCompare(firstString));;
  
 console.log(authors);
  //  ['Ли Танит', 'Бернард Корнуэлл', 'Роберт Шекли',
//   'Федор Достоевский', 'Говард Лавкрафт'].
  console.log(authorsInAlphabetOrder);
//  ['Бернард Корнуэлл', 'Говард Лавкрафт', 'Ли Танит',
//   'Роберт Шекли', 'Федор Достоевский'].
  console.log(authorsInReversedOrder);
  //  ['Федор Достоевский', 'Роберт Шекли', 'Ли Танит',
//   'Говард Лавкрафт', 'Бернард Корнуэлл'].
