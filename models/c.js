export default class Caterpillar{
  constructor(name, color, lengthInch, legs){
    this.name=name;
    this.color=color;
    this.lengthInch=lengthInch;
    this.legs=legs;
  }

  eat(food) {
    console.log(`Chomp chomp all the ${food}ies.`)
}
speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
}
}