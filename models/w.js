export default class Walrus{
  constructor(name,age,gender,tuskLength){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.tuskLength=tuskLength;
  }

  eat(food) {
    console.log(`Chomp chomp all the ${food}ies.`)
}
speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
}
}