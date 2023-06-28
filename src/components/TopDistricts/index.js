import './index.css'

const TopDistricts = props => {
  const {topDistrictsNumber, topDistrictsName} = props

  return (
    <li className="top-districts-list">
      <p className="top-districts-paragraph">{topDistrictsNumber}</p>
      <p className="top-districts-name">{topDistrictsName}</p>
    </li>
  )
}

export default TopDistricts
