import scoreboard, { Match } from './lib/scoreboard.lib';

let scores:Match[] = [];

scores = scoreboard(scores, {
    type: "add_new_match",
    payload: {
        homeTeam: {
            name: "Mexico"
        },
        awayTeam: {
            name: "Spain"
        }
    }
});

const list = document.querySelector(".test-list");

scores.forEach(element => {
    const li = document.createElement("li");
    li.innerHTML = `<span>${element.homeTeam.name}</span><span>${element.awayTeam.name}</span>`
    list?.appendChild(li);
});