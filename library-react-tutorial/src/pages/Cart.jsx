import React from "react";
import EmptyCart from "../assets/emptycart.png";
import { Link } from 'react-router-dom';

const Cart = ({ cart, changeQuantity, removeFromCart }) => {
    const total = () => {
        return cart.reduce((sum, book) => sum + (book.salePrice || book.originalPrice) * book.quantity, 0);
    }
    
    const subTotal = () => {
        return cart.reduce((sum, book) => sum + (book.salePrice || book.originalPrice) * book.quantity, 0);
    }

    const tax = subTotal() * 0.1;

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">

            <div className="book__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>

            <div className="cart">

              {/* Cart Header */}
              <div className="cart__header">
                <span className="cart__book">
                  Book
                </span>

                <span className="cart__quantity">
                  Quantity
                </span>

                <span className="cart__total">
                  Price
                </span>
              </div>

              {/* Cart Items */}
              <div className="cart__body">
                {cart.map((book) => (
                  <div
                    className="cart__item"
                    key={book.id}
                  >

                    {/* Book */}
                    <div className="cart__book">

                      <img
                        src={book.url}
                        className="cart__book--img"
                        alt={book.title}
                      />

                      <div className="cart__book--info">

                        <span className="cart__book--title">
                          {book.title}
                        </span>

                        <span className="cart__book--price">
                          ${(book.salePrice || book.originalPrice).toFixed(2)}
                        </span>

                        <button className="cart__book--remove" onClick={() => removeFromCart(book)}>
                            Remove
                        </button>

                      </div>
                    </div>

                    {/* Quantity */}
                    <div className="cart__quantity">
                      <input
                        type="number"
                        min={0}
                        max={99}
                        className="cart__input"
                        value={book.quantity}
                        onChange={(event) => changeQuantity(book, event.target.value)}
                      />
                    </div>

                    {/* Total */}
                    <div className="cart__total">
                      ${((book.salePrice || book.originalPrice) * (book.quantity)).toFixed(2)}
                    </div>

                  </div>
                ))}
              </div>
              {
                cart.length === 0 &&  <div className="cart__empty">
                <img src={EmptyCart} alt="" className="cart__empty--img" />
                <Link to="/books">
                <button className="btn">Browse Books</button>
                </Link>
              </div>
              }
              
            </div>

            {/* Cart Totals */}
            {cart.length > 0 && <div className="total">

              <div className="total__item total__sub-total">
                <span>Subtotal</span>
                <span>${(total()*.9).toFixed(2)}</span>
              </div>

              <div className="total__item total__tax">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>

              <div className="total__item total__price">
                <span>Total</span>
                <span>${(total() + tax).toFixed(2)}</span>
              </div>

              <button
                className="btn btn__checkout no-cursor"
                onClick={() =>
                  alert("Haven't implemented checkout yet!")
                }
              >
                Proceed to checkout
              </button>

            </div>}

          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;