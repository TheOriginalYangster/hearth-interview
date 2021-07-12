const fs = require('fs')
const CsvReadableStream = require('csv-reader')
const FuzzySearch = require('fuzzy-search')
const Property = require('./Property')

const express = require('express')
const app = express()
const port = 4000

const properties = []
const AddressSearcher = new FuzzySearch(properties, ['location.address'])

app.get('/search', (req, res) => {
  const { q } = req.query

  try {
    const searchResults = AddressSearcher.search(q)
    res.status(200).send(searchResults)
  } catch(error) {
    console.log('Error searching...')
    console.log(error)
    res.status(500).send(error)
  }
})

app.listen(port, () => {

  // On server start: parse and store CSV in memory.

  const inputStream = fs.createReadStream('houses.csv', 'utf8')
  let headers = true

  inputStream.pipe(new CsvReadableStream({ parseNumbers: true }))
    .on('data', (data) => {
      // First row is the column headers
      if(headers) headers = false
      else properties.push(new Property(...data))
    })
    .on('end', () => console.log('Properties', properties))

  console.log('listening on port...', port)
})