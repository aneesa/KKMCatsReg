import Litter from './litter'
import Person from './person'
import Cat from './cat'

test('Litter.constructor', () => {
  const testLitter = new Litter(new Person('John Doe'),
                                true,
                                'Awesome',
                                1234,
                                new Date(2017, 1, 1, 0, 0, 0, 0),
                                new Date(2017, 2, 1, 0, 0, 0, 0),
                                5)
  expect(testLitter.breeder.name).toBe('John Doe')
  expect(testLitter.newRegistration).toBe(true)
  expect(testLitter.cattery).toBe('Awesome')
  expect(testLitter.litterNumber).toBe(1234)
  expect(testLitter.dateOfBirth.getTime()).toBe((new Date(2017, 1, 1, 0, 0, 0, 0)).getTime())
  expect(testLitter.regDate.getTime()).toBe((new Date(2017, 2, 1, 0, 0, 0, 0)).getTime())
  expect(testLitter.numberOfKittens).toBe(5)

  testLitter.setSire(new Cat('Stripe',
                              'ABC123',
                              'white',
                              'M',
                              false))
  expect(testLitter.sire.name).toBe('Stripe')
  expect(testLitter.sire.regNumber).toBe('ABC123')
  expect(testLitter.sire.varietyCode).toBe('white')
  expect(testLitter.sire.sex).toBe('M')
  expect(testLitter.sire.desex).toBe(false)

  testLitter.setDam(new Cat('Socks',
                              'DEF123',
                              'black',
                              'F',
                              false))
  expect(testLitter.dam.name).toBe('Socks')
  expect(testLitter.dam.regNumber).toBe('DEF123')
  expect(testLitter.dam.varietyCode).toBe('black')
  expect(testLitter.dam.sex).toBe('F')
  expect(testLitter.dam.desex).toBe(false)
})
