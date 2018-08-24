import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    let coinCartDisplay = this.props.shoppingCart.map((element, index) => {
      console.log(element)
      return (
        <div>
          <h2>Coin: {element.product}</h2>
          <h4>Current Price: ${element.price}</h4>
          <button onClick={() => this.props.removeFromShoppingCart(index)}>Remove</button>
          <button onClick={() => this.updateQuantity(element.id, 'More', element.quantity)}>+</button>
          <button onClick={() => this.updateQuantity(element.id, 'Less', element.quantity)}>-</button>
        </div>
      )
    })
    return (
      <div>
        {coinCartDisplay[0] ? coinCartDisplay : <h1>Go buy some cryptos</h1>}
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