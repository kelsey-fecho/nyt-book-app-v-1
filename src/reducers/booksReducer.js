export default function booksReducer(state = {books: []}, action) {
 switch(action.type) {

   case 'INCREASE_COUNT':
     return state.books.concat(state.books.length + 1);

   default:
     return state;
 }
}
