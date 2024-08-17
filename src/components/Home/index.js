// styling
import './index.css'
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa'
// components:
import Header from '../Header'
import DayListView from '../DayListView'
import EmojiListView from '../EmojiListView'
import MonthListView from '../MonthListView'
// context
import EmojisCountContext from '../../context/EmojisCountContext'

// Home component
let sunDatesArr = []
let monDatesArr = []
let tueDatesArr = []
let wedDatesArr = []
let thuDatesArr = []
let friDatesArr = []
let satDatesArr = []

const Home = () => (
  <EmojisCountContext.Consumer>
    {value => {
      const {
        emojisList,
        daysList,
        monthsListDetails,
        navigatingIndex,
        emojisListDropDownItem,
        activeEmojiId,
        daysListDropDownItem,
        modifiedDatesArr,
        setDateWithEmojis,
        setVeryHappyEmojisCount,
        setHappyEmojisCount,
        setNeutralEmojisCount,
        setSadEmojisCount,
        setVerySadEmojisCount,
        setActiveEMoji,
        setActiveDayName,
        setActiveEmojiName,
        rightArrowClk,
        leftArrowClk,
      } = value
      const isPresent = modifiedDatesArr.find(
        each => each.monthName === monthsListDetails[navigatingIndex].monthName,
      )

      const isModifiedList =
        isPresent !== undefined
          ? modifiedDatesArr.find(
              each =>
                each.monthName === monthsListDetails[navigatingIndex].monthName,
            )
          : monthsListDetails[navigatingIndex]

      sunDatesArr = isModifiedList.dates.filter(each => {
        if (
          each.date === '01' ||
          each.date === '08' ||
          each.date === '15' ||
          each.date === '22' ||
          each.date === '29'
        ) {
          return {...each}
        }
        return ''
      })
      monDatesArr = isModifiedList.dates.filter(each => {
        if (
          each.date === '02' ||
          each.date === '09' ||
          each.date === '16' ||
          each.date === '23' ||
          each.date === '30'
        ) {
          return {...each}
        }
        return ''
      })
      tueDatesArr = isModifiedList.dates.filter(each => {
        if (
          each.date === '03' ||
          each.date === '10' ||
          each.date === '17' ||
          each.date === '24' ||
          each.date === '31'
        ) {
          return {...each}
        }
        return ''
      })
      wedDatesArr = isModifiedList.dates.filter(each => {
        if (
          each.date === '04' ||
          each.date === '11' ||
          each.date === '18' ||
          each.date === '25'
        ) {
          return {...each}
        }
        return ''
      })
      thuDatesArr = isModifiedList.dates.filter(each => {
        if (
          each.date === '05' ||
          each.date === '12' ||
          each.date === '19' ||
          each.date === '26'
        ) {
          return {...each}
        }
        return ''
      })
      friDatesArr = isModifiedList.dates.filter(each => {
        if (
          each.date === '06' ||
          each.date === '13' ||
          each.date === '20' ||
          each.date === '27'
        ) {
          return {...each}
        }
        return ''
      })

      satDatesArr = isModifiedList.dates.filter(each => {
        if (
          each.date === '07' ||
          each.date === '14' ||
          each.date === '21' ||
          each.date === '28'
        ) {
          return {...each}
        }
        return ''
      })

      const renderWeekdayList = () => {
        if (daysListDropDownItem === daysList[0].day) {
          return sunDatesArr
        }
        if (daysListDropDownItem === daysList[1].day) {
          return monDatesArr
        }
        if (daysListDropDownItem === daysList[2].day) {
          return tueDatesArr
        }
        if (daysListDropDownItem === daysList[3].day) {
          return wedDatesArr
        }
        if (daysListDropDownItem === daysList[4].day) {
          return thuDatesArr
        }
        if (daysListDropDownItem === daysList[5].day) {
          return friDatesArr
        }
        if (daysListDropDownItem === daysList[6].day) {
          return satDatesArr
        }
        return ''
      }

      const list = renderWeekdayList()

      const renderWeekdaysListEmojis = () => {
        const emojiObjFound = emojisList.find(
          each => each.id === emojisListDropDownItem,
        )
        let countEmoji = 0
        const countList = list.map(each => {
          if (each.emojiUrl === emojiObjFound.emojiUrl) {
            countEmoji += 1
            return countEmoji
          }
          return ''
        })
        return countEmoji
      }

      const EMojisCount = renderWeekdaysListEmojis()

      const onChangeEmojiBtnClk = id => {
        setActiveEMoji(id)
      }

      const onChangeEmojisDropDownSelection = event => {
        setActiveEmojiName(event.target.value)
      }

      const onChangeDaysDropDownSelection = event => {
        setActiveDayName(event.target.value)
      }

      const onChangeRightArrowBtn = () => {
        rightArrowClk()
      }

      const onChangeLeftArrowBtn = () => {
        leftArrowClk()
      }

      // DateModified...
      const onChangeDateBtnClk = id => {
        const emojiObj = emojisList.filter(each => each.id === activeEmojiId)
        const checkActiveEmojiUrl = emojiObj[0].emojiUrl

        const dateObj = isModifiedList.dates.filter(each => each.id === id)
        if (dateObj[0].emojiUrl === '') {
          // console.log('setObj')

          if (emojiObj[0].emojiName === emojisList[0].emojiName) {
            setVeryHappyEmojisCount(true)
          } else if (emojiObj[0].emojiName === emojisList[1].emojiName) {
            setHappyEmojisCount(true)
          } else if (emojiObj[0].emojiName === emojisList[2].emojiName) {
            setNeutralEmojisCount(true)
          } else if (emojiObj[0].emojiName === emojisList[3].emojiName) {
            setSadEmojisCount(true)
          } else {
            setVerySadEmojisCount(true)
          }

          const updateDateInMonth = isModifiedList.dates.map(each => {
            if (each.id === id) {
              return {...each, emojiUrl: checkActiveEmojiUrl}
            }
            return {...each}
          })

          const updateMonthObj = {
            month: monthsListDetails[navigatingIndex].month,
            monthName: monthsListDetails[navigatingIndex].monthName,
            dates: updateDateInMonth,
          }
          setDateWithEmojis(updateMonthObj)
        } else if (dateObj[0].emojiUrl === emojiObj[0].emojiUrl) {
          if (emojiObj[0].emojiName === emojisList[0].emojiName) {
            setVeryHappyEmojisCount(false)
          } else if (emojiObj[0].emojiName === emojisList[1].emojiName) {
            setHappyEmojisCount(false)
          } else if (emojiObj[0].emojiName === emojisList[2].emojiName) {
            setNeutralEmojisCount(false)
          } else if (emojiObj[0].emojiName === emojisList[3].emojiName) {
            setSadEmojisCount(false)
          } else {
            setVerySadEmojisCount(false)
          }

          const updateDateInMonth = isModifiedList.dates.map(each => {
            if (each.id === id) {
              return {...each, emojiUrl: ''}
            }
            return {...each}
          })
          const updateMonthObj = {
            month: monthsListDetails[navigatingIndex].month,
            monthName: monthsListDetails[navigatingIndex].monthName,
            dates: updateDateInMonth,
          }
          setDateWithEmojis(updateMonthObj)
        } else if (dateObj[0].emojiUrl !== emojiObj[0].emojiUrl) {
          if (emojiObj[0].emojiUrl === emojisList[0].emojiUrl) {
            setVeryHappyEmojisCount(true)
          } else if (emojiObj[0].emojiUrl === emojisList[1].emojiUrl) {
            setHappyEmojisCount(true)
          } else if (emojiObj[0].emojiUrl === emojisList[2].emojiUrl) {
            setNeutralEmojisCount(true)
          } else if (emojiObj[0].emojiUrl === emojisList[3].emojiUrl) {
            setSadEmojisCount(true)
          } else if (emojiObj[0].emojiUrl === emojisList[4].emojiUrl) {
            setVerySadEmojisCount(true)
          }

          if (dateObj[0].emojiUrl === emojisList[0].emojiUrl) {
            console.log('veryhappyfalse')
            setVeryHappyEmojisCount(false)
          } else if (dateObj[0].emojiUrl === emojisList[1].emojiUrl) {
            setHappyEmojisCount(false)
          } else if (dateObj[0].emojiUrl === emojisList[2].emojiUrl) {
            setNeutralEmojisCount(false)
          } else if (dateObj[0].emojiUrl === emojisList[3].emojiUrl) {
            setSadEmojisCount(false)
          } else if (dateObj[0].emojiUrl === emojisList[4].emojiUrl) {
            setVerySadEmojisCount(false)
          }
          const updateDateInMonth = isModifiedList.dates.map(each => {
            if (each.id === id) {
              return {...each, emojiUrl: checkActiveEmojiUrl}
            }
            return {...each}
          })
          const updateMonthObj = {
            month: monthsListDetails[navigatingIndex].month,
            monthName: monthsListDetails[navigatingIndex].monthName,
            dates: updateDateInMonth,
          }
          setDateWithEmojis(updateMonthObj)
        }
      }

      // renderingMonth
      const renderMonthListView = () => (
        <div className="days_dates_container">
          <ul className="days_container">
            {daysList.map(each => (
              <DayListView data={each} key={each.id} />
            ))}
          </ul>
          <ul className="date_lists_container">
            {isModifiedList.dates.map(each => (
              <MonthListView
                key={each.id}
                data={each}
                dateBtnClk={onChangeDateBtnClk}
              />
            ))}
          </ul>
        </div>
      )

      const renderFilterCount = () => (
        <p className="day_number">0{EMojisCount}</p>
      )

      return (
        <>
          <Header />
          <div className="home_container">
            <h1 className="home_title">Moods in a Month</h1>
            <div className="months_emojis_container">
              <div className="months_container">
                <div className="top_container">
                  {/* eslint-disable-next-line */}
                  <button
                    className="btn_arr"
                    type="button"
                    data-testid="previous-button"
                    onClick={onChangeLeftArrowBtn}
                  >
                    <FaArrowLeft size={30} className="icon_size" />
                  </button>
                  <h1 className="month_title">
                    {monthsListDetails[navigatingIndex].monthName}
                  </h1>
                  {/* eslint-disable-next-line */}
                  <button
                    className="btn_arr"
                    type="button"
                    data-testid="next-button"
                    onClick={onChangeRightArrowBtn}
                  >
                    <FaArrowRight size={30} className="icon_size" />
                  </button>
                </div>
                <div className="days_dates_container">
                  {renderMonthListView()}
                </div>
              </div>
              <div className="emojies_section_container">
                <ul className="emoji_selection_container">
                  {emojisList.map(each => (
                    <EmojiListView
                      key={each.id}
                      data={each}
                      isActive={each.id === activeEmojiId}
                      emojiBtnClk={onChangeEmojiBtnClk}
                    />
                  ))}
                </ul>

                <div className="drop_down_container">
                  <div className="drop_downlist_container">
                    <select
                      value={emojisListDropDownItem}
                      onChange={onChangeEmojisDropDownSelection}
                      className="emoji_option_list_container"
                    >
                      {emojisList.map(each => (
                        <option
                          className="option_ele"
                          value={each.id}
                          key={each.id}
                        >
                          {each.emojiName}
                        </option>
                      ))}
                    </select>
                    <select
                      value={daysListDropDownItem.day}
                      onChange={onChangeDaysDropDownSelection}
                      className="emoji_option_list_container"
                    >
                      {daysList.map(each => (
                        <option
                          className="option_ele"
                          value={each.day}
                          key={each.id}
                        >
                          {each.day}
                        </option>
                      ))}
                    </select>
                  </div>
                  {renderFilterCount()}
                </div>
              </div>
            </div>
          </div>
        </>
      )
    }}
  </EmojisCountContext.Consumer>
)

export default Home
