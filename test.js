import { test } from 'node:test';
import { strictEqual, deepStrictEqual } from 'node:assert';
import { concatenateStrings, checkConditions, arrayOperations, conditionalCheck } from './exercise.js';

test('Exercise 1: Correct String Operations', (t) => {
  const result = concatenateStrings("Hello", "World");
  deepStrictEqual(result, {
    concatenated: "HelloWorld",
    uppercased: "HELLOWORLD",
    length: 10
  });
});

test('Exercise 2: Fix Boolean Logic', (t) => {
  const result = checkConditions(true, false);
  deepStrictEqual(result, {
    andResult: false,
    orResult: true,
    notFirst: false,
    notSecond: true
  });
});

test('Exercise 3: Correct Array Operations', (t) => {
  const result = arrayOperations([1, 2, 3, 4, 5]);
  deepStrictEqual(result, {
    firstElement: 1,
    lastElement: 5,
    arrayLength: 5
  });
});

test('Exercise 4: Fix Conditional Statements', (t) => {
  let result = conditionalCheck(5);
  strictEqual(result, "Positive");

  result = conditionalCheck(0);
  strictEqual(result, "Zero");

  result = conditionalCheck(-3);
  strictEqual(result, "Negative");
});
