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

Before any front-end could be covered, the data needed to be sorted-out.  CSV is parsed with [csv-parser](https://www.npmjs.com/package/csv-parser) and the data is stored in memory on the server.

The property data is searched using [fuzzy-search](https://www.npmjs.com/package/fuzzy-search).  This was chosen because a fuzzy search can compensate for user-error / typos.

### Front-End

Simple approach was taken for the display.  Here are the wireframe mock ups:

![wireframe_landing](https://i.imgur.com/ESwVgu2.jpg)
![wireframe_results](https://i.imgur.com/wXls9Hj.jpeg)

The CSV files did not contain any image links, so four photos used as placeholders for the wireframe.  An external API for stock images was considered but workarounds for API call limits would have lead to a rabbit hole.

React-Router was also considered for the 'landing' and 'results' page, but a conditional render was used.

Styling is built using SASS/SCSS.
