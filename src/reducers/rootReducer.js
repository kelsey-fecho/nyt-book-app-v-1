import { combineReducers } from 'redux';
import booksReducer from './booksReducer'
import commentsReducer from './commentsReducer'

const rootReducer = combineReducers({
  books: booksReducer,
  comments: commentsReducer
})

export default rootReducer;
