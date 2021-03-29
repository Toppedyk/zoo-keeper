export default class Monkey{
  constructor(name,age,gender,throwsPoop){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.throwsPoop=throwsPoop;
  }

  eat(food) {
    console.log(`Chomp chomp all the ${food}ies.`)
}
speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
}
}