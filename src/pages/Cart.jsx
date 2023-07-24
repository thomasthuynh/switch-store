import React from 'react'
import "../scss/_cart.scss"

const Cart = () => {
  return (
    <div id="cart">
      <div className="wrapper">
        <div className="cartTitleContainer">
          <h2 className="cartTitle">Cart</h2>
        </div>

        <div className="checkout">
          <div className="checkoutHeader">
            <span className="checkoutGameHeading">Game</span>
            <span className="checkoutQuantityHeading">Quantity</span>
            <span className="checkoutTotalHeading">Price</span>
          </div>

          <div className="checkoutBody">
            <div className="checkoutItem">

              <div className="checkoutGame">
                <div className="checkoutGameImgContainer">
                  <img src="https://images.nintendolife.com/68b153f4aa78f/donkey-kong-country-tropical-freeze-cover.cover_300x.jpg" alt="" className="checkoutGameImg"/>
                </div>

                <div className="checkoutGameInfo">
                  <span className="checkoutGameTitle">Donkey Kong</span>
                  <span className="checkoutGamePrice">$10.00</span>
                  <button className="checkoutGameRemove">Remove</button>
                </div>
              </div>

              <div className="checkoutQuantity">
                <input type="number" min={0} max={99} className="checkoutInput"/>
              </div>

              <div className="checkoutTotal">$10.00</div>

            </div>
          </div>

        <div className="totalContainer">
          <div className="total">
            <div className="itemTotal subTotal">
              <span>Subtotal</span>
              <span>$9.00</span>
            </div>

            <div className="itemTotal taxTotal">
              <span>Tax</span>
              <span>$1.00</span>
            </div>

            <div className="itemTotal priceTotal">
              <span>Total</span>
              <span>$10.00</span>
            </div>

            <button className="checkoutButton btn">
              Proceed to Checkout
            </button>

          </div>
        </div>

        </div>
      </div>
    </div>
  )
}

export default Cart