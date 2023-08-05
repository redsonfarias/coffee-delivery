import coffee from '@/assets/coffee.png'
import { ShoppingCart, Package, Timer, Coffee } from '@phosphor-icons/react'
import { RoundedIcon } from '@/components/RoundedIcon'
import {
  BannerContainer,
  Title,
  Subtitle,
  ListContainer,
  ItemContainer,
} from './styles'

export function Banner() {
  return (
    <BannerContainer>
      <div>
        <Title>Encontre o café perfeito para qualquer hora do dia</Title>
        <Subtitle>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </Subtitle>
        <ListContainer>
          <ItemContainer>
            <RoundedIcon icon={<ShoppingCart />} variant="yellowDark" />
            <p>Compra simples e segura</p>
          </ItemContainer>
          <ItemContainer>
            <RoundedIcon icon={<Package />} variant="baseText" />
            <p>Embalagem mantém o café intacto</p>
          </ItemContainer>
          <ItemContainer>
            <RoundedIcon icon={<Timer />} variant="yellow" />
            <p>Entrega rápida e rastreada</p>
          </ItemContainer>
          <ItemContainer>
            <RoundedIcon icon={<Coffee />} variant="purple" />
            <p>O café chega fresquinho até você</p>
          </ItemContainer>
        </ListContainer>
      </div>
      <img src={coffee} />
    </BannerContainer>
  )
}
