export default class Karen{
  constructor(name,age,authoritiesCalled){
    this.name=name;
    this.age=age;
    this.authoritiesCalled=authoritiesCalled;
    this.speakToManager=true
  }

  eat(food) {
    console.log(`Chomp chomp all the ${food}ies.`)
}
speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
}
}