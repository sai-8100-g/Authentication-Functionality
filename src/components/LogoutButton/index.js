import {withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

const Logout = props => {
  const {history} = props
  const onClickToLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <div className="buttonCard">
      <button type="button" onClick={onClickToLogout}>
        Logout
      </button>
    </div>
  )
}

export default withRouter(Logout)
