import Litter from './Litter'

class Cat {
  name: string
  regNumber: string
  varietyCode: string
  sex: string
  desex: boolean
  litter: Litter
  owners: Array

  constructor(name: string, regNumber: string, varietyCode: string, sex: string, desex: boolean) {
    this.name = name
    this.regNumber = regNumber
    this.varietyCode = varietyCode
    this.sex = sex
    this.desex = desex
  }

  setLitter(litter: Litter) {
    this.litter = litter
  }

  setOwners(owners: Array) {
    this.owners = owners
  }
}

export default Cat
