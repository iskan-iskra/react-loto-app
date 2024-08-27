function generateCard() {
  // Создание пустой карточки с 3 рядами и 9 столбцами
  const card = Array.from({ length: 3 }, () => Array(9).fill(null));

  // Функция для генерации уникальных чисел в заданном диапазоне
  function getUniqueNumbers(rangeStart, rangeEnd, count) {
    const numbers = new Set();
    while (numbers.size < count) {
      const num =
        Math.floor(Math.random() * (rangeEnd - rangeStart + 1)) + rangeStart;
      numbers.add(num);
    }
    return Array.from(numbers);
  }

  // Создаем массив с 15 уникальными числами
  const allNumbers = new Set();
  while (allNumbers.size < 15) {
    const num = Math.floor(Math.random() * 90) + 1;
    allNumbers.add(num);
  }
  const uniqueNumbers = Array.from(allNumbers);

  // Распределяем уникальные числа по столбцам в соответствии с диапазонами
  const columnNumbers = Array.from({ length: 9 }, (_, col) => {
    const rangeStart = col * 10 + 1;
    const rangeEnd = (col + 1) * 10;
    return getUniqueNumbers(rangeStart, rangeEnd, 3);
  });

  // Заполняем карточку случайными числами из нужного диапазона
  const availablePositions = [];
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 9; col++) {
      availablePositions.push({ row, col });
    }
  }

  // Перемешиваем доступные позиции
  for (let i = availablePositions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [availablePositions[i], availablePositions[j]] = [
      availablePositions[j],
      availablePositions[i],
    ];
  }

  // Заполняем карточку числами из уникального набора
  let index = 0;
  for (const { row, col } of availablePositions) {
    if (index < 15) {
      const num = uniqueNumbers[index++];
      card[row][col] = num;
    } else {
      card[row][col] = " ";
    }
  }

  // Заполнение оставшихся пустых ячеек числом null
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 9; col++) {
      if (card[row][col] === null) {
        card[row][col] = " ";
      }
    }
  }

  return card;
}

function printCard(card) {
  card.forEach((row) => {
    console.log(
      row
        .map((cell) =>
          cell === " " ? "   " : cell.toString().padStart(2, " ")
        )
        .join(" | ")
    );
    console.log("-".repeat(29));
  });
}

// Генерация и вывод карточки
const card = generateCard();
printCard(card);
