import { ReactNode } from 'react'
import { CurrencyDollar, MapPinLine } from '@phosphor-icons/react'
import {
  FormContainer,
  HeaderContainer,
  Subtitle,
  Description,
  IconVariants,
} from './styles'

type FormVariants = 'address' | 'payment'

type VariantType = {
  [key in FormVariants]: {
    title: string
    subtitle: string
    icon: ReactNode
    iconVariant: IconVariants
  }
}

const variants: VariantType = {
  address: {
    title: 'Endereço de entrega',
    subtitle: 'Informe o endereço onde deseja receber seu pedido',
    icon: <MapPinLine weight="regular" size={22} />,
    iconVariant: 'yellowDark',
  },
  payment: {
    title: 'Pagamento',
    subtitle:
      'O pagamento é feito na entrega. Escolha a forma que deseja pagar',
    icon: <CurrencyDollar weight="regular" size={22} />,
    iconVariant: 'purple',
  },
}

interface FormTemplateProps {
  variant: FormVariants
  children: ReactNode
}

export function FormTemplate({ variant: key, children }: FormTemplateProps) {
  const { title, subtitle, icon, iconVariant } = variants[key]

  return (
    <FormContainer>
      <HeaderContainer variant={iconVariant}>
        {icon}
        <div>
          <Subtitle>{title}</Subtitle>
          <Description>{subtitle}</Description>
        </div>
      </HeaderContainer>
      {children}
    </FormContainer>
  )
}
