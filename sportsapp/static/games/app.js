
let headers = {
    'X-Auth-Token': '1f8331ab977e49a482b3552675877402'
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
    console.log(json.count)
}).catch(function(err) {
    document.getElementById("spinningLoader").style.display = 'none'
    console.log(err)
})