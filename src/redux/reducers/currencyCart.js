const initialState = {
  currency: [],
  shoppingCart: []
}

const GET_ALL_CURRENCIES = 'GET_ALL_CURRENCIES'
const GET_ALL_CURRENCIES_PENDING = 'GET_ALL_CURRENCIES_PENDING'
const GET_ALL_CURRENCIES_FULFILLED = 'GET_ALL_CURRENCIES_FULFILLED'
const ADD_TO_SHOPPING_CART = 'ADD_TO_SHOPPING_CART'
const REMOVE_FROM_SHOPPING_CART = 'REMOVE_FROM_SHOPPING_CART'



export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_CURRENCIES_PENDING:
      return {
        ...state,
        loading: true
      }
    case GET_ALL_CURRENCIES_FULFILLED:
      return {
        ...state,
        loading: false,
        currency: action.payload
      }
    case ADD_TO_SHOPPING_CART:
      return Object.assign({}, state, {shoppingCart: [...state.shoppingCart, action.payload]})
    case REMOVE_FROM_SHOPPING_CART:
      let newArray = state.shoppingCart.slice();
      newArray.splice(action.index, 1);
      return {
        ...state,
        shoppingCart: newArray
      }
    default:
      return state
  }
}

export function addToShoppingCart(currency) {
  return {
    type: ADD_TO_SHOPPING_CART,
    payload: currency
  }
}

export function removeFromShoppingCart(currencyIndex) {
  return {
    type: REMOVE_FROM_SHOPPING_CART,
    payload: currencyIndex
  }
}