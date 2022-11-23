function maxArea(height: number[]): number {
    console.log(height)
  let maxArea = 0;
  let left = 0;
  let right = height.length-1;

  while(left < right){
    maxArea = Math.max(maxArea, Math.min(height[left], height[right]) * (right - left));

    height[left] < height[right] ? left++ : right--;
  }

  //for(let i = 0; i < height.length; i++){
  //  for(let j = i+1; j < height.length; j++){
  //    let area = (j-i) * Math.min(height[i], height[j]);
  //    if(area > maxArea){
  //      maxArea = area;
  //    }
  //  }
  //}

  console.log(maxArea)
  return maxArea;
};


maxArea([1,8,6,2,5,4,8,3,7]);
