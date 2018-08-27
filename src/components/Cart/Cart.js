import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromShoppingCart, updateQuantity, checkout } from '../../redux/reducers/currencyCart';
import './Cart.css'

class Cart extends Component {

  updateQuantity = (id, update, quantity) => {
    if (update === 'up') {
      quantity++
    } else if (update === 'down') {
      quantity--
    }
    this.props.updateQuantity(id, quantity)
  }
  render() {
    let total = 0
    let coinCartDisplay = this.props.shoppingCart.map((element) => {
      total += (element.price * element.quantity)
      return (
        <div>
          <h2>Coin: {element.product}</h2>
          <h4>Current Price: ${element.price}</h4>
          <button onClick={() => this.props.removeFromShoppingCart(element.id)}>Remove</button>
          <button onClick={() => this.updateQuantity(element.id, 'More', element.quantity)}>+</button>
          <button onClick={() => this.updateQuantity(element.id, 'Less', element.quantity)}>-</button>
        </div>
      )
    })
    return (
      <div>
        {coinCartDisplay[0] ? coinCartDisplay : <h1>Go buy some cryptos</h1>}
        <p>Total Purchase: ${total}</p>
        <button onClick={this.props.checkout}>Checkout</button>
        {/* When you click checkout-> redirected to stripe */}
      </div>
    );
  }
}

let mapStateToProps = state => {
  return {
    shoppingCart: state.currencyCart.shoppingCart
  }
}

export default connect(mapStateToProps, { removeFromShoppingCart, updateQuantity, checkout })(Cart);