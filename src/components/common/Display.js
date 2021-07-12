import React from 'react'


import './Display.scss'

const baseClass = 'display'
const infoClass = `${baseClass}__info`


export default function Display({ selected, img }) {
  

  if(!selected){
    return (
      <h4 className="no-results">No results for your search!</h4>
    )
  } else {
    
    const { economics, location, homeInfo, misc } = selected

    return (
      <div className={baseClass}>
        <img src={img} />
        <div className={infoClass}>
          <h4>Home Information</h4>
          <p>{`${location.address}, ${location.city}, ${location.state} ${location.zip}`}</p>
          <p>{`${homeInfo.beds} Bed | ${homeInfo.baths} Bath | ${homeInfo.sqft} sqft`}</p>
          <p>{homeInfo.propertyType}</p>
          <p>{`MLS Number: ${misc.mlsNumber}`}</p>
          <h4>Pricing</h4>
          <p>{`${economics.price} | ${economics.dsqft} $/sqft`}</p>
          <p>{`Days on market: ${economics.daysOnMarket}`}</p>
          <h4><a href={misc.url} target="_blank">Learn More</a></h4>
        </div>
      </div>
    )
  }
}