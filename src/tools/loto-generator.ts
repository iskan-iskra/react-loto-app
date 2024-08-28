import { TiLoto } from "../types";

function getRandomIndices(arrayLength: number, count: number): number[] {
  const indices = new Set<number>();

  while (indices.size < count) {
    const randomIndex = Math.floor(Math.random() * arrayLength);
    indices.add(randomIndex);
  }

  return Array.from(indices);
}

function fillArrayWithRandomNumbers(
  existingNumbers: Set<number>,
  numberOfFilledCells: number
): (number | null)[] {
  const arr: (number | null)[] = new Array(9).fill(null);
  const randomIndices: number[] = getRandomIndices(
    arr.length,
    numberOfFilledCells
  );

  randomIndices.forEach((index) => {
    const min = index * 10 + 1;
    const max = (index + 1) * 10;

    const availableNumbers = [];
    for (let i = min; i <= max; i++) {
      if (!existingNumbers.has(i)) {
        availableNumbers.push(i);
      }
    }

    const randomNumber =
      availableNumbers[Math.floor(Math.random() * availableNumbers.length)];

    arr[index] = randomNumber;
    existingNumbers.add(randomNumber);
  });

  return arr;
}

function hashArrays(arrays: (number | null)[][]): number {
  let hash = 0;

  for (const subArray of arrays) {
    for (const num of subArray) {
      if (num !== null) {
        hash = (hash << 5) - hash + num;
        hash |= 0;
      }
    }
  }

  return hash;
}

function generateUniqueArrays(existingHashes: Set<number>): {
  arrays: TiLoto;
  hash: number;
} {
  const existingNumbers = new Set<number>();
  let arrays: TiLoto;
  let hash: number;

  do {
    arrays = Array.from({ length: 3 }, () =>
      fillArrayWithRandomNumbers(existingNumbers, 5)
    );

    hash = hashArrays(arrays);
  } while (existingHashes.has(hash));

  existingHashes.add(hash);

  return { arrays, hash };
}

export default generateUniqueArrays;
