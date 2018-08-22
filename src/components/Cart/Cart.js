import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromShoppingCart } from '../../redux/reducers/currencyCart'; 

class Cart extends Component {
  render() { 
    let coinCartDisplay = this.props.shoppingCart.map((element, index) => {
      return (
        <div>
          <h2>{ element.coin }</h2>
          <h4>{ element.price }</h4>
            <button onClick={() => this.props.removeFromShoppingCart(index)}>Remove</button>
        </div>
      )
    })
    return (
      <div>
        {coinCartDisplay[0] ? coinCartDisplay: <h1>Go buy some cryptos</h1>}
      </div>
    );
  }
}

let mapStateToProps = state => {
  return {
    shoppingCart: state.currencyCart.shoppingCart
  }
}
 
export default connect(mapStateToProps, { removeFromShoppingCart })(Cart);