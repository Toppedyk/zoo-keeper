export default class SeaCucumber{
  constructor(name,age,color,bodyLength){
    this.name=name;
    this.age=age;
    this.color=color;
    this.bodyLength=bodyLength;
  }

  eat(food) {
    console.log(`Chomp chomp all the ${food}ies.`)
}
speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
}
}