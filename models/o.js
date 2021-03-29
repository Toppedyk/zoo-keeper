export default class Octopus{
  constructor(name,gender,color,legs,inkColor){
    this.name=name;
    this.gender=gender;
    this.color=color;
    this.legs=legs;
    this.inkColor=inkColor;
  }

  eat(food) {
    console.log(`Chomp chomp all the ${food}ies.`)
}
speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
}
}