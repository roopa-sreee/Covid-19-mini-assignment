import {Link, withRouter} from 'react-router-dom'
import GiHamburgerMenu from 'react-icons/gi'
import Popup from 'reactjs-popup'
import IoIosCloseCircle from 'react-icons/io'
import {Component} from 'react'

import './index.css'

class Header extends Component {
  render() {
    const {match} = this.props
    const {path} = match
    const homeClassName = path === '/' ? 'link-name highlight' : 'link-name'

    const aboutClassName =
      path === '/about' ? 'link-name highlight' : 'link-name'

    return (
      <>
        <nav className="navbar">
          <Link to="/" className="link-item">
            <p className="app-name">
              COVID19
              <span className="span-logo-text">INDIA</span>
            </p>
          </Link>
          <ul className="nav-options-large-device-list">
            <Link to="/" className="link-item">
              <li key="1">
                <button type="button" className={homeClassName}>
                  Home
                </button>
              </li>
            </Link>
            <Link to="/about" className="link-item">
              <li key="2">
                <button type="button" className={aboutClassName}>
                  About
                </button>
              </li>
            </Link>
          </ul>

          <div className="popup-container">
            <Popup
              modal
              trigger={
                <button type="button" className="hamburger-menu-button">
                  <GiHamburgerMenu className="hamburger-menu-icon" />
                </button>
              }
            >
              {close => (
                <>
                  <div className="popup-content">
                    <ul className="nav-options-small-device">
                      <Link to="/" className="link-item">
                        <li key="1">
                          <button type="button" className={homeClassName}>
                            Home
                          </button>
                        </li>
                      </Link>
                      <Link to="/about" className="link-item">
                        <li key="2">
                          <button type="button" className={aboutClassName}>
                            About
                          </button>
                        </li>
                      </Link>
                    </ul>
                    <button
                      type="button"
                      className="close-button"
                      onClick={() => close()}
                    >
                      <IoIosCloseCircle />
                    </button>
                  </div>
                </>
              )}
            </Popup>
          </div>
        </nav>
      </>
    )
  }
}

export default withRouter(Header)
