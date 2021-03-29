export default class Giraffe{
  constructor(name, gender, spots, neckLength){
    this.name=name;
    this.gender=gender;
    this.spots=spots;
    this.neckLength=neckLength;
  }

  eat(food) {
    console.log(`Chomp chomp all the ${food}ies.`)
}
speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
}
}