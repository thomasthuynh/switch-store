import React from 'react'
import { Link } from 'react-router-dom'
import "../scss/_cart.scss"
import UndrawEmptyCart from "../assets/UndrawEmptyCart.svg"

const Cart = ({ cart, changeQuantity, removeItem }) => {

  const subTotal = () => {
    let price = 0;
    cart.forEach((item) => {
      price += +((item.salePrice || item.originalPrice) * item.quantity);
    })
    return price;
  }

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
            {cart.map((game) => {
              return (
                <div key={game.id} className="checkoutItem">
                  <div className="checkoutGame">
                    <div className="checkoutGameImgContainer">
                      <img
                        src={game.url}
                        alt=""
                        className="checkoutGameImg"
                      />
                    </div>

                    <div className="checkoutGameInfo">
                      <span className="checkoutGameTitle">{game.title}</span>
                      <span className="checkoutGamePrice">${game.salePrice || game.originalPrice}</span>
                      <button onClick={() => removeItem(game)} className="checkoutGameRemove">Remove</button>
                    </div>
                  </div>

                  <div className="checkoutQuantity">
                    <input
                      type="number"
                      min={1}
                      max={99}
                      onChange={(e) => changeQuantity(game, e.target.value)}
                      value={game.quantity}
                      className="checkoutInput"
                    />
                  </div>

                  <div className="checkoutTotal">${(game.quantity * (game.salePrice || game.originalPrice)).toFixed(2)}</div>
                </div>
              );
            })}
          </div>

            {
              cart.length === 0 && (
                <div className="emptyCheckout">
                <figure className="emptyCheckoutImgWrapper">
                  <img src={UndrawEmptyCart} alt="" />
                </figure>
                <h2>You don't have any games in your cart!</h2>
                <Link to="/games">
                  <button className="btn">Browse Games</button>
                </Link>
              </div>
              )
            }


          {
            cart.length > 0 && (
              <div className="totalContainer">
              <div className="total">
                <div className="itemTotal subTotal">
                  <span>Subtotal</span>
                  <span>${(subTotal().toFixed(2))}</span>
                </div>
  
                <div className="itemTotal taxTotal">
                  <span>Tax</span>
                  <span>${(subTotal() * 0.1).toFixed(2)}</span>
                </div>
  
                <div className="itemTotal priceTotal">
                  <span>Total</span>
                  <span>${(subTotal() * 1.1).toFixed(2)}</span>
                </div>
  
                <button className="checkoutButton btn">
                  Proceed to Checkout
                </button>
              </div>
            </div>
            )
          }

        </div>
      </div>
    </div>
  );
}

export default Cart