export default class Iguana{
  constructor(name,gender,color, lengthInch){
    this.name=name;
    this.gender=gender;
    this.color=color;
    this.lengthInch=lengthInch;
  }

  eat(food) {
    console.log(`Chomp chomp all the ${food}ies.`)
}
speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
}
}