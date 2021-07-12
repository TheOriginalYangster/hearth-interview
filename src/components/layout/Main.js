import React, { useState, useEffect } from 'react'
import Search from '../common/Search'
import Results from '../common/Results'
import Display from '../common/Display'



import './Main.scss'

const baseClass = 'main'
const headerClass = `${baseClass}__header`
const displayClass = `${baseClass}__display`
const resultsClass = `${baseClass}__results`

export default function Main(props) {

  const { searchText, setSearchText, findSearch, setResults, results } = props

  const [selected, setSelected] = useState(results[0])

  // Change selected property when we get new results
  useEffect(() => {
    setSelected(results[0])
  }, [results])

  // Reset to default state & return user to landing page
  const homeClick = () => {
    setSearchText('')
    setResults(null)
  }

  return (
    <div className={baseClass}>
      <div className={headerClass}>
        <h3 onClick={homeClick}>
          Hearth
        </h3>
        <Search
          searchText={searchText}
          setSearchText={setSearchText}
          findSearch={findSearch}
        />
      </div>
      <div classname={displayClass}>
        <Display
          selected={selected}
        />
      </div>
      <div className={resultsClass}>
        <Results
          results={results}
          setSelected={setSelected}
        />
      </div>
    </div>
  )
}

