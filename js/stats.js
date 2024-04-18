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
   

    // 
    // console.log(selectedTeam.current_record);