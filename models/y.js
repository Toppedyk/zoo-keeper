export default class Yak{
  constructor(name,age,color,weight,horns){
    this.name=name;
    this.age=age;
    this.color=color;
    this.weight=weight;
    this.horns=horns;
  }

  eat(food) {
    console.log(`Chomp chomp all the ${food}ies.`)
}
speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
}
}