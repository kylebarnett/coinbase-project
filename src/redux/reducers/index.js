import { combineReducer, combineReducers } from 'redux';
import user from './user';
import currencyCart from './currencyCart';

export default combineReducers({ user, currencyCart });