import { createContext, ReactNode, useState } from 'react'
import { IProduct } from '../services/FakeDB'

export interface ProductInCart {
  product: IProduct
  amount: number
}

interface CartContextType {
  cart: ProductInCart[]
  totalAmount: number
  addNewProduct: (productInCart: ProductInCart) => void
  deleteProduct: (product: IProduct) => void
  resetCart: () => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<ProductInCart[]>([])
  let totalAmount = 0
  cart.forEach((itemInCart) => (totalAmount += itemInCart.amount))

  function addNewProduct(productInCart: ProductInCart) {
    const productAlreadyInCart = cart.find(
      (productAndAmount) =>
        productAndAmount.product.id === productInCart.product.id,
    )

    if (productAlreadyInCart) {
      setCart((currentState) =>
        currentState.map((productAndAmount) => {
          if (productAndAmount.product.id === productInCart.product.id) {
            productAndAmount.amount = productInCart.amount
          }
          return productAndAmount
        }),
      )
    } else {
      setCart((currentState) => [...currentState, productInCart])
    }
  }

  function deleteProduct(targetProduct: IProduct) {
    setCart((state) =>
      state.filter(
        (productInCart) => productInCart.product.id !== targetProduct.id,
      ),
    )
  }

  function resetCart() {
    setCart([])
  }

  return (
    <CartContext.Provider
      value={{ cart, totalAmount, addNewProduct, deleteProduct, resetCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
