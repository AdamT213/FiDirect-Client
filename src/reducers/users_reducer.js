export function usersReducer(state = {currentUser: {}, user_id: null}, action) {
  switch (action.type) {

    case 'SIGN_UP_USER':
      window.localStorage.setItem('id', 'action.id')
      return Object.assign({}, state, {currentUser: {id: action.id, email: action.email, password: action.password }, 
      user_id: window.localStorage.getItem('id') }) 
    case 'SIGN_IN_USER': 
      window.sessionStorage.setItem('id', 'action.id')
      return Object.assign({}, state, {currentUser: {id: action.payload.id, email: action.payload.email, password: action.payload.password }, 
      user_id: window.sessionStorage.getItem('id') })
    default:
      return state
  }
}
