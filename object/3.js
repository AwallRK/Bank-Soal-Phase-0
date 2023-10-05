/* Dengan menggunakan function deleteKeyObj, hapuslah key yang ada di object berdasarkan key yang diberikan */
function deleteKeyObj(obj, key) {
  // Code
}
let person3 = {
  nama: "Errori",
  jklm: "opqr",
  tinggi: 150,
};
console.log(deleteKeyObj(person3, "jklm"));
/*
  Output
  {
    nama: "Errori",
    tinggi: 150
  }
*/
let person4 = {
  nama: "Fufufu",
  "Haha Hoho": "hihi",
  alamat: "Jakarta",
};
console.log(deleteKeyObj(person4, "Haha Hoho"));
/*
  Output
  {
    nama: "Fufufu",
    alamat: "Jakarta"
  }
*/
