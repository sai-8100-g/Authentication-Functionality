import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

class Login extends Component {
  onClickToLogin = () => {
    const {history} = this.props
    const jwtToken = 'my_jwt_token'
    Cookies.set('jwt_token', jwtToken, {expires: 1})
    history.replace('/')
  }

  render() {
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="LoginCard">
        <h1>Please Login</h1>
        <div>
          <button type="button" onClick={this.onClickToLogin}>
            Login with Sample Creds
          </button>
        </div>
      </div>
    )
  }
}

export default Login
