import { createContext, ReactNode, useContext, useState } from 'react'

const CartContext = createContext<CartProviderData>({} as CartProviderData)

interface CartProviderProps {
  children: ReactNode
}

interface Product {
  id: number
  title: string
  description: string
  price: number
  image: string
}

interface CartProviderData {
  cart: Product[]
  addProduct: (product: Product) => void
  deleteProduct: (product: Product) => void
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<Product[]>([])

  const addProduct = (product: Product): void => {
    setCart([...cart, product])
  }

  const deleteProduct = (productToBeDeleted: Product): void => {
    const newCart = cart.filter(
      (product) => product.title !== productToBeDeleted.title
    )
    setCart(newCart)
  }
  return (
    <CartContext.Provider value={{ cart, addProduct, deleteProduct }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
