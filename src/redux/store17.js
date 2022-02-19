import { createStore } from 'redux'   
import cakeReducer from './cake/cakeReducer16'

const store = createStore(cakeReducer)

export default store