import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EmptyCart from "../assets/empty_cart.svg";

const Cart = ({ cart, changeQuantity, removeItem }) => {
  const [code, setCode] = useState("");
  const [discount, setDiscount] = useState(false);

  const total = () => {
    let price = 0;
    cart.forEach((item) => {
      price += +(item.salePrice || item.originalPrice) * item.quantity;
    });
    return price;
  };

  function onDiscount() {
    if (code === "DISCOUNT") {
      setDiscount(true); // 15% discount code.
    }
    else{
      setDiscount(false)
    }
  }

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>
            <div className="cart">
              <div className="cart__header">
                <span className="cart__book">Book</span>
                <span className="cart__quantity">Quantity</span>
                <span className="cart__total">Price</span>
              </div>
              <div className="cart__body">
                {cart.map((book) => {
                  return (
                    <div className="cart__item" key={book.id}>
                      <div className="cart__book">
                        <img
                          src={book.url}
                          alt=""
                          className="cart__book--img"
                        />
                        <div className="cart__book--info">
                          <span className="cart__book--title">
                            {book.title}
                          </span>
                          <span className="cart__book--price">
                            ${(book.salePrice || book.originalPrice).toFixed(2)}
                          </span>
                          <button
                            className="cart__book--remove"
                            onClick={() => removeItem(book)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                      <div className="cart__quantity">
                        <input
                          type="number"
                          min={0}
                          max={99}
                          className="cart__input"
                          value={book.quantity}
                          onChange={(event) =>
                            changeQuantity(book, event.target.value)
                          }
                        />
                      </div>
                      <div className="cart__total">
                        $
                        {(
                          (book.salePrice || book.originalPrice) * book.quantity
                        ).toFixed(2)}
                      </div>
                    </div>
                  );
                })}
              </div>
              {cart.length === 0 && (
                <div className="cart__empty">
                  <img src={EmptyCart} alt="" className="cart__empty--img" />
                  <h2>You don't have any books in your cart</h2>
                  <Link to="/books">
                    <button className="btn">Browse books</button>
                  </Link>
                </div>
              )}
            </div>
            {cart.length > 0 && (
              <div className="total">
                <div className="total__item total__discount">
                  <span>Coupon:</span>
                  <input
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    onKeyPress={(event) =>
                      event.key === "Enter" && onDiscount()
                    }
                    className="discount__input"
                    type="text"
                    placeholder="Coupon code."
                  />
                </div>
                <div className="total__item">
                  <span>Subtotal</span>
                  {discount === true ? (
                    <span>${(total() * 0.75).toFixed(2)}</span>
                  ) : (
                    <span>${(total() * 0.9).toFixed(2)}</span>
                  )}
                </div>
                <div className="total__item total__tax">
                  <span>Tax</span>

                  <span>${(total() * 0.1).toFixed(2)}</span>
                </div>
                <div className="total__item total__price">
                  <span>Price</span>
                  {discount === true ? (
                    <span>${(total() * 0.85).toFixed(2)}</span>
                  ) : (
                    <span>${total().toFixed(2)}</span>
                  )}
                </div>
                <button
                  className="btn btn__checkout no-cursor"
                  onClick={() => alert(`Haven't got around to doing this :/`)}
                >
                  Proceed to checkout
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
