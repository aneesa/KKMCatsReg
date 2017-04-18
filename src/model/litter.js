import Person from './Person'
import Cat from './Cat'

class Litter {
  breeder: Person
  newRegistration: boolean
  cattery: string
  litterNumber: number
  dateOfBirth: date
  regDate: date
  sire: Cat
  dam: Cat
  numberOfKittens: number

  constructor(breeder: Person, newRegistration: boolean, cattery: string, litterNumber: number,
              dateOfBirth: date, regDate: date, numberOfKittens: number) {
    this.breeder = breeder
    this.newRegistration = newRegistration
    this.cattery = cattery
    this.litterNumber = litterNumber
    this.dateOfBirth = dateOfBirth
    this.regDate = regDate
    this.numberOfKittens = numberOfKittens
  }

  setSire(sire: Cat) {
    this.sire = sire
  }

  setDam(dam: Cat) {
    this.dam = dam
  }
}

export default Litter
