import { ReactNode } from 'react'
import { RoundedIconContainer, RoundedIconVariants } from './styles'

interface RoundedIconProps {
  icon: ReactNode
  variant: RoundedIconVariants
}

export function RoundedIcon({ icon, variant }: RoundedIconProps) {
  return <RoundedIconContainer variant={variant}>{icon}</RoundedIconContainer>
}
