const num = [1, 2, 4, [4, 6], [2, 6, [4, 1]],5, 3, 4, 5];

function sumArrayRecursive(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      sum += sumArrayRecursive(arr[i]); // Recursively call the function for nested arrays
      console.log(sum);
    } else if (typeof arr[i] === 'number') {
      sum += arr[i];
    }
  }
  return sum;
}

console.log("Sum of the array:", sumArrayRecursive(num));
