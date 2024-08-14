import './index.css'
// context
import EmojisCountContext from '../../context/EmojisCountContext'
import Header from '../Header'

const emojisList = [
  {
    id: '380e6284-a454-11ec-b909-0242ac120002',
    emojiName: 'Very Happy',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-very-happy.png',
  },
  {
    id: '380e64f0-a454-11ec-b909-0242ac120002',
    emojiName: 'Happy',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-happy.png',
  },
  {
    id: '380e6626-a454-11ec-b909-0242ac120002',
    emojiName: 'Neutral',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-neutral.png',
  },
  {
    id: '380e6748-a454-11ec-b909-0242ac120002',
    emojiName: 'Sad',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-sad.png',
  },
  {
    id: '380e69c8-a454-11ec-b909-0242ac120002',
    emojiName: 'Very Sad',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-very-sad.png',
  },
]

const Reports = () => (
  <EmojisCountContext.Consumer>
    {value => {
      const {
        veryHappyCount,
        happyCount,
        neutralCount,
        sadCount,
        verySadCount,
        modifiedDatesArr,
      } = value

      return (
        <>
          <Header />
          <div className="reports_container">
            <h1 className="top_title">Overall Emojis Reports</h1>
            <p className="reports_title">Overall Emojis Reports</p>
            <div className="emojis_container">
              <div className="emojis_score_container">
                <p className="emoji_name">{emojisList[0].emojiName}</p>
                <img
                  src={emojisList[0].emojiUrl}
                  alt={emojisList[0].emojiName}
                  className="emoji_size"
                />
                <p className="emojis_count">{veryHappyCount}</p>
              </div>
              <div className="emojis_score_container">
                <p className="emoji_name">{emojisList[1].emojiName}</p>
                <img
                  src={emojisList[1].emojiUrl}
                  alt={emojisList[1].emojiName}
                  className="emoji_size"
                />
                <p className="emojis_count">{happyCount}</p>
              </div>
              <div className="emojis_score_container">
                <p className="emoji_name">{emojisList[2].emojiName}</p>
                <img
                  src={emojisList[2].emojiUrl}
                  alt={emojisList[2].emojiName}
                  className="emoji_size"
                />
                <p className="emojis_count">{neutralCount}</p>
              </div>
              <div className="emojis_score_container">
                <p className="emoji_name">{emojisList[3].emojiName}</p>
                <img
                  src={emojisList[3].emojiUrl}
                  alt={emojisList[3].emojiName}
                  className="emoji_size"
                />
                <p className="emojis_count">{sadCount}</p>
              </div>
              <div className="emojis_score_container">
                <p className="emoji_name">{emojisList[4].emojiName}</p>
                <img
                  src={emojisList[4].emojiUrl}
                  alt={emojisList[4].emojiName}
                  className="emoji_size"
                />
                <p className="emojis_count">{verySadCount}</p>
              </div>
            </div>
          </div>
        </>
      )
    }}
  </EmojisCountContext.Consumer>
)

export default Reports
