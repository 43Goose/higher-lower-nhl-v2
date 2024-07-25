import requests
import json 

abbreviations = ["ana", "bos", "buf", "car", "cbj", "cgy", "chi", "col", "dal", "det", "edm", "fla", "lak", "min", "mtl", "njd",
                 "nsh", "nyi", "nyr", "ott", "phi", "pit", "sea", "sjs", "stl", "tbl", "tor", "uta", "van", "vgk", "wpg", "wsh"]
ids = []

for abr in abbreviations:
    res = requests.get(f"https://api-web.nhle.com/v1/roster/{abr}/20242025")
    response = json.loads(res.text)
    
    for player in response["forwards"] + response["defensemen"] + response["goalies"]:
        statsRes = requests.get(f"https://api-web.nhle.com/v1/player/{str(player["id"])}/landing")
        stats = json.loads(statsRes.text)
        if "careerTotals" in stats:
            print(f"{stats["firstName"]["default"]} {stats["lastName"]["default"]} - {stats["fullTeamName"]["default"]}")
            ids.append(str(player["id"]))
    
f = open("player-ids.txt", "w")
f.write(', '.join(ids))
f.close()

print('done!')