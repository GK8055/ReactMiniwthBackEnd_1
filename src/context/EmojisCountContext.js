import React from 'react'

const EmojisCountContext = React.createContext({
  modifiedDatesArr: [],
  count_1: 0,
  count_2: 0,
  count_3: 0,
  count_4: 0,
  count_5: 0,
  setCount: () => {},
})

export default EmojisCountContext
