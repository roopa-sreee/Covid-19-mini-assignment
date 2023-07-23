import {Link, withRouter} from 'react-router-dom'
import {AiFillCloseCircle} from 'react-icons/ai'
import {Component} from 'react'

import './index.css'

class Header extends Component {
  state = {
    hamburgermenuClicked: false,
  }

  onClickHamburgermenu = () => {
    const {hamburgermenuClicked} = this.state
    this.setState({hamburgermenuClicked: !hamburgermenuClicked})
  }

  onClickCloseButton = () => {
    this.setState({hamburgermenuClicked: false})
  }

  render() {
    const {hamburgermenuClicked} = this.state
    const {match} = this.props
    const {path} = match
    const homeClassName = path === '/' ? 'link-name highlight' : 'link-name'

    const aboutClassName =
      path === '/about' ? 'link-name highlight' : 'link-name'

    return (
      <>
        <ul className="navbar">
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

          <button
            className="hamburger-menu"
            type="button"
            onClick={this.onClickHamburgermenu}
          >
            <img
              src="https://res.cloudinary.com/dfxl8sk2x/image/upload/v1688279982/add-to-queue_1_rlvglc.png"
              className="hamburger-menu-image"
              alt="hamburger menu"
            />
          </button>
        </ul>
        {hamburgermenuClicked && (
          <div className="small-device-nav-options-container">
            <ul className="small-device-header-options">
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
              className="close-button"
              type="button"
              onClick={this.onClickCloseButton}
            >
              <AiFillCloseCircle />
            </button>
          </div>
        )}
      </>
    )
  }
}

export default withRouter(Header)
