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