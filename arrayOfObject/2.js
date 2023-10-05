/* Buatlah sebuah function untuk mengganti value dari key sesuai dari parameter yang dikirim */
function changeObjProperty(data, index, key, newVal) {
  // Code
}
let people = [
  { nama: "Cebung", umur: 23 },
  { nama: "Debung", umur: 9000000 },
  { nama: "Febung", umur: 25 },
  { nama: "Gebung", umur: 28 },
];
console.log(changeObjProperty(people, 1, "umur", 18)); // mengganti value dari key umur di index ke 1 dari people
/*
  Output
  [
    { nama: "Cebung", umur: 23 },
    { nama: "Debung", umur: 18 },
    { nama: "Febung", umur: 25 },
    { nama: "Gebung", umur: 28 },
  ]
*/
let people2 = [
  { nama: "Dodi", score: 60 },
  { nama: "Fodi", score: 70 },
  { nama: "Godi", score: 50000000 },
  { nama: "Hodi", score: 90 },
];
console.log(changeObjProperty(people2, 2, "score", 100)); // mengganti value dari key score di index ke 2 dari people2
/*
  Output
  [
    { nama: "Dodi", score: 60 },
    { nama: "Fodi", score: 70 },
    { nama: "Godi", score: 100 },
    { nama: "Hodi", score: 90 },
  ]
*/
