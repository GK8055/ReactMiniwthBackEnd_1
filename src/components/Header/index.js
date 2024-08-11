import './index.css'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

const Header = props => {
  const onChangeLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <nav className="header_container">
      <h1 className="title">Daily Mood Tracker</h1>
      <div className="links_container">
        <Link to="/" className="link_text link_style">
          Home
        </Link>
        <Link to="/reports" className="link_text link_style">
          Reports
        </Link>
        <button className="logout_btn" type="button" onClick={onChangeLogout}>
          Logout
        </button>
      </div>
    </nav>
  )
}

export default withRouter(Header)
