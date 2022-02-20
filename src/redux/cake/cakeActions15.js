import { BUY_CAKE } from "./cakeTypes15"

export const buyCake = (number = 1) => {
  return {
    type: BUY_CAKE,
    payload: number
  }
}