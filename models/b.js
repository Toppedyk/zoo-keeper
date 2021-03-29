export default class Bear{
  constructor(name, color, gender, weight, age){
    this.name=name;
    this.color=color;
    this.gender=gender;
    this.weight=weight; 
    this.age=age;
  }

  eat(food) {
    console.log(`Chomp chomp all the ${food}`)
}
speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
}
}