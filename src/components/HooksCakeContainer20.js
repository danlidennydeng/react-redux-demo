import React from 'react'   
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux/index18'

function HooksCakeContainer() {
  
  const numOfCakes = useSelector(state => state.numOfCakes)

  const dispatch = useDispatch()
  return (
    <div>
      <h2>Hooks, Number of Cake - {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  )
}

export default HooksCakeContainer