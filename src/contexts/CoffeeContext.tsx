import { ReactNode, createContext, useEffect, useReducer } from 'react'
import { toast } from 'react-toastify'
import { CoffeesReducer } from '@/reducers/coffees/reducer'
import {
  addNewCoffeeAction,
  changeCoffeeQuantityAction,
  removeCoffeeAction,
  clearCartAction,
} from '@/reducers/coffees/actions'
import { ISelectedCoffee } from '@/types'

interface CoffeeContextProps {
  children: ReactNode
}

interface ICoffeeContext {
  selectedCoffees: ISelectedCoffee[]
  priceCoffees: number
  addCoffeeToCart: (coffee: ISelectedCoffee) => void
  removeCoffeeFromCart: (id: string) => void
  changeCoffeeQuantity: (id: string, quantity: number) => void
  clearCart: () => void
}

export const CoffeeContext = createContext({} as ICoffeeContext)

export function CoffeeContextProvider({ children }: CoffeeContextProps) {
  const [selectedCoffees, dispatch] = useReducer(
    CoffeesReducer,
    [],
    (initialState) => {
      const storedSelectedCoffeesAsJSON = localStorage.getItem(
        '@coffe-delivery:selected-coffees'
      )

      if (storedSelectedCoffeesAsJSON) {
        return JSON.parse(storedSelectedCoffeesAsJSON)
      }

      return initialState
    }
  )

  const priceCoffees = selectedCoffees.reduce(
    (total, coffee) => total + coffee.price * coffee.quantity,
    0
  )

  useEffect(() => {
    const stateJSON = JSON.stringify(selectedCoffees)

    localStorage.setItem('@coffe-delivery:selected-coffees', stateJSON)
  }, [selectedCoffees])

  function notify() {
    toast('Café adicionado ao carrinho!', {
      type: 'success',
      hideProgressBar: true,
      autoClose: 2000,
    })
  }

  function addCoffeeToCart(newCoffee: ISelectedCoffee) {
    dispatch(addNewCoffeeAction(newCoffee))
    notify()
  }

  function removeCoffeeFromCart(id: string) {
    dispatch(removeCoffeeAction(id))
  }

  function changeCoffeeQuantity(id: string, quantity: number) {
    dispatch(changeCoffeeQuantityAction(id, quantity))
  }

  function clearCart() {
    dispatch(clearCartAction())
  }

  const contextValue = {
    selectedCoffees,
    priceCoffees,
    addCoffeeToCart,
    removeCoffeeFromCart,
    changeCoffeeQuantity,
    clearCart,
  }

  return (
    <CoffeeContext.Provider value={contextValue}>
      {children}
    </CoffeeContext.Provider>
  )
}
