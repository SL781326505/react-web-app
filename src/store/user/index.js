const AUTH_SUCCESS = 'AUTH_SUCCESS'
const LOGOUT = 'LOGOUT'

const initState = {
  user: '',
  isAuth: window.localStorage.getItem('isAuth') ? window.localStorage.getItem('isAuth') : 'no',
}

// reducer
export function user(state = initState, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return { ...initState, ...action.payload, isAuth: 'yes' }
    case LOGOUT:
      return { ...initState, isAuth: 'logout' }
    default:
      return state
  }
}

// action
function authSuccess(data) {
  return { type: AUTH_SUCCESS, payload: data }
}

function logout() {
  return { type: LOGOUT }
}

export function handleLogin({ user }) {
  return dispatch => {
    dispatch(authSuccess({ user }))
    window.localStorage.setItem('isAuth', 'yes')
  }
}

export function handleLogout() {
  return dispatch => {
    dispatch(logout())
    window.localStorage.removeItem('isAuth')
  }
}
