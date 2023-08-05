/* eslint-disable indent */
import styled from 'styled-components'

interface SelectedButtonProps {
  $isSelected?: boolean
}

export const SelectButtonContainer = styled.div<SelectedButtonProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  background: ${(props) =>
    props.$isSelected
      ? props.theme.colors.purpleLight
      : props.theme.colors.baseButton};
  border: 0.063rem solid
    ${(props) =>
      props.$isSelected
        ? props.theme.colors.purple
        : props.theme.colors.baseButton};
  padding: 1rem;
  border-radius: 6px;
  font-size: 0.75rem;
  text-transform: uppercase;
  line-height: 160%;
  cursor: pointer;

  &:hover {
    ${(props) =>
      !props.$isSelected && `background: ${props.theme.colors.baseHover}`};
  }

  svg {
    color: ${(props) => props.theme.colors.purple};
  }

  input {
    display: none;
  }
`
