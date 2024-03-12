//Ejercicio 6//
let input = [3, 6, 12, 5, 100, 1];


function bubbleSort(arr) {
    var len = arr.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }

  const outputArr = bubbleSort(input);
  console.log ("Bubble sort is:", outputArr);

  
