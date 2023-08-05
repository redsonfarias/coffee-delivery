import { useContext } from 'react'
import { CoffeeContext } from '@/contexts/CoffeeContext'
import { useNavigate } from 'react-router-dom'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { CoffeeCard } from './components/CoffeeCard'
import { DataDeliveryForm } from './components/DataDeliveryForm'
import { formatPrice } from '@/utils/functions'
import { DELIVERY_PRICE } from '@/constants'
import { ArrowLeft, SmileyXEyes } from '@phosphor-icons/react'
import {
  CheckoutContainer,
  CheckoutMessageContainer,
  Subtitle,
  SummaryContainer,
  PurchaseValuesContainer,
  PriceContainer,
  PriceBoldContainer,
  LabelButtonContainer,
} from './styles'

const dataDeliveryFormValidationSchema = zod.object({
  cep: zod
    .string()
    .nonempty('Informe o CEP')
    .regex(/^[0-9]{5}-[0-9]{3}$/, 'CEP inválido'),
  street: zod.string().nonempty('Informe a rua'),
  number: zod.string().nonempty('Informe o número'),
  complement: zod.string().optional(),
  neighbourhood: zod.string().nonempty('Informe o bairro'),
  city: zod.string().nonempty('Informe a cidade'),
  uf: zod
    .string()
    .nonempty('Informe a UF')
    .min(2, 'UF inválido')
    .max(2, 'UF inválido'),
  paymentMethod: zod.enum(['credit', 'debit', 'money'], {
    errorMap: () => ({ message: 'Escolha o método de pagamento' }),
  }),
})

export type DataDeliveryFormDataType = zod.infer<
  typeof dataDeliveryFormValidationSchema
>

export function Checkout() {
  const { selectedCoffees, priceCoffees, clearCart } = useContext(CoffeeContext)
  const navigate = useNavigate()
  const methods = useForm<DataDeliveryFormDataType>({
    resolver: zodResolver(dataDeliveryFormValidationSchema),
    defaultValues: {
      cep: '',
      street: '',
      number: '',
      complement: '',
      neighbourhood: '',
      city: '',
      uf: '',
    },
  })

  function handleFinalizeOrder(data: DataDeliveryFormDataType) {
    clearCart()
    navigate('/confirmed-order', { state: data })
  }

  const total = priceCoffees + DELIVERY_PRICE
  const formattedPriceCoffes = formatPrice(priceCoffees)
  const formattedDeliveryPrice = formatPrice(DELIVERY_PRICE)
  const formattedTotal = formatPrice(total)

  if (!selectedCoffees.length) {
    return (
      <CheckoutMessageContainer>
        <SmileyXEyes size={150} />
        <p>Você não possui nenhum café no carrinho</p>
        <LabelButtonContainer onClick={() => navigate('/')}>
          <ArrowLeft weight="bold" size={20} /> voltar para home
        </LabelButtonContainer>
      </CheckoutMessageContainer>
    )
  }

  return (
    <FormProvider {...methods}>
      <CheckoutContainer onSubmit={methods.handleSubmit(handleFinalizeOrder)}>
        <div>
          <Subtitle>Complete seu pedido</Subtitle>
          <DataDeliveryForm />
        </div>
        <div>
          <Subtitle>Cafés selecionados</Subtitle>
          <SummaryContainer>
            {selectedCoffees.map((coffee) => (
              <CoffeeCard coffee={coffee} key={coffee.id} />
            ))}
            <PurchaseValuesContainer>
              <PriceContainer>
                <p>Total de itens</p>
                <p>R$ {formattedPriceCoffes}</p>
              </PriceContainer>
              <PriceContainer>
                <p>Entrega</p>
                <p>R$ {formattedDeliveryPrice}</p>
              </PriceContainer>
              <PriceBoldContainer>
                <p>Total</p>
                <p>R$ {formattedTotal}</p>
              </PriceBoldContainer>
            </PurchaseValuesContainer>
            <LabelButtonContainer $fullWidth>
              confirmar pedido
            </LabelButtonContainer>
          </SummaryContainer>
        </div>
      </CheckoutContainer>
    </FormProvider>
  )
}
