// Задание 1
function getArrayParams(arr) {
  let min = 0, max = 0, sum = 0, avg;
  if (arr.length > 1) {  
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      if (min >= arr[i]) {
        min = arr[i];
      } else if (max <= arr[i]) {
        max = arr[i];
      }
    }
  } else {
    min = arr[0];
    max = arr[0];
    sum = arr[0];
  }
  avg = sum / arr.length;
  return { 'min': min, 'max': max, 'avg': Number((avg).toFixed(2)) };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;
  for (let i = 0; i < arrOfArr.length; i++) {    
    if (max <= func(arrOfArr[i])) {
      max = func(arrOfArr[i]);
    }
  }
  return max;
}

// Задание 3
function worker2(arr) {
  let min = arr[0];
  let max = arr[0];
  if (arr.length > 1) {  
    for (let i = 0; i < arr.length; i++) {   
      if (min >= arr[i]) {
        min = arr[i];
      } else if (max <= arr[i]) {
        max = arr[i];
      }
    }
  }
  dif = max - min;
  return dif;
}
