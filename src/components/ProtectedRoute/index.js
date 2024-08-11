import Cookies from 'js-cookie'
import {Route, Redirect} from 'react-router-dom'

const ProtectedRoute = props => {
  const cookieFound = Cookies.get('jwttoken')
  if (cookieFound !== undefined) {
    return <Route {...props} />
  }
  return <Redirect to="/login" />
}

export default ProtectedRoute
