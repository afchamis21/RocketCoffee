import { useContext } from 'react'
import { CartContext } from '../../../../contexts/CartContext'
import { FakeDB } from '../../../../services/FakeDB'
import { ProductCard } from '../ProductCard'
import { ProductListContainer } from './styles'

export function ProductsList() {
  const { cart } = useContext(CartContext)
  return (
    <div>
      <h2>Nossos Cafés</h2>
      <ProductListContainer>
        {FakeDB.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
            amountInCart={
              cart.find(
                (productInCart) => productInCart.product.id === product.id,
              )?.amount
            }
          />
        ))}
      </ProductListContainer>
    </div>
  )
}
