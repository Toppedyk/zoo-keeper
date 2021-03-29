export default class Viper{
  constructor(name,gender,strikeDistance,bodyLength){
    this.name=name;
    this.gender=gender;
    this.strikeDistance=strikeDistance;
    this.bodyLength=bodyLength;
  }

  eat(food) {
    console.log(`Chomp chomp all the ${food}ies.`)
}
speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
}
}