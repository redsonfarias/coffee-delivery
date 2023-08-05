import { useContext, useState } from 'react'
import { CoffeeContext } from '@/contexts/CoffeeContext'
import { ShoppingCartSimple } from '@phosphor-icons/react'
import { InputNumber } from '@/components/InputNumber'
import { ICoffee } from '@/types'
import { formatPrice } from '@/utils/functions'
import {
  CoffeeCardContainer,
  TagListContainer,
  TagContainer,
  Name,
  Description,
  BuyContainer,
  ValueContainer,
  ShoppingCartContainer,
} from './styles'

interface CoffeeCardProps {
  coffee: ICoffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const initialValue = 1
  const [quantity, setQuantity] = useState(initialValue)

  const { id, name, img, tags, description, price } = coffee
  const { addCoffeeToCart } = useContext(CoffeeContext)

  const formattedPrice = formatPrice(price)

  function addCoffee() {
    addCoffeeToCart({ id, name, img, quantity, price })
    setQuantity(initialValue)
  }

  function handleQuantity(newQuantity: number) {
    setQuantity(newQuantity)
  }

  return (
    <CoffeeCardContainer>
      <img src={img} />
      <TagListContainer>
        {tags.map((tag) => (
          <TagContainer key={tag}>
            <p>{tag}</p>
          </TagContainer>
        ))}
      </TagListContainer>
      <Name>{name}</Name>
      <Description>{description}</Description>
      <BuyContainer>
        <ValueContainer>
          <p>R$</p>
          <p>{formattedPrice}</p>
        </ValueContainer>
        <div>
          <InputNumber changeQuantity={handleQuantity} value={quantity} />
          <ShoppingCartContainer onClick={addCoffee}>
            <ShoppingCartSimple size={22} />
          </ShoppingCartContainer>
        </div>
      </BuyContainer>
    </CoffeeCardContainer>
  )
}
