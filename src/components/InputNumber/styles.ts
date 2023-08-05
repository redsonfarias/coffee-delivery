import styled from 'styled-components'

export type InputSizeType = 'small' | 'big'

interface InputNumberProps {
  size: InputSizeType
}

const sizes = {
  small: '2rem',
  big: '2.375rem',
}

export const InputNumberContainer = styled.div<InputNumberProps>`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  height: ${(props) => sizes[props.size]};
  padding: 0.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme.colors.baseButton};
  color: ${(props) => props.theme.colors.purple};

  p {
    color: ${(props) => props.theme.colors.baseTitle};
    width: 1.25rem;
    text-align: center;
  }

  :nth-child(odd):hover {
    color: ${(props) => props.theme.colors.purpleDark};
    cursor: pointer;
  }
`
