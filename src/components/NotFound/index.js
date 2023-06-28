import {Redirect} from 'react-router-dom'

import './index.css'

const NotFound = () => {
  const onClickHome = () => {
    return <Redirect to="/" />
  }

  return (
    <div className="not-found-container">
      <img src="" alt="" className="" />
      <h1 className="not-found-heading">PAGE NOT FOUND</h1>
      <p className="not-found-description">
        we're sorry, the page you requested could not be found
        <br />
        Please go back to the homepage
      </p>
      <button className="home-button" type="button" onClick={onClickHome}>
        Home
      </button>
    </div>
  )
}

export default withRouter(NotFound)
