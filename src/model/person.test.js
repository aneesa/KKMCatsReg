import Person from './person'

test('Person.constructor', () => {
  const testPerson = new Person('John Doe')
  expect(testPerson.name).toBe('John Doe')
})
