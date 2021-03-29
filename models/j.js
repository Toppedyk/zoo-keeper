export default class Jaguar{
  constructor(name,gender,tailLengthInch,favFood){
    this.name=name;
    this.gender=gender;
    this.tailLengthInch=tailLengthInch;
    this.favFood=favFood;
  }

  eat(food) {
    console.log(`Chomp chomp all the ${food}ies.`)
}
speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
}
}