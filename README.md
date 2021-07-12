# Hearth Home

## Start the App
1) Download the .zip file
2) Extract contents
3) Run the commands

`npm install`

`npm run start:server`

`npm run start:client`

## Approach

### Back-End First

Before any front-end could be covered, the data needed to be sorted-out.  CSV is parsed with [csv-parser] (https://www.npmjs.com/package/csv-parser) and the data is stored in memory on the server.

The property data is searched using [fuzzy-search](https://www.npmjs.com/package/fuzzy-search).  This was chosen because a fuzzy search can compensate for user-error / typos.

### Front-End

Simple approach was taken for the display.  Here are the wireframe mock ups:

![wireframe_landing](https://imgur.com/a/9z4dP4i)
![wireframe_results](https://imgur.com/a/9z4dP4i)
