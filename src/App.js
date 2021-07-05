import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {

  const [searchText, setSearchText] = useState('')
  const [results, setResults] = useState(null)

  const findSearch = (q) => {

    if(q === '') return

    const url = `/search?q=${q}`
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        return data
      })
      .then(data => setResults(data))
  }

  const onChange = (e) => {
    e.preventDefault()
    let { value, keycode } = e.target
    setSearchText(value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log('key press', e.key)
    if(e.key === 'Enter') {
      console.log('searching...')
      findSearch(searchText)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input
          onChange={onChange}
          onKeyUp={onSubmit}
        />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
