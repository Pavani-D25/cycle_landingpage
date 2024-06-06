// components/ShoppingCart.js
import React, { useState } from 'react';
import '../style/ShoppingCart.css';
import '../assets/models/1..jpg'

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const products = [
    { id: 1, category: 'road', price: 2850, title: 'Cano One', img: '1..jpg' },
    { id: 2, category: 'bmx', price: 1620, title: 'Predator', img: 'im12-min.png' },
    { id: 3, category: 'mountain', price: 780, title: 'Canyon', img: 'im2-min.png' },
    // Add the rest of the products here...
  ];

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    setTotalPrice(totalPrice + product.price);
  };

  const removeFromCart = (product) => {
    const newCartItems = cartItems.filter(item => item.id !== product.id);
    setCartItems(newCartItems);
    setTotalPrice(totalPrice - product.price);
  };

  return (
    <div className="app-container pt-40">
      <div className="top-cart">
        <div className="top-cart__info">
          <div className="top-cart-info__goods">
            {cartItems.map(item => (
              <div key={item.id} className="product-box__item--small" value={item.price}>
                <h3 className="product-box__title">{item.title}</h3>
                <div className="product-box__img">
                  <img className="img-fluid" src={`assets/${item.img}`} alt={item.title} />
                </div>
                <div className="product-box__meta">
                  <p>{item.price} $</p>
                  <button className="product-box__btn--delete" onClick={() => removeFromCart(item)}>X</button>
                </div>
              </div>
            ))}
          </div>
          <button className="btn-check">Order
            <span className="top-cart-info__item">
              <span className="red-info">{totalPrice}</span> $
            </span>
          </button>
        </div>
      </div>

      <header className="header">
        <div className="container">
          <h1 className="header__item">Om CBIKES-SHOP</h1>
        </div>
      </header>

      <div className="wrap">
        <section className="container">
          <div className="filter-box">
            <div className="select-box">
              <div className="select-control">
                <input type="radio" name="Category" data-value-category="all" id="radio-all" className="category-control" defaultChecked />
                <label className="radio-control" htmlFor="radio-all">All</label><br />
                <input type="radio" name="Category" data-value-category="road" id="radio-road" className="category-control" />
                <label className="radio-control" htmlFor="radio-road">Road</label><br />
                <input type="radio" name="Category" data-value-category="mountain" id="radio-mountain" className="category-control" />
                <label className="radio-control" htmlFor="radio-mountain">Mountain</label><br />
                <input type="radio" name="Category" data-value-category="bmx" id="radio-bmx" className="category-control" />
                <label className="radio-control" htmlFor="radio-bmx">BMX</label><br />
              </div>
            </div>
            <div className="price-select-box">
              <input type="range" min="0" max="3870" value="2850" className="price-control" data-filter='price' />
              <span className="price-value">price to <span className="price-value__item">3870</span>$</span>
            </div>
          </div>

          <div className="products-box grid-box">
            {products.map(product => (
              <div key={product.id} data-category={product.category} value={product.price} className="product-box__item">
                <h3 className="product-box__title">{product.title}</h3>
                <div className="product-box__img">
                  <img className="img-fluid" src={`assets/${product.img}`} alt={product.title} />
                </div>
                <div className="product-box__meta">
                  <p>{product.price} $</p>
                  <button className="product-box__btn" onClick={() => addToCart(product)}>+</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <footer className="bottom-footer bg-beetroot py-1">
        <div className="container">
        </div>
      </footer>
    </div>
  );
};

export default ShoppingCart;
