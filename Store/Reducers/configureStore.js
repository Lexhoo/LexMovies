import { createStore } from 'redux'
import toggleFavorite from './favoriteReducers'

export default createStore(toggleFavorite)