import { useContext } from 'react'
import { CartContext } from '../../../../contexts/CartContext'
import { FormContext } from '../../../../contexts/FormContext'
import { CartPreviewProductCard } from '../ProductCard'
import {
  CartDetails,
  CartPreviewContainer,
  ProductsPreviewContainer,
  SubmitButton,
} from './styles'

export function CartPreview() {
  const { cart } = useContext(CartContext)
  const { activePaymentMethod } = useContext(FormContext)
  const totalCartValue = calculateCartValue()
  const deliveryFee = 3.5

  function calculateCartValue() {
    let cartValue = 0
    cart.forEach((productInCart) => {
      cartValue += productInCart.amount * productInCart.product.price
    })
    return cartValue
  }
  return (
    <div>
      <h3>Complete seu pedido</h3>
      <CartPreviewContainer>
        <ProductsPreviewContainer>
          {cart.length ? (
            cart.map((productInCart) => (
              <CartPreviewProductCard
                key={productInCart.product.id}
                product={productInCart.product}
                amountInCart={productInCart.amount}
              />
            ))
          ) : (
            <h3 className="emptyCartMessage">Carrinho vazio</h3>
          )}
        </ProductsPreviewContainer>
        <CartDetails>
          <div className="itemsValue">
            <p>Total de itens</p>
            <span>R$ {totalCartValue.toFixed(2)}</span>
          </div>
          <div className="deliveryFee">
            <p>Entrega</p>
            <span>R$ {deliveryFee.toFixed(2)}</span>
          </div>
          <div className="totalValue">
            <p>Total</p>
            <span>R$ {(totalCartValue + deliveryFee).toFixed(2)}</span>
          </div>
        </CartDetails>
        <SubmitButton
          type="submit"
          disabled={!activePaymentMethod || !cart.length}
        >
          Confirmar Pedido
        </SubmitButton>
      </CartPreviewContainer>
    </div>
  )
}
