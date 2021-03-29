export default class Quokka{
  constructor(name,gender,age,color){
    this.name=name;
    this.gender=gender;
    this.age=age;
    this.color=color;
    this.cute = true;
  }

  eat(food) {
    console.log(`Chomp chomp all the ${food}ies.`)
}
speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
}
}