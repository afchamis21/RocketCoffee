import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { CartContext } from '../../contexts/CartContext'
import { NavContainer } from './styles'

export function Header() {
  const { totalAmount } = useContext(CartContext)

  return (
    <NavContainer>
      <NavLink to="/">
        <img src={logo} alt="Coffee Delivery" />
      </NavLink>
      <div className="info">
        <span className="location">
          <MapPin size={22} weight="fill" /> Belo Horizonte, MG
        </span>
        <NavLink to="/cart">
          <ShoppingCart size={22} weight="fill" />
          {totalAmount !== 0 && <div className="counter">{totalAmount}</div>}
        </NavLink>
      </div>
    </NavContainer>
  )
}
