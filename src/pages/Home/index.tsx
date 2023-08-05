import { COFFEES } from '@/constants'
import { CoffeeCard } from './components/CoffeeCard'
import { Banner } from './components/Banner'
import { CoffeeListContainer, ListContainer, Title } from './styles'

export function Home() {
  return (
    <>
      <Banner />
      <CoffeeListContainer>
        <Title>Nossos cafés</Title>
        <ListContainer>
          {COFFEES.map((coffe) => (
            <CoffeeCard coffee={coffe} key={coffe.id} />
          ))}
        </ListContainer>
      </CoffeeListContainer>
    </>
  )
}
