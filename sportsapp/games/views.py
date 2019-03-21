from django.shortcuts import render
import http.client
import json

# Create your views here.

def get_games():
    connection = http.client.HTTPConnection('api.football-data.org')
    headers = { 'X-Auth-Token': ""}
    connection.request('GET', '/v2/competitions', None, headers)
    return json.loads(connection.getresponse().read().decode())


def home_page(request): 
    # data = get_games()
    # print(data)
    data = ""
    context = {
        "data": data
    }
    return render(request, 'games/home.html', context)
