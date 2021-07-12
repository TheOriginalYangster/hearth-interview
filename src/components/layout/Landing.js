import React from 'react'
import Search from '../common/Search'

import './Landing.scss'

const baseClass = 'landing'

export default function Landing(props) {

  const { searchText, setSearchText, findSearch } = props

  return (
    <div className={baseClass}>
      <h1>Hearth Home</h1>
      <p>It's always a buyer's market with us!</p>
      <Search
        searchText={searchText}
        setSearchText={setSearchText}
        findSearch={findSearch}
      />
    </div>
  )
}