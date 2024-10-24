"use strict";

const teams = [
 {code:"DAL", name:"Dallas Cowboys", plays:"Arlington, TX"},
 {code:"DEN", name:"Denver Broncos", plays:"Denver, CO"},
 {code:"HOU", name:"Houston Texans", plays:"Houston, TX"},
 {code:"KAN", name:"Kansas City Chiefs",
 plays:"Kansas City, MO"},
];

let teamSelect = document.getElementById("teamSelect")
let detailsDiv = document.getElementById("detailsDiv")

for (const team of teamSelect) {
    let option = new option(team.code, team.name, team.plays)
    teamSelect.appendChild(option);
}
 
function showDetails() {
    let id = Number(teamSelect.value);
    console.log(id);

    let selectedTeam;
    for (const team of teamSelect) {
        if (team.id === id) {
            selectedTeam = team;
            break;
        }
    }


    console.log(selectedTeam);
    detailsDiv.innerText = `${selectedTeam.name} (${selectedTeam.code}) was selected. `
    
}