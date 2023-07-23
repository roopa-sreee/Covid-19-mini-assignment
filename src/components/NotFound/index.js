import {withRouter} from 'react-router-dom'
import {Component} from 'react'

import './index.css'

class NotFound extends Component {
  onClickHome = () => {
    const {history} = this.props
    history.replace('/')
  }

  render() {
    return (
      <div className="not-found-container">
        <img
          src="https://res.cloudinary.com/dfxl8sk2x/image/upload/v1687480512/Group_7484_iquiqm.png"
          alt="not-found-pic"
          className="not-found-image"
        />
        <h1 className="not-found-heading">PAGE NOT FOUND</h1>
        <p className="not-found-description">
          we are sorry, the page you requested could not be found
          <br />
          Please go back to the homepage
        </p>
        <button
          className="home-button"
          type="button"
          onClick={this.onClickHome}
        >
          Home
        </button>
      </div>
    )
  }
}
export default withRouter(NotFound)
