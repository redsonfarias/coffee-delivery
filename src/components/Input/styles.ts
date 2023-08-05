/* eslint-disable indent */
import styled from 'styled-components'

interface ContainerProps {
  $maxWidth?: number
}

interface InputProps {
  $hasError: boolean
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  max-width: ${(props) => (props.$maxWidth ? `${props.$maxWidth}rem` : 'none')};
`

export const InputContainer = styled.div<InputProps>`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.75rem;
  border-radius: 4px;
  background: ${(props) => props.theme.colors.baseInput};
  border: 0.063rem solid
    ${(props) =>
      props.$hasError ? props.theme.colors.red : props.theme.colors.baseButton};
  width: 100%;

  input {
    border: none;
    background: transparent;
    outline: transparent;
    flex: 1;
    overflow: hidden;
  }

  ::placeholder {
    color: ${(props) => props.theme.colors.baseLabel};
  }

  &:focus-within {
    ${(props) =>
      !props.$hasError &&
      `border: 0.063rem solid ${props.theme.colors.yellow}`};
  }
`

export const Optional = styled.p`
  font-size: 0.75rem;
  font-style: italic;
  color: ${(props) => props.theme.colors.baseLabel};
  cursor: default;
`

export const Error = styled.p`
  font-size: 0.75rem;
  color: ${(props) => props.theme.colors.red};
  margin-top: 0.5rem;
`
