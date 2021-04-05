# Coding Test - Breaking Bad API

I know it should be a simple program to log a list of episodes. But those two tasks are so similar in the case of providing output, so I played a bit with it though. Instead of using the terminal, run a simple development server and check results in browser.

## How to run it

1. Open the project folder and run command `yarn` or `npm install` to install all dependencies.
2. Run the project by `yarn start:dev` or `npm start:dev`.

On the website just search for the character, e.g `Tuco Salamanca`, or using comma for more like `Walter White, Krazy-8`

3. You can also run all tests by command `yarn test` or `npm test`.

## Hint

Breaking Bad API is literally "break". They provided information about the `characters` parameter in the `episode` endpoint. Sadly, [it wasn't implemented](https://github.com/timbiles/Breaking-Bad--API/blob/master/server/Ctrl/episodeCtrl.js), so I search through the all episodes.

## If I had continued to work on it

I would add:
1. Tests to form module
2. Errors handling and more guards
3. Styles to HTML page
4. Build script to package.json
