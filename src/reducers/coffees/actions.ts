import { ISelectedCoffee } from '@/types'

export enum ActionsType {
  ADD_NEW_COFFEE = 'ADD_NEW_COFFEE',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
  CHANGE_COFFEE_QUANTITY = 'CHANGE_COFFEE_QUANTITY',
  CLEAR_CART = 'CLEAR_CART',
}

export function addNewCoffeeAction(newCoffee: ISelectedCoffee) {
  return {
    type: ActionsType.ADD_NEW_COFFEE,
    payload: {
      newCoffee,
    },
  }
}

export function removeCoffeeAction(id: string) {
  return {
    type: ActionsType.REMOVE_COFFEE,
    payload: {
      id,
    },
  }
}

export function changeCoffeeQuantityAction(id: string, quantity: number) {
  return {
    type: ActionsType.CHANGE_COFFEE_QUANTITY,
    payload: {
      id,
      quantity,
    },
  }
}

export function clearCartAction() {
  return {
    type: ActionsType.CLEAR_CART,
  }
}
