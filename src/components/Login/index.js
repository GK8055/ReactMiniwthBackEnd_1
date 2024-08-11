import './index.css'
import {useState} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

const apiStatus = {
  success: 'SUCCESS',
  loading: 'LOADING',
  faliure: 'Failure',
}
const Login = props => {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [errMsg, setErrMsg] = useState(false)
  const [status, setStatus] = useState(apiStatus.loading)
  const [showPassword, setShowPassword] = useState(false)

  const createJwtTokenAndNavigateToHome = token => {
    Cookies.set('jwt_token', token, {expires: 30})
    setStatus(apiStatus.success)
    const {history} = props
    history.replace('/')
  }

  const setFailureStatus = msg => {
    setErrMsg(msg)
    setStatus(apiStatus.faliure)
  }

  const getLoginData = async () => {
    const targetUrl = 'https://apis.ccbp.in/login'
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    const url = targetUrl
    const userDetails = {username, password}
    const option = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, option)
    const data = await response.json()
    // console.log(data, 'login')
    if (response.ok) {
      createJwtTokenAndNavigateToHome(data.jwt_token)
    } else {
      setFailureStatus(data.error_msg)
    }
  }
  const onChangeUsername = event => {
    setUserName(event.target.value)
  }

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  const onChangeSubmit = event => {
    event.preventDefault()
    getLoginData()
  }

  const getPassWordElement = () => {
    if (showPassword) {
      return (
        <>
          <label className="login_label_text" htmlFor="password">
            PASSWORD
          </label>
          <input
            type="text"
            value={password}
            className="input_ele"
            id="password"
            placeholder="Password"
            onChange={onChangePassword}
          />
        </>
      )
    }
    return (
      <>
        <label className="login_label_text" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          className="input_ele"
          id="password"
          value={password}
          placeholder="Password"
          onChange={onChangePassword}
        />
      </>
    )
  }

  const onChangeShowPassword = () => {
    setShowPassword(prev => !prev)
  }
  const cookies = Cookies.get('jwt_token')
  if (cookies !== undefined) {
    return <Redirect to="/" />
  }
  return (
    <div className="login_container">
      <form className="form_container" onSubmit={onChangeSubmit}>
        <h1 className="login_title">Daily Mood Tracker</h1>
        <label className="login_label_text" htmlFor="username">
          USERNAME
        </label>
        <br />
        <input
          type="text"
          className="input_ele"
          id="username"
          placeholder="Username"
          value={username}
          onChange={onChangeUsername}
        />
        <br />

        {getPassWordElement()}
        <div className="checkbox_container">
          <input
            id="checkbox"
            type="checkbox"
            onChange={onChangeShowPassword}
            className="checkbox_style"
          />
          <label htmlFor="checkbox" className="checkbox_msg">
            Show Password
          </label>
        </div>
        <button className="login_btn" type="submit">
          Login
        </button>
        <p className="error_msg">{errMsg}</p>
      </form>
    </div>
  )
}

export default Login
