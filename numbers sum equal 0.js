var enteredNums = [];
var sum = 0;
var sumPairArr = [];
var getRes = document.getElementById("getres");

function addtoArray() {
  sum = 0;
  getRes.innerHTML = "";
  let num = document.getElementById("num").value;
  enteredNums.push(num);
  document.getElementById("num").value = "";
}

function confirmExecute() {
  const inputArr = [...enteredNums];
  enteredNums = [];
  for (let i = 0; i < inputArr.length; i++) {
    if (i != inputArr.length - 1) {
      let numtry = +inputArr[i];
      let newarr2 = inputArr.slice(i + 1);
      for (let o = 0; o < newarr2.length; o++) {
        sum1 = numtry + +newarr2[o];
        if (
          sum1 == 0 &&
          sumPairArr.some((pair) =>
            [numtry, newarr2[o]].every((v, i) => v === pair[i])
          ) == false
        ) {
          sumPairArr.push([numtry, +newarr2[o]]);
        }
        if (!isNaN(newarr2[o + 1])) {
          sum2 = sum1 + +newarr2[o + 1];
          if (
            sum2 == 0 &&
            sumPairArr.some((pair) =>
              [numtry, newarr2[o + 1]].every((v, i) => v === pair[i])
            ) == false
          ) {
            sumPairArr.push([numtry, +newarr2[o], +newarr2[o + 1]]);
          }
          if (!isNaN(newarr2[o + 2])) {
            sum3 = sum2 + +newarr2[o + 2];
            if (
              sum3 == 0 &&
              sumPairArr.some((pair) =>
                [numtry, newarr2[o + 2]].every((v, i) => v === pair[i])
              ) == false
            ) {
              sumPairArr.push([
                numtry,
                +newarr2[o],
                +newarr2[o + 1],
                +newarr2[o + 2],
              ]);
              console.log(sumPairArr);
            }
          }
        }
      }
    }
  }
  if (sumPairArr.length > 0) {
    getRes.innerHTML = `Items from the array whose sum is 0 are`;
    for (var y = 0; y < sumPairArr.length; y++) {
      getRes.innerHTML += `<br> [${sumPairArr[y]}]`;
    }
  } else {
    getRes.innerHTML = `No Elements found`;
  }
  sumPairArr = [];
}