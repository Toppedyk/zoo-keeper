export default class Elephant{
  constructor(name, gender, age, trunkLengthInch, allergies=false){
    this.name=name;
    this.gender=gender;
    this.age=age;
    this.trunkLengthInch=trunkLengthInch;
    this.allergies=allergies;
  }

  eat(food) {
    console.log(`Chomp chomp all the ${food}ies.`)
}
speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
}
}