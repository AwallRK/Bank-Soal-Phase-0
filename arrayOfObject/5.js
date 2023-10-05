/*
  Dengan menggunakan function groupAndTotal buatlah sesuai output yang diminta.
*/
function groupAndTotal(arr) {}
let gatC1 = [
  { kelas: "A", nilai: 10 },
  { kelas: "B", nilai: 20 },
  { kelas: "A", nilai: 20 },
  { kelas: "C", nilai: 50 },
  { kelas: "A", nilai: 20 },
  { kelas: "B", nilai: 30 },
];
console.log(groupAndTotal(gatC1));
/*
  Output:
  { A: 50, B: 50, C: 50 }
*/
let gatC2 = [
  { kelas: "Gaga", nilai: 1 },
  { kelas: "Caca", nilai: 2 },
  { kelas: "Baba", nilai: 10 },
];
console.log(groupAndTotal(gatC2));
/*
  Output:
  { Gaga: 1, Caca: 2, Baba: 10 }
*/
