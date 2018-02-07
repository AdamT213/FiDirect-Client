export function usersReducer(state = {currentUser: {}}, action) {
  switch (action.type) {

    case 'SIGN_UP_USER':
      return Object.assign({}, state, {currentUser: {id: action.id, email: action.email, password: action.password }})
    case 'SIGN_IN_USER':
      return Object.assign({}, state, {currentUser: {id: action.id, email: action.email, password: action.password }})
    default:
      return state
  }
}
