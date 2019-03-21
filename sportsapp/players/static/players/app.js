
let headers = {
    'X-Auth-Token': '1f8331ab977e49a482b3552675877402'
}

fetch("http://api.football-data.org/v2/matches?status='LIVE'", {
    method: "GET",
    headers: headers
}).then(function(response) {
    console.log(response)
    return response.json()
}).then(function(json) {
    console.log(json)
}).catch(function(err) {
    console.log(err)
})