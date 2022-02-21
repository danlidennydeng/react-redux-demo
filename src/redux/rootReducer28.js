import { combineReducers } from 'redux'
import cakeReducer from './cake/cakeReducer16'
import iceCreamReducer from './iceCream/iceCreamReducer22'

import userReducer from './user/userReducer'

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  user: userReducer
})

export default rootReducer