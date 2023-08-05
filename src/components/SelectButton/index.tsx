import { ForwardedRef, InputHTMLAttributes, ReactNode, forwardRef } from 'react'
import { SelectButtonContainer } from './styles'

interface SelectButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode
  isSelected: boolean
}

function SelectButtonBase(
  { children, isSelected, id, ...props }: SelectButtonProps,
  ref: ForwardedRef<HTMLLabelElement>
) {
  return (
    <label style={{ width: '100%' }} htmlFor={id} ref={ref}>
      <SelectButtonContainer $isSelected={isSelected}>
        <input {...props} id={id} value={id} type="radio" />
        {children}
      </SelectButtonContainer>
    </label>
  )
}

export const SelectButton = forwardRef(SelectButtonBase)
