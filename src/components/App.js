import React, { useState } from 'react';

import Landing from './layout/Landing'
import Main from './layout/Main'

import './App.scss';

function App() {

  const [searchText, setSearchText] = useState('')
  const [results, setResults] = useState(null)

  // Gets search results from server
  const findSearch = (q) => {

    if(q === '') return
    const url = `/search?q=${q}`

    fetch(url)
      .then(res => res.json())
      .then(data => {
        // Add indexes to properties (for images)
        data.forEach((x, i) => x.i = i)
        return data
      })
      .then(data => setResults(data))
      .catch(console.log)
  }

  const showMain = results !== null

  return (
    <div className="App">
      {!showMain && (
        <Landing
          searchText={searchText}
          setSearchText={setSearchText}
          findSearch={findSearch}
        />
      )}
      {showMain && (
        <Main
          searchText={searchText}
          setSearchText={setSearchText}
          findSearch={findSearch}
          results={results}
          setResults={setResults}
        />
      )}
    </div>
  );
}

export default App;
