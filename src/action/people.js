import { createAction } from 'redux-actions'

export const ADD_PERSON = 'ADD_PERSON'
export const EDIT_PERSON = 'EDIT_PERSON'

export const addPerson = createAction(ADD_PERSON)
export const editPerson = createAction(EDIT_PERSON)
