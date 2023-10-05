/* Dengan menggunakan function groupByCount buatlah sesuai output yang diminta */
function groupByCount(data) {
  let obj = {
    Alpha: 1,
    Beta: 2,
    Charlie: 3,
  };

  for (let symbol of data) {
    // console.log(symbol);
    if (obj[symbol] === undefined) {
      obj[symbol] = 0;
    }
    obj[symbol]++;
  }
  return obj;
}
let gbcC1 = ["Alpha", "Beta", "Charlie", "Beta", "Charlie", "Charlie"];
console.log(groupByCount(gbcC1));
/*
  Output:
  { Alpha: 1, Beta: 2, Charlie: 3  }
*/
let gbcC2 = ["C", "A", "A", "A", "D", "B", "B"];
console.log(groupByCount(gbcC2));
/*
  Output:
  { C: 1, A: 3, D: 1, B: 2 }
*/

/*
  Dengan menggunakan function groupAndTotal buatlah sesuai output yang diminta.
  Pada inner array, elemen pertama adalah key yang akan di group, elemen kedua ada angka yang akan dijumlahkan.
*/
function groupAndTotal(arr) {}
let gatC1 = [
  ["A", 10],
  ["B", 20],
  ["A", 20],
  ["C", 50],
  ["A", 20],
  ["B", 30],
];
console.log(groupAndTotal(gatC1));
/*
  Output:
  { A: 50, B: 50, C: 50 }
*/
let gatC2 = [
  ["Gaga", 1],
  ["Caca", 2],
  ["Baba", 10],
];
console.log(groupAndTotal(gatC2));
/*
  Output:
  { Gaga: 1, Caca: 2, Baba: 10 }
*/
