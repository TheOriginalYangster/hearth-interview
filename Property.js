// Currency Formatter
const USD = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

class Property {
  
  constructor() {
    // We can un-comment data if needed later
    this.economics = {
      price: USD.format(arguments[7]).slice(0, -3),
      daysOnMarket: arguments[14],
      dsqft: arguments[15],
      // saleType: arguments[0],
      // soldDate: arguments[1],
      // hoaCost: arguments[16],
    }
    this.location = {
      address: arguments[3],
      city: arguments[4],
      state: arguments[5],
      zip: arguments[6],
      // location: arguments [10],
      // lat: arguments[25],
      // long: arguments[26],
    }
    this.homeInfo = {
      propertyType: arguments[2],
      beds: arguments[8],
      baths: arguments[9],
      sqft: arguments[11],
      lotSqft: arguments[12],
      yearBuilt: arguments[13],
    }
    this.misc = {
      status: arguments[17],
      url: arguments[20],
      source: arguments[21],
      mlsNumber: arguments[22],
      // openHouseStart: arguments[18],
      // openHouseEnd: arguments[19],
    }

    // Placeholder for img index
    this.i = null
  }

  setImg(i) {
    this.i = i
  } 
}

module.exports = Property