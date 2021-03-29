export default class Narwhal{
  constructor(name,age,gender,hornLength){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.hornLength=hornLength;
  }

  eat(food) {
    console.log(`Chomp chomp all the ${food}ies.`)
}
speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
}
}