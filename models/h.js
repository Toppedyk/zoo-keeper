export default class Hippo{
  constructor(name,gender, weight, teethLengthInch){
    this.name=name;
    this.gender=gender;
    this.weight=weight;
    this.teethLengthInch=teethLengthInch;
  }

  eat(food) {
    console.log(`Chomp chomp all the ${food}ies.`)
}
speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
}
}