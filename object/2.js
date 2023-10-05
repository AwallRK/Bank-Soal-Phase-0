/* Buatlah sebuah function untuk mengganti value dari key sesuai dari parameter yang dikirim */
function changeProperty(obj, key, newVal) {
  // Code
}
let person = {
  nama: "Cebung",
  umur: 90,
};
console.log(changeProperty(person, "umur", 18)); // mengganti value dari key umur
/*
  Output
  {
    nama: "Cebung",
    umur: 18
  }
*/
let person2 = {
  nama: "Dodi",
  score: 900,
};
console.log(changeProperty(person2, "score", 60)); // mengganti value dari key score
/*
  Output
  {
    nama: "Dodi",
    score: 60
  }
*/
