import React from 'react'

import './Results.scss'

import h1 from '../../static/house1.jpeg'
import h2 from '../../static/house2.jpeg'
import h3 from '../../static/house3.jpeg'
import h4 from '../../static/house4.jpeg'
import h5 from '../../static/house5.jpeg'
import h6 from '../../static/house6.jpeg'
import h7 from '../../static/house7.jpeg'

// Array of stock house photos
const h = [h1, h2, h3, h4, h5, h6, h7]
const l = h.length

export default function Results({ results, setSelected }) {

  if(results){
    return (
      <div className={'results'}>
        {results.map(x => (
          <Result
            property={x}
            key={x.i}
            setSelected={setSelected}
          />
        ))}
      </div>
    )
  }
  else return null
}

function Result({ property, setSelected }) {
  
  const { location, homeInfo, economics, i } = property

  // Makes this property selected when clicked
  const onClick = () => setSelected(property)

  return (
    <div className={'result'} onClick={onClick}>
      <img className={'result__img'} src={h[i % l]} alt="property_image"/>
      <div className={'result__info'}>
        <p><b>{economics.price}</b></p>
        <p>{`${location.address} ${location.city} ${location.state}`}</p>
        <p>{`${homeInfo.beds} Beds, ${homeInfo.baths} Baths`}</p>
        <p>{`${homeInfo.sqft} sqft`}</p>
      </div>
    </div>
  )
}