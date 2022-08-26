import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { CartContextProvider } from '../../contexts/CartContext'
import { FormContextProvider } from '../../contexts/FormContext'
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <CartContextProvider>
        <FormContextProvider>
          <Header />
          <Outlet />
        </FormContextProvider>
      </CartContextProvider>
    </LayoutContainer>
  )
}
