function strongestPokemon(pokemons) {
  // code here
  let highestPower = -Infinity;
  let index = 0;
  let obj = {};
  for (let i = 0; i < pokemons.length; i++) {
    let pokemonPower = pokemons[i].atk;
    if (pokemonPower > highestPower) {
      highestPower = pokemonPower;
      index = i;
      obj = pokemons[i];
    }
  }
  return obj;
}

let datas = [
  { name: "Sqruitle", type: "water", atk: 120 },
  { name: "Bulbasaur", type: "grass", atk: 100 },
  { name: "Charmender", type: "fire", atk: 150 },
  { name: "Chikorita", type: "grass", atk: 100 },
  { name: "Torchic", type: "fire", atk: 200 },
  { name: "Piplup", type: "water", atk: 80 },
  { name: "Oshawott", type: "water", atk: 110 },
  { name: "Chimcar", type: "fire", atk: 115 },
  { name: "Trecko", type: "grass", atk: 105 },
];
// console.log(strongestPokemon(datas));

// outputnya :
// {
//     name: "Torchic",
//     type: "fire",
//     atk: 200
// }

function groupPokemon(pokemons) {
  //code here
  if (pokemons === undefined) {
    return `invalid data`;
  }
  if (pokemons.length < 3) {
    return `cant proses function' cause the datas minimal is 3`;
  }
  let strongestPokemons = strongestPokemon(pokemons);
  //   console.log(strongestPokemons);
  let obj = {};
  for (let pokemon of pokemons) {
    // console.log(pokemon);
    let type = pokemon.type;
    let nama = pokemon.name;
    // console.log(type);
    if (obj[type] === undefined) {
      obj[type] = [];
    }
    obj[type].push(nama);
  }
  //   console.log(obj);
  obj.strongestPokemon = strongestPokemons;
  //   console.log(obj);
  return obj;
}

console.log(groupPokemon(datas));

// output
// {
//     fire: ["Charmender", "Torchic", "Chimcar"],
//     water: ["Sqruitle", "Piplup", "Oshawott"],
//     grass: ["Bulbasaur", "Chikorita", "Trecko"],
//     strongestPokemon : {
//         name: "Torchic",
//         type: "fire",
//         atk: 150
//     }
// }

let datas2 = [
  { name: "Sqruitle", type: "water", atk: 120 },
  { name: "Bulbasaur", type: "grass", atk: 102 },
];

console.log(groupPokemon(datas2));

//outputnya : 'cant proses function' cause the datas minimal is 3

console.log(groupPokemon());

//outputnya : "invalid input"

// let i = 0;
// while (i < 3) {
//   console.log(Math.ceil(Math.random() * 18));
//   i++;
// }
