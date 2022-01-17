import './App.css'
import { ProductList } from './components/ProductList'
import { CartList } from './components/CartList'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <ProductList />
        <CartList />
      </header>
    </div>
  )
}

export default App
