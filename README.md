# Coding Test - Breaking Bad API

I know it should be a simple program to log a list of episodes. I played a bit with it, so instead of using the terminal, run a simple development server.

## How to run it

1. Open the project folder and run command `yarn` or `npm install` to install all dependencies.
2. Run the project by `yarn start:dev` or `npm start:dev`.

On the website just search for the character, e.g `Tuco Salamanca`, or using comma for more like `Walter White, Krazy-8`

3. You can also run all tests by command `yarn test` or `npm test`.

## Hint

Breaking Bad API is literally break. They provided information about the `characters` parameter in the `eposode` endpoint. Sadly, [it wasn't implemented](https://github.com/timbiles/Breaking-Bad--API/blob/master/server/Ctrl/episodeCtrl.js), so I search through the all episodes.
