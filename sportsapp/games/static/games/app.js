
let headers = {
    'X-Auth-Token': ''
}

document.getElementById("spinningLoader").style.display = 'block'

fetch("https://api.football-data.org/v2/competitions/PL/matches", {
    method: "GET",
    headers: headers
}).then(function(response) {
    console.log(response)
    return response.json()
}).then(function(json) {
    document.getElementById("spinningLoader").style.display = 'none'
    console.log(json)

    let matchCount = json.count
    let matchCountTitle = document.getElementById("matchCount")
    matchCountTitle.innerText = matchCount + " Matches were found."

    var matches = document.getElementById("matches")

    for(let i = 0; i < json.count; i++) {
        let match = json.matches[i]
        let matchday = match.matchday
        let awayTeam = match.awayTeam.name
        let homeTeam = match.homeTeam.name

    }
}).catch(function(err) {
    document.getElementById("spinningLoader").style.display = 'none'
    console.log(err)
})


function createMatchBlock(date, awayTeam, homeTeam, stage) {
    let match = document.createElement("div")
    match.classList.add("border")
    match.classList.add("pt-3")
    match.classList.add("pb-3")
    match.classList.add("d-flex")
    match.classList.add("justify-content-around")
    match.classList.add("align-items-center")

    let homeTeam = document.createElement("span")
    homeTeam.classList.add("d-flex")
    homeTeam.classList.add("align-items-center")
    homeTeam.classList.add("flex-column")

    let homeTeamTitle = document.createElement("h5")
    let homeTeamName = document.createElement("p")

    let score = document.createElement('span')
    

    let awayTeam = document.createElement("span")
    awayTeam.classList.add("d-flex")
    awayTeam.classList.add("align-items-center")
    awayTeam.classList.add("flex-column")

    let awayTeamTitle = document.createElement("h5")
    let awayTeamName = document.createElement("p")
}
