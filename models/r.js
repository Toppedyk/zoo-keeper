export default class Rhino{
  constructor(name,gender,age,hornLength){
    this.name=name;
    this.gender=gender;
    this.age=age;
    this.hornLength=hornLength;
  }

  eat(food) {
    console.log(`Chomp chomp all the ${food}ies.`)
}
speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
}
}