import React, { useState, useEffect } from 'react'
import Search from '../common/Search'
import Results from '../common/Results'
import Display from '../common/Display'

import h1 from '../../static/house1.jpeg'
import h2 from '../../static/house2.jpeg'
import h3 from '../../static/house3.jpeg'
import h4 from '../../static/house4.jpeg'

import './Main.scss'

const baseClass = 'main'
const headerClass = `${baseClass}__header`
const displayClass = `${baseClass}__display`
const resultsClass = `${baseClass}__results`

// Array of stock house photos
const h = [h1, h2, h3, h4]

export default function Main(props) {

  const { searchText, setSearchText, findSearch, setResults, results } = props

  const [selected, setSelected] = useState(results[0])
  const [img, setImg] = useState(h[Math.floor(Math.random() * 3)])

  // Change selected property when we get new results
  useEffect(() => {
    setSelected(results[0])
  }, [results])

  // Change random image on selected change
  useEffect(() => {
    setImg(h[Math.floor(Math.random() * 3)])
  }, [selected])

  // Return user to landing
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
          img={img}
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

