import './index.css'
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(each => {
        total += each.price * each.quantity
      })
      const itemsCount = cartList.length

      return (
        <div className="container">
          <div className="summary-container">
            <h1 className="order-total">
              Order Total: <span className="total-price">Rs {total}/-</span>{' '}
            </h1>
            <p className="items-count">{itemsCount} Items in cart</p>
            <button type="button" className="checkout-btn">
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
