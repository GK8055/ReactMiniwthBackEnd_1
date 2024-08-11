import './index.css'

const DayItem = props => {
  const {data} = props
  const {day} = data

  return (
    <li className="day_list_item">
      <p>{day}</p>
    </li>
  )
}

export default DayItem
