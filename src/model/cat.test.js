import Cat from './cat'
import Litter from './litter'
import Person from './person'

test('Cat.constructor', () => {
  const testCat = new Cat('Stripe',
                          'ABC123',
                          'white',
                          'M',
                          false)
  expect(testCat.name).toBe('Stripe')
  expect(testCat.regNumber).toBe('ABC123')
  expect(testCat.varietyCode).toBe('white')
  expect(testCat.sex).toBe('M')
  expect(testCat.desex).toBe(false)

  testCat.setLitter(new Litter(new Person('John Doe'),
                                true,
                                'Awesome',
                                1234,
                                new Date(2017, 1, 1, 0, 0, 0, 0),
                                new Date(2017, 2, 1, 0, 0, 0, 0),
                                5))
  expect(testCat.litter.breeder.name).toBe('John Doe')
  expect(testCat.litter.newRegistration).toBe(true)
  expect(testCat.litter.cattery).toBe('Awesome')
  expect(testCat.litter.litterNumber).toBe(1234)
  expect(testCat.litter.dateOfBirth.getTime()).toBe((new Date(2017, 1, 1, 0, 0, 0, 0)).getTime())
  expect(testCat.litter.regDate.getTime()).toBe((new Date(2017, 2, 1, 0, 0, 0, 0)).getTime())

  testCat.setOwners(new Array(new Person('Jane Smith'),
                              new Person('Jason Bourne'),
                              new Person('Jack Bauer')))
  expect(testCat.owners[0].name).toBe('Jane Smith');
  expect(testCat.owners[1].name).toBe('Jason Bourne');
  expect(testCat.owners[2].name).toBe('Jack Bauer');
})
