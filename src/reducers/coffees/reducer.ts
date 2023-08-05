/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable indent */
import { produce } from 'immer'
import { ActionsType } from './actions'
import { ISelectedCoffee } from '@/types'

export function CoffeesReducer(state: ISelectedCoffee[], action: any) {
  const { type, payload } = action

  switch (type) {
    case ActionsType.ADD_NEW_COFFEE: {
      const { newCoffee } = payload
      const coffeeIndex = state.findIndex(
        (coffee) => coffee.id === newCoffee.id
      )

      if (coffeeIndex < 0) {
        return produce(state, (draft) => {
          draft.push(newCoffee)
        })
      }

      return produce(state, (draft) => {
        draft[coffeeIndex].quantity += newCoffee.quantity
      })
    }

    case ActionsType.REMOVE_COFFEE:
      return state.filter((coffee) => coffee.id !== payload.id)

    case ActionsType.CHANGE_COFFEE_QUANTITY: {
      const { id, quantity } = payload
      const coffeeIndex = state.findIndex((coffee) => coffee.id === id)

      if (coffeeIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft[coffeeIndex].quantity = quantity
      })
    }

    case ActionsType.CLEAR_CART:
      return []

    default:
      return state
  }
}
