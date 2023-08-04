import { BsCart3 } from 'react-icons/bs'

import '../../../styles/Cart.css'

const Cart = () => {
  return (
    <div className='add-to-cart'>
      <div className='cart-left'>
          <p className='cart-text'>add to cart</p>
      </div>
      <div className='cart-right'>
          <BsCart3 className='cart-logo'/>
      </div>
    </div>
  )
}

export default Cart
