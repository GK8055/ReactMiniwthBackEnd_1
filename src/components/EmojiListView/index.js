import './index.css'

const EmojiItem = props => {
  const {data, isActive, emojiBtnClk} = props
  const {emojiUrl, emojiName, id} = data
  // console.log(emojiUrl)
  const styles = isActive === true ? 'selected' : 'emoji_item'
  const onChangeEmojiClick = () => {
    emojiBtnClk(id)
  }
  return (
    <li className="emoji_list_item">
      <button type="button" className="emoji_btn" onClick={onChangeEmojiClick}>
        <p className="emoji_text">{emojiName}</p>
        <img src={emojiUrl} alt={emojiName} className={`${styles}`} />
      </button>
    </li>
  )
}

export default EmojiItem
