import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { ToastContainer, ToastStore } from 'react-toasts';
import { removeFromShoppingCart, updateQuantity, checkout, getCartItems } from '../../redux/reducers/currencyCart';
import PAYMENT_SERVER_URL from './server';
import './Cart.css'


const CURRENCY = 'USD';

const fromUSDToCent = amount => amount * 100

const successPayment = data => {
  alert('Payment Successful')
}

const errorPayment = data => {
  alert('Payment Error')
}

const onToken = (amount, description) => token =>
  axios.post(PAYMENT_SERVER_URL,
    {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromUSDToCent(amount)
    })
    .then(() => {
      successPayment()
      this.props.checkout()
    })
    .catch(errorPayment)

const Checkout = ({ name, description, amount }) =>
    <StripeCheckout
      name={name}
      description={description}
      amount={fromUSDToCent(amount)}
      token={onToken(amount, description)}
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
            <h2>Coin: {element.product}</h2>
            <h4>Current Price: ${element.price}</h4>
            <p>Quantity: {element.quantity}</p>
            <button onClick={() => {
              this.props.removeFromShoppingCart(element.id); this.successfullRemove(element.product)
            }}>Remove</button>
            <button onClick={() => this.updateQuantity(element.id, 'More', element.quantity)}>+</button>
            <button onClick={() => this.updateQuantity(element.id, 'Less', element.quantity)}>-</button>
          </div>
        </div>
      )
    })
    return (
      <div>
        
        {coinCartDisplay[0] ? coinCartDisplay : <h1>Go buy some cryptos</h1>}
        <p>Total Purchase: ${total}</p>
        {Checkout({name: "Coinbase", description: "A marketplace for cryptos.", amount: {total}})}
        <a href="/" >Go home</a>
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