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

## My assumptions:
I created simple component which receives all scoreboard data in properties passed to it. Created custom interface to make sure that data passed is always properly typed so that component works as intended. 

# Potential improvements:
 - Possibility of receiving scores updates separately by match UID or teams names - depending on an implementation this could simplify usage of component by not requiring mutation of props passed to it every time any scores changes - in this scenario component would have to be much more complicated (for receiving scores we could use ie. RxJS stream or some state management library) and could potentially require additional data (ie. match UID)
 