import './index.css'
import {BarChart, Bar, XAxis, Legend} from 'recharts'

// context
import EmojisCountContext from '../../context/EmojisCountContext'
import Header from '../Header'

const Reports = () => (
  <EmojisCountContext.Consumer>
    {value => {
      const {
        modifiedDatesArr,
        setActiveMonth,
        activeMonthId,
        monthsListDetails,
        veryHappyCount,
        happyCount,
        neutralCount,
        emojisList,
        sadCount,
        verySadCount,
      } = value

      const onChangeMonthName = event => {
        setActiveMonth(event.target.value)
      }

      const dateListObj = modifiedDatesArr.find(
        each => each.monthName === activeMonthId,
      )
      let veryHappyCountOnMonth = 0
      let happyCountOnMonth = 0
      let sadCountOnMonth = 0
      let verySadCountOnMonth = 0
      let neutralCountOnMonth = 0

      if (dateListObj) {
        dateListObj.dates.forEach(each => {
          if (each.emojiUrl === emojisList[0].emojiUrl) {
            veryHappyCountOnMonth += 1
          } else if (each.emojiUrl === emojisList[1].emojiUrl) {
            happyCountOnMonth += 1
          } else if (each.emojiUrl === emojisList[2].emojiUrl) {
            neutralCountOnMonth += 1
          } else if (each.emojiUrl === emojisList[3].emojiUrl) {
            sadCountOnMonth += 1
          } else if (each.emojiUrl === emojisList[4].emojiUrl) {
            verySadCountOnMonth += 1
          }
        })
      }
      const singleMonthEmojiCountList = [
        {
          monthName: activeMonthId,
          veryHappyCountOnMonth,
          happyCountOnMonth,
          neutralCountOnMonth,
          sadCountOnMonth,
          verySadCountOnMonth,
        },
      ]

      return (
        <>
          <Header />
          <div className='reports_container'>
            <h1 className='top_title'>Overall Emojis Reports</h1>
            <div className='emojis_container'>
              <div className='emojis_score_container'>
                <p className='emoji_name'>{emojisList[0].emojiName}</p>
                <img
                  src={emojisList[0].emojiUrl}
                  alt={emojisList[0].emojiName}
                  className='emoji_size'
                />
                <p className='emojis_count'>{veryHappyCount}</p>
              </div>
              <div className='emojis_score_container'>
                <p className='emoji_name'>{emojisList[1].emojiName}</p>
                <img
                  src={emojisList[1].emojiUrl}
                  alt={emojisList[1].emojiName}
                  className='emoji_size'
                />
                <p className='emojis_count'>{happyCount}</p>
              </div>
              <div className='emojis_score_container'>
                <p className='emoji_name'>{emojisList[2].emojiName}</p>
                <img
                  src={emojisList[2].emojiUrl}
                  alt={emojisList[2].emojiName}
                  className='emoji_size'
                />
                <p className='emojis_count'>{neutralCount}</p>
              </div>
              <div className='emojis_score_container'>
                <p className='emoji_name'>{emojisList[3].emojiName}</p>
                <img
                  src={emojisList[3].emojiUrl}
                  alt={emojisList[3].emojiName}
                  className='emoji_size'
                />
                <p className='emojis_count'>{sadCount}</p>
              </div>
              <div className='emojis_score_container'>
                <p className='emoji_name'>{emojisList[4].emojiName}</p>
                <img
                  src={emojisList[4].emojiUrl}
                  alt={emojisList[4].emojiName}
                  className='emoji_size'
                />
                <p className='emojis_count'>{verySadCount}</p>
              </div>
            </div>
            <div className='bar-charts_months_container'>
              <div className='barcharts_container'>
                <h1 className='reports_title'>Monthly Reports</h1>
                <BarChart
                  margin={{
                    top: 5,
                  }}
                  width={300}
                  height={500}
                  data={singleMonthEmojiCountList}
                >
                  <XAxis
                    dataKey='monthName'
                    tick={{
                      stroke: 'white',
                      strokeWidth: 2,
                    }}
                  />
                  <Legend
                    wrapperStyle={{
                      padding: 50,
                      fontFamily: 'Roboto',
                      fontSize: 15,
                      display: 'flex',
                    }}
                  />
                  <Bar
                    dataKey='veryHappyCountOnMonth'
                    name='veryHappyCountOnMonth'
                    fill='orange'
                    barSize='20%'
                  />
                  <Bar
                    dataKey='happyCountOnMonth'
                    name='happyCountOnMonth'
                    fill='lightblue'
                    barSize='20%'
                  />
                  <Bar
                    dataKey='neutralCountOnMonth'
                    name='neutralCountOnMonth'
                    fill='yellow'
                    barSize='20%'
                  />
                  <Bar
                    dataKey='sadCountOnMonth'
                    name='sadCountOnMonth'
                    fill='white'
                    barSize='20%'
                  />
                  <Bar
                    dataKey='verySadCountOnMonth'
                    name='verySadCountOnMonth'
                    fill='skyblue'
                    barSize='20%'
                    wrapperStyle={{
                      borderRadius: 12,
                    }}
                  />
                </BarChart>
              </div>

              <div className='month_drop_down_container'>
                <select
                  className='drop_down_ele'
                  value={activeMonthId}
                  onChange={onChangeMonthName}
                >
                  {monthsListDetails.map(each => (
                    <option value={each.monthName} key={each.month}>
                      {each.monthName}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </>
      )
    }}
  </EmojisCountContext.Consumer>
)

export default Reports
