fetch("https://alnyb0ty3i.execute-api.us-east-1.amazonaws.com/sportsData")
    .then((response) => response.json())
    .then((data) => doTheThingHarold(data));

    function doTheThingHarold(inputData) {
        

        //This function adds an item and divider in the dropdown menu for each team in the list.
        for (let team in inputData) {
            const item = document.createElement("li");
            item.classList.add("dropdown-item");
            item.innerHTML = team;
            item.addEventListener("click", (function(team) {
                return function() {
                    filterData(inputData[team]);
                };
            })(team));
            
            const divider = document.createElement("div");
            divider.classList.add("dropdown-divider");
            
            document.getElementById("team-dropdown").appendChild(item);
            document.getElementById("team-dropdown").appendChild(divider);
        }
    }
    

    // Set a default value for the table as a "reset point" so the old data clears when you select a new team
    const tableData = document.getElementById("content-table").outerHTML;
    
    // Function: you select a team and it will display their roster/stats/games
    function filterData(selectedTeam) {
        
        //team stats
        document.getElementById("team-name").innerHTML = selectedTeam["name"];
        document.getElementById("record-number").innerHTML = selectedTeam["current_record"];
        document.getElementById("points-number").innerHTML = ":  " + Math.floor(selectedTeam.statistics.avgPoints.value);
        document.getElementById("fg-number").innerHTML = ":  " + selectedTeam.statistics.fieldGoalPct.value.toFixed(2) + "%";
        document.getElementById("tp-number").innerHTML = ":  " + selectedTeam.statistics.threePointPct.value.toFixed(2) + "%";
        document.getElementById("ft-number").innerHTML = ":  " + selectedTeam.statistics.freeThrowPct.value.toFixed(2) + "%";
        document.getElementById("rebound-number").innerHTML = ":  " + Math.floor(selectedTeam.statistics.avgRebounds.value);
        document.getElementById("assist-number").innerHTML = ":  " + Math.floor(selectedTeam.statistics.avgAssists.value);
        document.getElementById("turnover-number").innerHTML = ":  " + Math.floor(selectedTeam.statistics.avgTurnovers.value);
        document.getElementById("atr-number").innerHTML = ":  " + selectedTeam.statistics.assistTurnoverRatio.value.toFixed(2);
        document.getElementById("block-number").innerHTML = ":  " + Math.floor(selectedTeam.statistics.avgBlocks.value);
        document.getElementById("steal-number").innerHTML = ":  " + Math.floor(selectedTeam.statistics.avgSteals.value);
        document.getElementById("img1").src = selectedTeam.logo_light;
        document.getElementById("img2").src = selectedTeam.logo_light;


    //creates a table and populates it with the roster data.
    document.getElementById("content-table").innerHTML = tableData;
    for (player in selectedTeam.roster) {
        const thing = document.createElement("tr");
        for (indStat in selectedTeam.roster[player]) {
            const playerstat = document.createElement("td")
            playerstat.innerHTML = selectedTeam.roster[player][indStat];
            thing.appendChild(playerstat);
        }
        document.getElementById("content-table").appendChild(thing);
    }

    //edits the existing element to contain data from the last game.
    //Is currently incomplete, but changing image sources and appending multiple items via a loop are demonstrated in the rosterstats table.
    for (game in selectedTeam.last_five_games) {
        document.getElementById("hometeam1").innerHTML = selectedTeam.last_five_games[game].home_team.team_name_abbreviation;
        document.getElementById("awayteam1").innerHTML = selectedTeam.last_five_games[game].away_team.team_name_abbreviation;
        document.getElementById("homescore1").innerHTML = selectedTeam.last_five_games[game].home_team.score;
        document.getElementById("awayscore1").innerHTML = selectedTeam.last_five_games[game].away_team.score;
    }
}