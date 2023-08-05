import { Navigate, useLocation } from 'react-router-dom'
import { RoundedIcon } from '@/components/RoundedIcon'
import { MapPin, Timer, CurrencyDollar } from '@phosphor-icons/react'
import motoboy from '@/assets/motoboy.png'
import { DataDeliveryFormDataType } from '@/pages/Checkout'
import { capitalizeWords } from '@/utils/functions'
import {
  ConfirmedOrderContainer,
  MainContainer,
  OrderInfoContainer,
  ItemContainer,
  UF,
} from './styles'

export function ConfirmedOrder() {
  const location = useLocation()

  if (!location.state) {
    return <Navigate to="/" />
  }

  const { street, number, complement, neighbourhood, city, uf, paymentMethod } =
    location?.state as DataDeliveryFormDataType

  const formattedStreet = capitalizeWords(street)
  const formattedComplement = capitalizeWords(complement ?? '')
  const formattedNeighbourhood = capitalizeWords(neighbourhood)
  const formattedCity = capitalizeWords(city)
  const formattedPaymentMethod = {
    credit: 'Cartão de crédito',
    debit: 'Cartão de débito',
    money: 'Dinheiro',
  }

  return (
    <ConfirmedOrderContainer>
      <p>Uhu! Pedido confirmado</p>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <MainContainer>
        <OrderInfoContainer>
          <div>
            <ItemContainer>
              <RoundedIcon icon={<MapPin />} variant="purple" />
              <div>
                <p>
                  Entrega em{' '}
                  <strong>
                    {formattedStreet}, {number} {formattedComplement}
                  </strong>
                </p>
                <p>
                  {formattedNeighbourhood} - {formattedCity}, <UF>{uf}</UF>
                </p>
              </div>
            </ItemContainer>
            <ItemContainer>
              <RoundedIcon icon={<Timer />} variant="yellow" />
              <div>
                <p>Previsão de entrega</p>
                <strong>20 min - 30 min</strong>
              </div>
            </ItemContainer>
            <ItemContainer>
              <RoundedIcon
                icon={<CurrencyDollar weight="regular" />}
                variant="yellowDark"
              />
              <div>
                <p>Pagamento na entrega</p>
                <strong>{formattedPaymentMethod[paymentMethod]}</strong>
              </div>
            </ItemContainer>
          </div>
        </OrderInfoContainer>
        <img src={motoboy} />
      </MainContainer>
    </ConfirmedOrderContainer>
  )
}
