export const getFibonacci = (arr, number) => {
  const memo = [0, 1];
  if (number === 0) {
    return 0;
  }
  if (number === 1) {
    return 1;
  }

  for (let i = 2; i <= number; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }
  return memo[number];
};

export const simpleMultiply = (a, b) => a * b;
