// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//For Example:
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'i'];
//should return false.
//-----------
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'x'];
//should return true.


// 2 parameters - arrays - no size limit
// return true or false

//O(a*b) - Time Complexity 
//O(1) - Space Complexity

function containsCommonItem(arr1, arr2){ 
  for(let i = 0; i < arr1.length; i++){
      for(let j = 0; j < arr2.length; j++){
         if(arr1[i] === arr2[j]){
           console.log("true")
           return true;
         }
      }
  }
  console.log("false")
  return false;
}


//O(a + b) Time Complexity
//O(a) Space Complexity

function containsCommonItem1(arr1, arr2){ 
  let map = {};

  for(let i = 0; i < arr2.length; i++){
     if(!map[arr1[i]]){
       map[arr1[i]] = true;
     }
  }

  for(let i = 0; i < arr2.length; i++){
     if(map[arr2[i]]){
       return true;
     }
  }

  return false;
}

function containsCommonItem2(arr1, arr2){
  return arr1.some(item => arr2.includes(item))
}



//containsCommonItem(['c', 'b', 'a'], ['z', 'y', 'x', 'a']);
//containsCommonItem(['a', 'b', 'c', 'm'], ['z', 'y', 'a', 'm']);
//containsCommonItem(['a', 'b', 'c', 'x'], ['z', 'y', 'x']);
//console.log("--------------------------------");
//containsCommonItem(['c', 'b', 'o'], ['z', 'y', 'x', 'a']);
//containsCommonItem(['a', 'b', 'c', 'o'], ['z', 'y', 'm', 'p']);
//containsCommonItem(['a', 'b', 'c', 'o'], ['z', 'y', 'x']);

console.log(containsCommonItem2(['a', 'b', 'c', 'o'], ['z', 'y', 'x']));
console.log(containsCommonItem2(['c', 'b', 'a'], ['z', 'y', 'x', 'a']));
