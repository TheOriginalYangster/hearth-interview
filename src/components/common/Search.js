import React from 'react'

import SearchBar from 'material-ui-search-bar'
import './Search.scss'

const baseClass = 'search-bar'
const inputClass = `${baseClass}__input`
const submitClass = `${baseClass}__submit`

export default function Search({ searchText, setSearchText, findSearch }) {

  const onChange = (value) => setSearchText(value)

  const onSubmit = (value) => findSearch(value)

  const onKeyDown = (e) => {
    if(e.key === 'Enter') onSubmit(e)
  }

  return (
    <SearchBar
      value={searchText}
      onRequestSearch={onSubmit}
      onChange={onChange}
    />
  )
}