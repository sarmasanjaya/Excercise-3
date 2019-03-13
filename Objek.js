var baliObj = {
  id: "281172",
  name: "Dewata",
  age: 5000,
  favorites: [
    "Travelling",
    "Rahasia",
    {
      sports: ["parkour", "hill climbing"]
    }
  ],
  address: {
    street: "Bumi",
    zipCode: 54213
  }
};

console.log(BaliObj.name); // "Superman"
console.log(BaliObj.age); // 200
console.log(BaliObj.favorites[0]); // "coding"
console.log(BaliObj.favorites[2].sports); // ["parkour", "hill climbing"]
console.log(BaliObj.favorites[2].sports[0]); // "parkour"
console.log(BaliObj.address); // {street: "Planet Krypton", zipCode: 54213}
console.log(BaliObj.address.zipCode); //54213
console.log(BaliObj.favorites[2].sports[1]); // "hill climbing"