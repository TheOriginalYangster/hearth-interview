const fs = require('fs')
const CsvReadableStream = require('csv-reader') //32 kb
const FuzzySearch = require('fuzzy-search')
const Property = require('./Property')


const express = require('express')
const app = express()
const port = 4000

const properties = []
const AddressSearcher = new FuzzySearch(properties, ['location.address', 'location.zip'])

app.get('/search', (req, res) => {
  const { q } = req.query
  console.log('Searching properties for:', q)
  
  try {
    const results = AddressSearcher.search(q)
    res.status(200).send(results)
  } catch(error) {
    console.error(error)
    res.status(500).send(error)
  }

})



app.listen(port, () => {

  /*
      On server start parse and store CSV in memory.
      This is unideal but larger applications wouldn't store searchable data in CSV format.
  */

  const inputStream = fs.createReadStream('houses.csv', 'utf8')
  const options = { parseNumbers: true }
  let i = 0
  inputStream.pipe(new CsvReadableStream(options))
    .on('data', data => {
      if(i > 0) properties.push(new Property(...data))
      i ++
    })
    .on('end', () => console.log('Properties', properties))

  console.log('listening on port...', port)
})