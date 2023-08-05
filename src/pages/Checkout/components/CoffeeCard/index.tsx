import { useContext } from 'react'
import { CoffeeContext } from '@/contexts/CoffeeContext'
import { InputNumber } from '@/components/InputNumber'
import { Trash } from '@phosphor-icons/react'
import { ISelectedCoffee } from '@/types'
import { formatPrice } from '@/utils/functions'
import {
  CoffeeCardContainer,
  Name,
  ActionContainer,
  CoffeInfoContainer,
  RemoveButtonContainer,
  Divider,
} from './styles'

interface CoffeeCardProps {
  coffee: ISelectedCoffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { changeCoffeeQuantity, removeCoffeeFromCart } =
    useContext(CoffeeContext)
  const { id, name, img, quantity, price } = coffee

  const formattedPrice = formatPrice(price * quantity)

  function changeQuantity(newQuantity: number) {
    changeCoffeeQuantity(id, newQuantity)
  }

  function removeCoffee() {
    removeCoffeeFromCart(id)
  }

  return (
    <>
      <CoffeeCardContainer>
        <CoffeInfoContainer>
          <img src={img} />
          <div>
            <Name>{name}</Name>
            <ActionContainer>
              <div>
                <InputNumber
                  value={quantity}
                  changeQuantity={changeQuantity}
                  size="small"
                />
                <RemoveButtonContainer onClick={removeCoffee} type="button">
                  <Trash weight="regular" />
                  remover
                </RemoveButtonContainer>
              </div>
            </ActionContainer>
          </div>
        </CoffeInfoContainer>
        <p>R$ {formattedPrice}</p>
      </CoffeeCardContainer>
      <Divider />
    </>
  )
}
