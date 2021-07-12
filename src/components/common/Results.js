import React from 'react'
import h1 from '../../static/house1.jpeg'
import h2 from '../../static/house2.jpeg'
import h3 from '../../static/house3.jpeg'
import h4 from '../../static/house4.jpeg'

import './Results.scss'

export default function Results({ results, setSelected }) {

  if(results){
    return (
      <div className={'results'}>
        {results.map((x, i) => (
          <Result
            property={x}
            key={i}
            n={(i % 4)}
            setSelected={setSelected}
          />
        ))}
      </div>
    )
  }
  else return null
}

// Array of stock house images
const h = [h1, h2, h3, h4]

function Result({ property, n, setSelected }) {
  
  const { location, homeInfo, economics } = property

  const onClick = () => setSelected(property)

  return (
    <div className={'result'} onClick={onClick}>
      <img className={'result__img'} src={h[n]} />
      <div className={'result__info'}>
        <p><b>{economics.price}</b></p>
        <p>{`${location.address} ${location.city} ${location.state}`}</p>
        <p>{`${homeInfo.beds} Beds, ${homeInfo.baths} Baths`}</p>
        <p>{`${homeInfo.sqft} sqft`}</p>
      </div>
    </div>
  )
}