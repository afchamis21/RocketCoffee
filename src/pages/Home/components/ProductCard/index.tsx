import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CartContext, ProductInCart } from '../../../../contexts/CartContext'
import { IProduct } from '../../../../services/FakeDB'
import { ProductCardContainer } from './styles'

interface ProductCardProps {
  product: IProduct
  amountInCart: number | undefined
}

export function ProductCard({ product, amountInCart }: ProductCardProps) {
  const [amount, setAmount] = useState(() => amountInCart || 1)
  const { addNewProduct } = useContext(CartContext)
  function handleIncrease() {
    setAmount((state) => state + 1)
  }
  function handleDecrease() {
    if (amount < 1) {
      return
    }
    setAmount((state) => state - 1)
  }

  function handleAddToCart() {
    const productInCart: ProductInCart = { amount, product }
    addNewProduct(productInCart)
  }
  return (
    <ProductCardContainer>
      <img src={product.photo_url} alt="" />
      <div className="tags">
        {product.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <div className="info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
      </div>
      <footer>
        <div className="price">
          <span>R$</span>
          <span>{product.price.toFixed(2)}</span>
        </div>
        <div className="amount">
          <Minus size={14} weight="bold" onClick={handleDecrease} />
          {amount}
          <Plus size={14} weight="bold" onClick={handleIncrease} />
        </div>
        <button type="button">
          <ShoppingCart size={22} weight="fill" onClick={handleAddToCart} />
        </button>
      </footer>
    </ProductCardContainer>
  )
}
