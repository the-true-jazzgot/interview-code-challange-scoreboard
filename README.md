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
- Simple library for managing and displaying football scoreboards - it consists of `scoreboard.lib.ts` file which contains whole logic written in TypeScript and following reducer design pattern. 
- Implementation is library/framework agnostic but created with Reacts useReducer hook in mind.
- Additionally there is Scoreboard functional component written in React for simple implementation with useReducer hook.
- All tests are written with React
- There are two examples provided - one in React and one in Vanilla JS (compiled from TypeScript)
- Library is covered by tests, examples are provided "as is" and are not guaranteed to have no errors is some edge cases (altough didn't find any)

### Possible improvements
- as stated in requirements my implementation only uses in memory storage and can be not persistent in some cases
- it uses closure to track order of matches - depending on implementation it can be changed to state or other more robust solution