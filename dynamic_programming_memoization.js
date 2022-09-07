
function addTo80(n){
  return n + 80;
}

addTo80(5);

let cache = {};

function memoizedAddTo80(n) {
  if(n in cache){
    return cache[n];
  } else {
    console.log('long time');
    const answer = n + 80;
    cache[n] = answer;
    return answer;
  }
}

//onsole.log(cache);
//console.log(1, memoizedAddTo80(6));
//console.log(cache);
//console.log('------------');
//console.log(2, memoizedAddTo80(6));

// let's make that better with no global scope. This is closure in javascript.

function memoizeAddTo80(n) {
  let cache = {};
  return function(n){
    if(n in cache){
      return cache[n];
    } else {
      console.log('long time');
      const answer = n + 80;
      cache[n] = answer;
      return answer;
    }
  }
}

const memoized = memoizeAddTo80();
console.log(cache);
console.log(1, memoizedAddTo80(6));
console.log(cache);
console.log('------------');
console.log(2, memoizedAddTo80(6));
