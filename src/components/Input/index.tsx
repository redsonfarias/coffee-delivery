import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react'
import MaskedInput, { Mask } from 'react-text-mask'
import { Container, InputContainer, Optional, Error } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  maxWidth?: number
  error?: string
  mask?: Mask
}

function InputBase(
  { maxWidth, error, mask, required = true, ...props }: InputProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  const hasError = !!error

  function inputRender() {
    if (!mask) return <input {...props} />
    return <MaskedInput mask={mask} guide={false} {...props} />
  }

  return (
    <Container $maxWidth={maxWidth} ref={ref}>
      <InputContainer $hasError={hasError}>
        {inputRender()}
        {!required && <Optional>Opcional</Optional>}
      </InputContainer>
      {hasError && <Error>{error}</Error>}
    </Container>
  )
}

export const Input = forwardRef(InputBase)
