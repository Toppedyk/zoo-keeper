export default class Dingo{
  constructor(name, color, gender, age, weight){
    this.name=name;
    this.color=color;
    this.gender = gender; 
    this.age=age;
    this.weight=weight; 
  }

  eat(food) {
    console.log(`Chomp chomp all the ${food}ies.`)
}
speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
}
}