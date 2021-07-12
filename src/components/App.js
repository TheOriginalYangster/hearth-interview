import React, { useState, useEffect } from 'react';

import Landing from './layout/Landing'
import Main from './layout/Main'

import './App.scss';

function App() {

  const [searchText, setSearchText] = useState('')
  const [results, setResults] = useState(null)

  // Query unsplash API for stock home images.
  useEffect(() => {

  }, [])

  const findSearch = (q) => {

    if(q === '') return

    const url = `/search?q=${q}`

    fetch(url)
      .then(res => res.json())
      // .then(data => {
      //   console.log(data)
      //   return data
      // })
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
