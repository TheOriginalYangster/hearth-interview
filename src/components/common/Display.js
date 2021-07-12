import React from 'react'

import h1 from '../../static/house1.jpeg'
import h2 from '../../static/house2.jpeg'
import h3 from '../../static/house3.jpeg'
import h4 from '../../static/house4.jpeg'
import h5 from '../../static/house5.jpeg'
import h6 from '../../static/house6.jpeg'
import h7 from '../../static/house7.jpeg'

import './Display.scss'

const baseClass = 'display'
const infoClass = `${baseClass}__info`

// Array of stock house photos
const h = [h1, h2, h3, h4, h5, h6, h7]

export default function Display({ selected }) {

  if(!selected){
    return (
      <h4 className="no-results">No results for your search!</h4>
    )
  } else {
    
    const { economics, location, homeInfo, misc, i } = selected
    const img = h[i % h.length]

    return (
      <div className={baseClass}>
        <img src={img} alt="property_image"/>
        <div className={infoClass}>
          <h4>Home Information</h4>
          <p>{`${location.address}, ${location.city}, ${location.state} ${location.zip}`}</p>
          <p>{`${homeInfo.beds} Bed | ${homeInfo.baths} Bath | ${homeInfo.sqft} sqft`}</p>
          <p>{homeInfo.propertyType}</p>
          <p>{`MLS Number: ${misc.mlsNumber}`}</p>
          <h4>Pricing</h4>
          <p>{`${economics.price} | ${economics.dsqft} $/sqft`}</p>
          <p>{`Days on market: ${economics.daysOnMarket}`}</p>
          <h4>
            <a
              href={misc.url}
              target="_blank"
              rel="noreferrer"
            >
              Learn More
            </a>
          </h4>
        </div>
      </div>
    )
  }
}