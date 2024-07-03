import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="headerCard">
    <ul>
      <li>
        <Link className="navLink" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="navLink" to="/about">
          About
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
