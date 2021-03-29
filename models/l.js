export default class Lion{
  constructor(name,gender,age,cubsDependent){
    this.name=name;
    this.gender=gender;
    this.age=age;
    this.cubsDependent=cubsDependent;
  }

  eat(food) {
    console.log(`Chomp chomp all the ${food}ies.`)
}
speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
}
}