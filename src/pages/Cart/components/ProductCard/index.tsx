import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CartContext, ProductInCart } from '../../../../contexts/CartContext'
import { IProduct } from '../../../../services/FakeDB'
import { ProductCardContainer } from './styles'

interface CartPreviewProductCardProps {
  product: IProduct
  amountInCart: number
}

export function CartPreviewProductCard({
  product,
  amountInCart,
}: CartPreviewProductCardProps) {
  const [amount, setAmount] = useState(() => amountInCart || 1)
  const { addNewProduct, deleteProduct } = useContext(CartContext)

  function handleIncrease() {
    const newAmount = amount + 1
    setAmount(newAmount)
    handleAddToCart(newAmount)
  }
  function handleDecrease() {
    if (amount < 1) {
      return
    }

    const newAmount = amount - 1
    setAmount(newAmount)
    handleAddToCart(newAmount)
  }

  function handleAddToCart(targetAmount: number) {
    const productInCart: ProductInCart = { amount: targetAmount, product }
    addNewProduct(productInCart)
  }

  function handleDelete() {
    deleteProduct(product)
  }
  return (
    <ProductCardContainer>
      <div className="main">
        <img src={product.photo_url} alt="" />
        <div className="info">
          <p>{product.name}</p>
          <div className="buttons">
            <div className="amount">
              <Minus size={14} weight="bold" onClick={handleDecrease} />
              {amount}
              <Plus size={14} weight="bold" onClick={handleIncrease} />
            </div>
            <button
              className="deleteButton"
              type="button"
              onClick={handleDelete}
            >
              <Trash size={16} />
              Remover
            </button>
          </div>
        </div>
      </div>
      <footer>
        <div className="price">
          <span>R$</span>
          <span>{(product.price * amount).toFixed(2)}</span>
        </div>
      </footer>
    </ProductCardContainer>
  )
}
