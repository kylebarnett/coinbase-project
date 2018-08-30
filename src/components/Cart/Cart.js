import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { ToastContainer, ToastStore } from 'react-toasts';
import { removeFromShoppingCart, updateQuantity, checkout, getCartItems } from '../../redux/reducers/currencyCart';
import './Cart.css'

const CURRENCY = 'USD';

const fromUSDToCent = amount => amount * 100

const successPayment = data => {
  alert('Payment Successful')
}

const errorPayment = data => {
  alert('Payment Error')
}

const onToken = (amount, description, checkout) => token =>{
  axios.post(process.env.REACT_APP_PAYMENT_SERVER_URL,
    {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromUSDToCent(amount)
    })
    .then(() => {
      successPayment()
      checkout()
    })
    .catch(err => errorPayment(err))
  }
const Checkout = ({ name, description, amount, checkout }) =>
  <StripeCheckout
    name={name}
    description={description}
    amount={fromUSDToCent(amount)}
    token={onToken(amount, description, checkout)}
    currency={CURRENCY}
    stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE}
  />

class Cart extends Component {

  componentDidMount() {
    this.props.getCartItems()
  }

  updateQuantity = (id, update, quantity) => {
    if (update === 'More') {
      quantity++
    } else if (update === 'Less') {
      quantity--
    }
    this.props.updateQuantity(id, quantity)
  }

  successfullRemove = (name) => {
    if (this.props.removeFromShoppingCart) {
      ToastStore.success('Successfully Removed ' + name + ' from Shopping Cart')
    }
  }
  render() {
    let total = 0
    let coinCartDisplay = this.props.shoppingCart.map((element) => {
      total += (element.price * element.quantity)
      return (
        <div>
          <ToastContainer store={ToastStore} position={ToastContainer.POSITION.TOP_RIGHT} />
          <div className="cart-main-container">
            <h2 className="cart-coin">{element.product}</h2>
            <h4 className="cart-price">Current Price: ${element.price}</h4>
            <p className="cart-quantity">Quantity: {element.quantity}</p>
            <div className="cart-buttons">
              <button className="cart-remove" onClick={() => {
                this.props.removeFromShoppingCart(element.id); this.successfullRemove(element.product)
              }}>Remove</button>
              <button className="cart-plus" onClick={() => this.updateQuantity(element.id, 'More', element.quantity)}>+</button>
              <button className="cart-minus" onClick={() => this.updateQuantity(element.id, 'Less', element.quantity)}>-</button>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div>
        <div className="cart-total-container">
          <h1 className="cart-coinbase"><a style={{ textDecoration: 'none', color: 'rbg(15, 98, 189)' }} href="/">Coinbase</a></h1>
          {coinCartDisplay[0] ? coinCartDisplay : <h1 className="cart-buy">Go buy some cryptos!</h1>}
          <p>Total Purchase: ${total}</p>
          <div className="cart-stripe">
            {Checkout({ name: "Coinbase", description: "A marketplace for cryptos.", amount: total, checkout: this.props.checkout })}
          </div>
        </div>
      </div>
    );
  }
}

let mapStateToProps = state => {
  return {
    shoppingCart: state.currencyCart.shoppingCart
  }
}

export default connect(mapStateToProps, { removeFromShoppingCart, updateQuantity, checkout, getCartItems })(Cart);