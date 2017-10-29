import { combineReducers } from 'redux'
import { AiGuesses } from './AiGuesses'

const combinedReducers = combineReducers({
  AiGuesses: AiGuesses
})

export default combinedReducers
