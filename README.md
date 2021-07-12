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

Before any front-end could be covered, the data needed to be sorted out.

CSV is parsed with [csv-parser](https://www.npmjs.com/package/csv-parser) and the data is stored in memory on the server.

The property data is searched using [fuzzy-search](https://www.npmjs.com/package/fuzzy-search).

### Front-End

Simple approach was taken for the display.  Here are the wireframe mock ups:

![wireframe_landing](https://i.imgur.com/ESwVgu2.jpg)
![wireframe_results](https://i.imgur.com/wXls9Hj.jpeg)

The CSV file data did not contain any image links so stock photos are used as placeholders.  An external API for stock images was considered but workarounds for API call limits would have lead to a rabbit hole.

React-Router would have been a good option for the landing/results page, but conditional renders were used for simplicity.

Styling is built using SASS/SCSS.
