import Immutable from 'immutable'
import type { fromJS as Immut } from 'immutable'

import { ADD_PERSON, EDIT_PERSON } from '../action/people'

const initialState = Immutable.fromJS({
  people: [{ 'id' : 1, 'name' : 'John Doe'}, { 'id' : 2, 'name' : 'Jason Bourne'}],
})

const peopleReducer = (state: Immut = initialState, action: { type: string, payload: any }) => {
  switch (action.type) {
    case ADD_PERSON:
      return state.set('people', state.get('people').push(action.payload))
    case EDIT_PERSON:
      // save the person in loki first
      // get all the list of people back from loki
      return state
    default:
      return state
  }
}

export default peopleReducer
