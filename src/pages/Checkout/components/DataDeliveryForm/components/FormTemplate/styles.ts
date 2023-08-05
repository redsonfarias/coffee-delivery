import styled from 'styled-components'
import { defaultTheme } from '@/styles/themes/default'

const { colors } = defaultTheme

export type IconVariants = keyof typeof colors

interface IconProps {
  variant: IconVariants
}

export const FormContainer = styled.div`
  background: ${(props) => props.theme.colors.baseCard};
  border-radius: 6px;
  padding: 2.5rem;
`

export const HeaderContainer = styled.div<IconProps>`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2.5rem;

  svg {
    color: ${(props) => props.theme.colors[props.variant]};
  }
`

export const Subtitle = styled.p`
  color: ${(props) => props.theme.colors.baseSubtitle};
`

export const Description = styled.p`
  font-size: 0.875rem;
  margin-top: 0.125rem;
`
