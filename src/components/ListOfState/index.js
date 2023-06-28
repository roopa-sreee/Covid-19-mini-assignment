import {Link} from 'react-router-dom'
import './index.css'

const ListOfState = props => {
  const {stateList} = props

  const {
    stateCode,
    stateName,
    listOfConfirmed,
    listOfRecovered,
    listOfOther,
    listOfDeceased,
    listOfPopulation,
  } = stateList

  const active =
    listOfConfirmed - listOfDeceased - listOfRecovered - listOfOther

  return (
    <li className="list-state-details">
      <Link to={`/state/${stateCode}`} className="link-class">
        <p className="state-name">{stateName}</p>
      </Link>
      <p className="state-confirmed">{listOfConfirmed}</p>
      <p className="state-active">{active}</p>
      <p className="state-recovered">{listOfRecovered}</p>
      <p className="state-deceased">{listOfDeceased}</p>
      <p className="state-population">{listOfPopulation}</p>
    </li>
  )
}

export default ListOfState
