import { Minus, Plus } from '@phosphor-icons/react'
import { InputNumberContainer, InputSizeType } from './styles'

interface InputNumberProps {
  value: number
  changeQuantity: (quantity: number) => void
  size?: InputSizeType
}

export function InputNumber({
  value,
  changeQuantity,
  size = 'big',
}: InputNumberProps) {
  function handleQuantity(newValue: number) {
    const quantity = value + newValue
    if (quantity > 0) {
      changeQuantity(quantity)
    }
  }

  return (
    <InputNumberContainer size={size}>
      <Minus onClick={() => handleQuantity(-1)} size={14} weight="bold" />
      <p>{value}</p>
      <Plus onClick={() => handleQuantity(1)} size={14} weight="bold" />
    </InputNumberContainer>
  )
}
