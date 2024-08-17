import './index.css'

const MonthItem = props => {
  const {data, dateBtnClk} = props
  const {date, id, emojiUrl} = data
  const dateBtnClkItem = () => {
    dateBtnClk(id)
  }

  const renderImageEle = () => {
    const imageEle =
      emojiUrl === '' ? (
        ''
      ) : (
        <img src={emojiUrl} className="date_emoji_size" alt={date} />
      )
    return imageEle
  }

  return (
    <li>
      <button className="date_btn" type="button" onClick={dateBtnClkItem}>
        <p className="date_ele">{date}</p>
        {renderImageEle()}
      </button>
    </li>
  )
}

export default MonthItem
