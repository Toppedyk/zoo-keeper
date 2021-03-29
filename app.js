import Alligator from './models/a.js';
import Bear from './models/b.js';
import Caterpillar from './models/c.js'
import Dingo from './models/d.js'
import Elephant from './models/e.js'
import Frog from './models/f.js'
import Giraffe from './models/g.js'
import Hippo from './models/h.js'
import Iguana from './models/i.js'
import Jaguar from './models/j.js'
import Karen from './models/k.js'
import Lion from './models/l.js'
import Monkey from './models/m.js'
import Narwhal from './models/n.js'
import Octopus from './models/o.js'
import Piranha from './models/p.js'
import Quokka from './models/q.js'
import Rhino from './models/q.js'
import SeaCucumber from './models/s.js'
import Tiger from './models/t.js' 
import Unicorn from './models/u.js'
import Viper from './models/v.js'
import Walrus from './models/w.js'
import Xenops from './models/x.js'
import Yak from './models/y.js'
import Zebra from './models/z.js'

let ally = new Alligator('Ally','Green','F', 250, 60, 'big')
let barry = new Bear('Barry','Brown','M',650,4)
let carrie = new Caterpillar('Carrie','Green',5,20)
let dave= new Dingo('Dave','Black','M',3,85)
let evelyn = new Elephant('Evelyn','F',15,60,false)
let frankie = new Frog('Frankie','F','Red',34)
let gary = new Giraffe('Gary','M',48,96)
let henry = new Hippo('Henry','M',1500,8)
let iggy = new Iguana('Iggy','M','Blue',22)
let james=new Jaguar('James','M',24,'Steak')
let kim=new Karen('Kim',44,6)
let lisa = new Lion('Lisa','F',7,3)
let martin = new Monkey('Martin',3,'M',true)
let noel = new Narwhal('Noel',9,'F',48)
let oscar = new Octopus('Oscar','M','Red',7.5,'Black')
let perry = new Piranha('Perry',10,'Sharp',.1)
let quinn = new Quokka('Quinn','M',2,'Brown')
let ryan = new Rhino('Ryan','M',18,'Black')
let stevie = new SeaCucumber('Stevie',1,'Green',12)
let taylor = new Tiger('Taylor', 25,'M',15)
let alex = new Tiger('Alex', 5,'M',14)
let morgan = new Tiger('Morgan', 20,'F',20)
let sammy = new Tiger('Sammy', 13,'F',15)
let uma = new Unicorn('Uma',35,'Red',15)
let veronica = new Viper('Veronica','F',36,19)
let walt = new Walrus('Walt',12,'M',17)
let xander = new Xenops('Xander','Brown',22)
let yakkity = new Yak('Yakkity', 6, 'Black', 1565, 2)
let zantha = new Zebra('Zantha','F','White', 14)

let pettingZoo =[]
pettingZoo.push(zantha.name,gary.name,evelyn.name,uma.name)
console.log(pettingZoo)

let tigerPen={
  taylor,
  alex,
  morgan,
  sammy
}

console.log(tigerPen)