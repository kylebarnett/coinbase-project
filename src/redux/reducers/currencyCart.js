import axios from 'axios';

const initialState = {
  currency: [],
  shoppingCart: []
}

const FULFILLED = '_FULFILLED'
const GET_ALL_CURRENCIES = 'GET_ALL_CURRENCIES'
const GET_ALL_CURRENCIES_PENDING = 'GET_ALL_CURRENCIES_PENDING'
const GET_ALL_CURRENCIES_FULFILLED = 'GET_ALL_CURRENCIES_FULFILLED'
const GET_CART_ITEMS = 'GET_CART_ITEMS'
const ADD_TO_SHOPPING_CART = 'ADD_TO_SHOPPING_CART'
const UPDATE_QUANTITY = 'UPDATE_QUANTITY'
const REMOVE_FROM_SHOPPING_CART = 'REMOVE_FROM_SHOPPING_CART'
const CHECKOUT = 'CHECKOUT'
const MOVE_TO_ORDERS = 'MOVE_TO_ORDERS'



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
    case GET_CART_ITEMS + FULFILLED:
      return {
        ...state,
        shoppingCart: action.payload
      }
    case ADD_TO_SHOPPING_CART + FULFILLED:
      return {
        ...state,
        shoppingCart: action.payload
      }
    case UPDATE_QUANTITY + FULFILLED:
      return {
        ...state,
        shoppingCart: action.payload
      }
    case REMOVE_FROM_SHOPPING_CART + FULFILLED:
      let newArray = state.shoppingCart.slice();
      newArray.splice(action.index, 1);
      return {
        ...state,
        shoppingCart: newArray
      }
    case CHECKOUT + FULFILLED:
      return {
        ...state,
        shoppingCart: []
      }
    case MOVE_TO_ORDERS + FULFILLED:
      return {
        ...state,
        shoppingCart: action.payload
      }
    default:
      return state
  }
}

export function getCartItems(){
  let cart = axios.get('/api/cart').then(results => {
    return results.data
  })
  return {
    type: GET_CART_ITEMS,
    payload: cart
  }
}

export function addToShoppingCart(product, price, quantity) {
  let added = axios.post(`/api/cart`, { product, price, quantity }).then(results => {
    return results.data
  })
  return {
    type: ADD_TO_SHOPPING_CART,
    payload: added
  }
}

export function removeFromShoppingCart(id) {
  let cart = axios.delete(`/api/cart/${id}`).then(results => {
    return results.data
  })
  return {
    type: REMOVE_FROM_SHOPPING_CART,
    payload: cart
  }
}

export function updateQuantity(id, quantity) {
  let cart = axios.put(`/api/cart/${id}?quantity=${quantity}`).then(results => {
    return results.data
  })
  return {
    type: UPDATE_QUANTITY,
    payload: cart
  }
}

export function checkout() {
  let checkout = axios.delete('/api/checkout').then(results => {
    return results.data
  })
  return {
    type: CHECKOUT,
    payload: checkout
  }
}

export function moveToOrders(){
  let orders = axios.delete('/api/orders').then(results => {
    return results.data
  })
  return {
    type: MOVE_TO_ORDERS,
    payload: orders
  }
}