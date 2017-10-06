// let test = /[^\^]+(?=\^)?/g.exec("19,1^20,1^24,1^35,1^10,1^1,1");


let str = "1,1,2,10000,90^2,1,25,8000,60000^3,1^10,1";

// let matches = str.match(/[^\^]+(?=\^)?/g);
let matches = str.match(/[^^]+(?=^)?/g);
// let details = [];
let sa = [];

// for (let i = 0; i < matches.length; i++) {
//   let array = matches[i].split(',');
//   details.push(array);
// }

// let details = matches.map(match => {
//   return match.split(',');
// })

sa = matches.map(match => match.split(',')).map(ability => {
  return {
    abilityID: ability[0],
    level: ability[1],
    params: ability.length > 2 ? ability.slice(2) : null
  }
});


console.log(sa)