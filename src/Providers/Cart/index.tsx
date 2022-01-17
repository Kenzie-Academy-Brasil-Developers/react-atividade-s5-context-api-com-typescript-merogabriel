import { ReactNode } from 'react'
import { CartProvider } from './CartProvider'

interface ProviderProps {
  children: ReactNode
}

const Providers = ({ children }: ProviderProps) => {
  return (
    <>
      <CartProvider>{children}</CartProvider>
    </>
  )
}

export default Providers
