import React from 'react'
import { Container, List } from './style'
import { useCart } from '../../Providers/Cart/CartProvider'

export const CartList = () => {
  const { cart, deleteProduct } = useCart()

  return (
    <Container>
      <span>Carrinho:</span>
      <List>
        {cart.map((product) => (
          <div key={Math.random()}>
            <img src={product.image} alt='img' />
            <p>{product.title}</p>
            <p>R$ {product.price}</p>
            <button onClick={() => deleteProduct(product)}>
              Remover do carrinho
            </button>
          </div>
        ))}
      </List>
    </Container>
  )
}
