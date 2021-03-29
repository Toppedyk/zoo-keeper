export default class Tiger{
  constructor(name,age,gender,numStripes){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.numStripes=numStripes;
  }

  eat(food) {
    console.log(`Chomp chomp all the ${food}ies.`)
}
speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
}
}