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

const tableData = document.getElementById("content-table").outerHTML;

function filterData(selectedTeam) {
    document.getElementById("content-table").innerHTML = tableData;
    console.log(selectedTeam);
    for (player in selectedTeam.roster) {
        const thing = document.createElement("tr");

        for (indStat in selectedTeam.roster[player]) {
            const playerstat = document.createElement("td")
            playerstat.innerHTML = selectedTeam.roster[player][indStat];
            thing.appendChild(playerstat);
        }

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