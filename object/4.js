/* Gunakan function showProperty untuk menampilkan key dan value yang ada di object tersebut */
function showProperty(data) {
  // Code
}
let store = {
  owner: "Guanyuu",
  since: 1999,
  productType: "Food",
};
console.log(showProperty(store));
/*
  Output di terminal
  Key: owner. Value: Guanyuu
  Key: since. Value: 1999
  Key: productType. Value: Food
*/
let helikopter = {
  "Jenis Kendaraan": "pesawat",
  "Baling-baling": true,
  warna: "putih",
};
console.log(showProperty(helikopter));
/*
  Output di terminal
  Key: Jenis Kendaraan. Value: pesawat
  Key: Baling-baling. Value: true
  Key: warna. Value: putih
*/

/*
  Untuk melatih modular function, gunakanlah function-function sebelumnya di fungsi utama ini sesuai action yang diminta.
  Tambahkan beberapa validasi:
  apabila data atau action berupa falsy, maka tampilkan "Input Data Salah"
  apabila data mempunyai tipe data selain array dan object, maka tampilkan "Tipe Data Salah"
  apabila action selain "create", "update", "delete" dan "read", maka tampilkan "Action Tidak Jelas"
*/
function playingWithObject(data, action, key, newVal) {
  // Code
}
console.log(playingWithObject(["Indiana", 20, 100], "create")); // membuat object, panggil createObject
console.log(
  playingWithObject({ nama: "Joker", umur: 90 }, "update", "umur", 30)
); // mengganti property, panggil changeProperty
console.log(
  playingWithObject({ nama: "Kluklu", klan: "emas" }, "delete", "klan")
); // menghapus key, panggil deleteKeyObj
console.log(playingWithObject({ a: "A", b: "B", c: "C" }, "read")); // memunculkan key dan value, panggil showProperty

/* Negatif Case untuk Validasi, silahkan uncomment untuk mengecek */
// console.log(playingWithObject()) // Input Data Salah
// console.log(playingWithObject("lalalala", "read")) // Tipe Data Salah
// console.log(playingWithObject({ nama: "abc" }, "kamehameha", "hahaha")) // Action Tidak Jelas
