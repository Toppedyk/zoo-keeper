export default class Xenops{
  constructor(name,color,flightSpeed){
    this.name=name;
    this.color=color;
    this.flightSpeed=flightSpeed
  }

  eat(food) {
    console.log(`Chomp chomp all the ${food}ies.`)
}
speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
}
}