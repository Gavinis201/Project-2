<<<<<<< HEAD
fetch("https://alnyb0ty3i.execute-api.us-east-1.amazonaws.com/sportsData")
    .then((response) => response.json())
    .then((data) => doTheThingHarold(data));

function doTheThingHarold(inputData) {

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

// Function: you select a team and it will display their roster/stats
function filterData(selectedTeam) {

    // Reset the innerHTML of the table each time before you run it
    document.getElementById("content-table").innerHTML = tableData;

    
    for (player in selectedTeam.roster) {
        // Creates a new row for every player in the team
        const thing = document.createElement("tr");

        for (indStat in selectedTeam.roster[player]) {
            // Creates a cell for each stat a player has
            const playerstat = document.createElement("td")
            // That cell's value is the value of the player's stat
            playerstat.innerHTML = selectedTeam.roster[player][indStat];

            // Add the cell to the row
            thing.appendChild(playerstat);
        }

        // Add the row to the table
        document.getElementById("content-table").appendChild(thing);
    }
}

/*
    
    document.getElementById("team-name").innerHTML = selectedTeam["name"];
    document.getElementById("record-number").innerHTML = selectedTeam["current_record"];
    document.getElementById("rebound-number").innerHTML = selectedTeam.statistics.avgRebounds.value;
    document.getElementById("point-number").innerHTML = selectedTeam.statistics.avgPoints;
    document.getElementById("fg-number").innerHTML = selectedTeam.statistics.fieldGoalPct;
    document.getElementById("tp-number").innerHTML = selectedTeam.statistics.threePointPct;
    document.getElementById("ft-number").innerHTML = selectedTeam.statistics.freeThrowPct;
    document.getElementById("assist-number").innerHTML = selectedTeam.statistics.avgAssists;
    document.getElementById("turnover-number").innerHTML = selectedTeam.statistics.avgTurnovers;
    document.getElementById("atr-number").innerHTML = selectedTeam.statistics.assistTurnoverRatio;
    document.getElementById("block-number").innerHTML = selectedTeam.statistics.avgBlocks;
    document.getElementById("steal-number").innerHTML = selectedTeam.statistics.avgSteals;
    console.log(selectedTeam.current_record);

*/
=======
fetch (
    "https://alnyb0ty3i.execute-api.us-east-1.amazonaws.com/sportsData"
)
    .then((response) => response.json())
    .then((data) => doTheThingHarold(data));


function doTheThingHarold(inputData) {

    for (team in inputData) {
        const item = document.createElement("li");
        const anchor = document.createElement("a");
            anchor.classList.add("dropdown-item");
            anchor.innerHTML = team;
        item.appendChild(anchor);

        const divider = document.createElement("div");
            divider.classList.add("dropdown-divider");

        document.getElementById("team-dropdown").appendChild(item);
        document.getElementById("team-dropdown").appendChild(divider);
    }
    
    selectedTeam = inputData["Denver Nuggets"];

    for (player in selectedTeam.roster) {
        const thing = document.createElement("p");
        thing.innerHTML = player;

            for (indStat in selectedTeam.roster[player]) {
                console.log(selectedTeam.roster[player][indStat]);

            }

        document.getElementById("content-table").appendChild(thing);
    }
}
/*
    
    document.getElementById("record-number").innerHTML = selectedTeam["current_record"];
    document.getElementById("rebound-number").innerHTML = selectedTeam.statistics.avgRebounds.value;
    document.getElementById("point-number").innerHTML = selectedTeam.statistics.avgPoints;
    document.getElementById("fg-number").innerHTML = selectedTeam.statistics.fieldGoalPct;
    document.getElementById("tp-number").innerHTML = selectedTeam.statistics.threePointPct;
    document.getElementById("ft-number").innerHTML = selectedTeam.statistics.freeThrowPct;
    document.getElementById("assist-number").innerHTML = selectedTeam.statistics.avgAssists;
    document.getElementById("turnover-number").innerHTML = selectedTeam.statistics.avgTurnovers;
    document.getElementById("atr-number").innerHTML = selectedTeam.statistics.assistTurnoverRatio;
    document.getElementById("block-number").innerHTML = selectedTeam.statistics.avgBlocks;
    document.getElementById("steal-number").innerHTML = selectedTeam.statistics.avgSteals;
    console.log(selectedTeam.current_record);

*/
>>>>>>> 1e3eec8 (progress in js)
