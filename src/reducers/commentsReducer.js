export default function commentsReducer(state={comments:[]}, action) {
  switch(action.type){
    case 'ADD_COMMENT':
      return {
        ...state,
        comments: state.comments.concat(action.payload)
      }

    default:
      return state;
  }
}
