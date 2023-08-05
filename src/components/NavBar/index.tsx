import { useContext } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { CoffeeContext } from '@/contexts/CoffeeContext'
import logo from '@/assets/logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { COFFEE_SHOP_LOCATION } from '@/constants'
import {
  NavBarContainer,
  LocationContainer,
  ShoppingCartContainer,
  CounterContainer,
} from './styles'

export function NavBar() {
  const { selectedCoffees } = useContext(CoffeeContext)
  const count = selectedCoffees.length

  return (
    <NavBarContainer>
      <NavLink to="/">
        <img src={logo} />
      </NavLink>
      <div>
        <Link to={COFFEE_SHOP_LOCATION} target="_blank">
          <LocationContainer>
            <MapPin size={22} />
            <p>Porto Alegre, RS</p>
          </LocationContainer>
        </Link>
        <NavLink to="/checkout">
          <ShoppingCartContainer>
            {count > 0 && (
              <CounterContainer>
                <p>{count}</p>
              </CounterContainer>
            )}
            <ShoppingCart size={22} />
          </ShoppingCartContainer>
        </NavLink>
      </div>
    </NavBarContainer>
  )
}
