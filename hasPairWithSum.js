

// Naive approach
// O(n^2) time complexity
// O(1) space complexity
const hasPairWithSum0 = (arr, sum) => {
  for(let i = 0; i < arr.length-1; i++){
      for(let j = i+1; j < arr.length; j++){
        if(arr[i]+arr[j] === sum){
          return true
        }
      }
  }
  return false;
}

// Better 
// O(n) time complexity
// O(n) space complexity
const hasPairWithSum = (arr, sum) => {
  const mySet = new Set();
  for(let i = 0; i < arr.length; i++){
        if(mySet.has(arr[i])){
          return true
        }
        mySet.add(sum - arr[i]);
      }
  return false;
}
console.log(hasPairWithSum([1, 2, 3, 3], 6)); 
console.log(hasPairWithSum([1, 2, 3, 3], 5)); 
console.log(hasPairWithSum([1, 2, 3, 3], 9)); 

