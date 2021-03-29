export default class Unicorn{
  constructor(name,age,hornColor,hornLength){
    this.name=name;
    this.age=age;
    this.hornColor=hornColor;
    this.hornLength=hornLength;
  }

  eat(food) {
    console.log(`Chomp chomp all the ${food}ies.`)
}
speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
}
}