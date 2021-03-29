export default class Zebra{
  constructor(name,gender,color,stripes){
    this.name=name;
    this.gender=gender;
    this.color=color;
    this.stripes=stripes;
  }

  eat(food) {
    console.log(`Chomp chomp all the ${food}ies.`)
}
speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
}
}