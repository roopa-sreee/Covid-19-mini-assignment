import {Link} from 'react-router-dom'
import {FaAngleRight} from 'react-icons/fa'

const SearchState = props => {
  const {stateName, stateCode} = props

  return (
    <>
      <li>
        <p className="state-name">{stateName}</p>
        <div className="arrow-button-container">
          <p className="state-code">{stateCode}</p>
          <Link to={`/state/${stateCode}`}>
            <button type="button">
              <FaAngleRight />
            </button>
          </Link>
        </div>
      </li>
    </>
  )
}

export default SearchState
