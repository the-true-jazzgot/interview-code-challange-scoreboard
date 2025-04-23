import scoreboard, { Match } from './lib/scoreboard.lib';

let scores:Match[] = [];

function displayScores(){
    list && (list.innerHTML = "");
    scores.forEach(element => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${element.homeTeam.name} ${element.homeTeam.score?.toString() ?? "0"}</span>
            <span>${element.awayTeam.name} ${element.awayTeam.score?.toString() ?? "0"}</span>
        `;
        list && list.appendChild(li);
    });
}

function addMatch(){
    if(homeTeam && awayTeam){
        scores = scoreboard(scores, {
            type: "add_new_match",
            payload: {
                homeTeam: {
                    name: homeTeam.value,
                },
                awayTeam: {
                    name: awayTeam.value,
                }
            }
        });
    }
    displayScores();
}

function updateScores(){
    if(homeTeam && awayTeam && homeScore && awayScore){
        scores = scoreboard(scores, {
            type: "update_score",
            payload: {
                homeTeam: {
                    name: homeTeam.value,
                    score: Number(homeScore.value)
                },
                awayTeam: {
                    name: awayTeam.value,
                    score: Number(awayScore.value)
                }
            }
        });
    }
    displayScores();
}

const list = document.querySelector(".test-list");
const homeTeam = document.querySelector("#homeName") as HTMLInputElement;
const awayTeam = document.querySelector("#awayName") as HTMLInputElement;
const addButton = document.querySelector(".addMatch") as HTMLButtonElement;
const homeScore = document.querySelector("#homeScore") as HTMLInputElement;
const awayScore = document.querySelector("#awayScore") as HTMLInputElement;
const updateButton = document.querySelector(".updateScore") as HTMLButtonElement;

addButton.onclick = e => addMatch();
updateButton.onclick = e => updateScores();

displayScores();