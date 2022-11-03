function findSum(array, target){
  
  const hashMap = {};

  for(let i = 0 ; i < array.length ; i++){
    if(hashMap[array[i]]){
      console.log(hashMap[array[i]], i)
      return i
    }else{
      const numToFind = target - array[i];
      hashMap[numToFind] = i;
    }

  }
    console.log(hashMap)
  
}


findSum([1,3,7,9,2], 11)
