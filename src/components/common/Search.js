import React from 'react'

import SearchBar from 'material-ui-search-bar'
import './Search.scss'

export default function Search({ searchText, setSearchText, findSearch }) {

  const onChange = (value) => setSearchText(value)

  const onSubmit = (value) => findSearch(value)

  return (
    <SearchBar
      value={searchText}
      onRequestSearch={onSubmit}
      onChange={onChange}
    />
  )
}