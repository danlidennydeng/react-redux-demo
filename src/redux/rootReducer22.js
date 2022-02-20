import { combineReducers } from 'redux'
import cakeReducer from './cake/cakeReducer16'
import iceCreamReducer from './iceCream/iceCreamReducer22'


const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
})

export default rootReducer