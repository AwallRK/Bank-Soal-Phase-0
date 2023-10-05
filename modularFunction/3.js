/*
  Berfungsi memisah string menjadi array berdasarkan symbol yang diinginkan
  Input:
    word => string. contoh "alpha:5"
    separator => string. contoh ":"
  Output: ["alpha", 5]
*/
function split(word, separator) {}
// console.log(split("alpha:5", ":"));

/*
  Berfungsi untuk membalikkan string
  Input:
    word => string. contoh "alpha"
  Output: "ahpla"
*/
function reverse(word) {}
// console.log(reverse("alpha"));

/*
  Berfungsi mengganti angka menjadi huruf
  Input:
    num => number. contoh 5
  Output: "lima"
*/
function changeAngka(num) {}
// console.log(changeAngka(5))

/*
  Berfungsi menggabung array menjadi string dengan symbol yang diinginkan
  Input:
    arr => array. contoh ["alpha", 5]
    separator => string. contoh "-"
  Output: "alpha-5"
*/
function join(arr, separator) {}
// console.log(join(["alpha", 5], "-"))

// main function yang akan memproses semua function
function mainFunction(arr) {}

let arrayOfWord = [
  ["alpha:5", "beta:3"],
  ["charlie:1", "delta:2"],
  ["echo:7", "foxtrot:9"],
];
console.log(mainFunction(arrayOfWord));
/*
  alpha-5 -> ahpla-lima
  beta-3 -> ateb-tiga
  charlie-1 -> eilrahc-satu
  delta-2 -> atled-dua
  echo-7 -> ohce-tujuh
  foxtrot-9 -> tortxof-sembilan
*/

let arrayOfWord2 = [
  ["gamma:8", "hotel:0"],
  ["india:2", "joker:3"],
  ["kiki:5", "llama:4"],
];
console.log(mainFunction(arrayOfWord2));
/*
  gamma-8 -> ammag-delapan
  hotel-0 -> letoh-kosong
  india-2 -> aidni-dua
  joker-3 -> rekoj-tiga
  kiki-5 -> ikik-lima
  llama-4 -> amall-empat
*/

// negatif case
console.log(mainFunction([]));
/*
  array berisi minimal 3
*/

console.log(mainFunction());
/*
  input invalid
*/
