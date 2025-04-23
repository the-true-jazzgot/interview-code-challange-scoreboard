# interview-code-challange-scoreboard

## To run project:
1. go to `scoreboard` catalog
2. run `npm install`
3. run `npm run dev`

## To run tests:
(assuming you already installed dependencies to run project as above)
1. run `npm install` in root catalog
2. go to `scoreboard`
3. run `npm test`

## My implementation:
- I created simple library for managing and displaying football scoreboards - it consists of `scoreboard.lib.ts` file which contains whole logic written in TypeScript and follows reducer design pattern, it's library/framework agnostic and created with Reacts useReducer hook in mind. 
- Additionally there is Scoreboard functional component written in React for simple implementation with useReducer hook. 
- All tests are written with React
- There are two examples provided - one in React and one in Vanilla JS (compiled from TypeScript)
