export default class Frog{
  constructor(name, gender, color, jumpLengthInch){
    this.name=name;
    this.gender=gender;
    this.color=color;
    this.jumpLengthInch=jumpLengthInch;
  }

  eat(food) {
    console.log(`Chomp chomp all the ${food}ies.`)
}
speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
}
}