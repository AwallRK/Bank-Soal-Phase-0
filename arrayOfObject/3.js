/* Dengan menggunakan function deleteKeyObj, hapuslah key yang ada di object berdasarkan key yang diberikan */
function deleteKeyObj(data, key) {
  // Code
}
let people3 = [
  { nama: "Errori", jklm: "opqr", tinggi: 150 },
  { nama: "Ferrori", jklm: "qrst xyz paw paw", tinggi: 170 },
];
console.log(deleteKeyObj(people3, "jklm")); // menghapus key jklm dari masing-masing object di dalam array people3
/*
  Output
[
  { nama: "Errori", tinggi: 150 },
  { nama: "Ferrori", tinggi: 170 },
]
*/
let people4 = [
  { nama: "Fufufu", "Haha Hoho": "hihi", alamat: "Jakarta" },
  { nama: "Gugugu", "Haha Hoho": "huahaha muehehe", alamat: "Yogyakarta" },
];
console.log(deleteKeyObj(people4, "Haha Hoho")); // menghapus key Haha Hoho dari masing-masing object di dalam array people4
/*
  Output
  [
  { nama: "Fufufu", alamat: "Jakarta" },
  { nama: "Gugugu", alamat: "Yogyakarta" },
]
*/
