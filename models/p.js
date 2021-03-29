export default class Piranha{
  constructor(name,bodyLength,teeth,bodyCount){
    this.name=name;
    this.bodyLength=bodyLength;
    this.teeth=teeth;
    this.bodyCount=bodyCount;
  }

  eat(food) {
    console.log(`Chomp chomp all the ${food}ies.`)
}
speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
}
}