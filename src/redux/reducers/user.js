import axios from 'axios'

let initialState = {
  user: null
}

const LOGOUT_USER = 'LOGOUT_USER'
const LOGOUT_USER_FULFILLED = 'LOGOUT_USER_FULFILLED'

const GET_USER = 'GET_USER'
const GET_USER_FULFILLED = 'GET_USER_FULFILLED'

export default function reducer (state=initialState, action){
  
  switch(action.type){
    case LOGOUT_USER_FULFILLED:
      return {
        ...state,
        user: null
      }
    case GET_USER_FULFILLED:
    console.log(444444444, action)
      return {
        ...state,
        user: action.payload.data
      }
    default: 
      return state
  }
}

export function logout(){
  return {
    type: LOGOUT_USER,
    payload: axios.get('api/logout')
  }
}

export function getUser(){
  return {
    type: GET_USER,
    payload: axios.get('/api/currentUser')
  }
}

