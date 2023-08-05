import styled from 'styled-components'
import { defaultTheme } from '@/styles/themes/default'

const { colors } = defaultTheme

export type RoundedIconVariants = keyof typeof colors

interface RoundedIconProps {
  variant: RoundedIconVariants
}

export const RoundedIconContainer = styled.div<RoundedIconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors[props.variant]};
  padding: 0.5rem;
  border-radius: 100%;
  color: ${(props) => props.theme.colors.white};
`
