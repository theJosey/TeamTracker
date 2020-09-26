<!-- For now this can stay as one page 
    Maybe each sport gets it's own page? 
    Or just have a dropdown to select each sport? 
    can make fancier css with different pages?
    Starting with Baseball  
-->

<!-- Let's start with some test requests! --> 

<template>
<button @click="getTeamStandings()">
    Get standings
</button>
</template>

<script>
export default {
    methods:{
        getTeamStandings() { 

        var unirest = require("unirest");

        var req = unirest("GET", "https://api-baseball.p.rapidapi.com/standings");

        req.query({
            "team": "3",
            "league": "1",
            "stage": "MLB",
            "season": "2020"
        });

        req.headers({
            "x-rapidapi-host": "api-baseball.p.rapidapi.com",
            "x-rapidapi-key": "",
            "useQueryString": true
        });


        req.end(function (res) {
            if (res.error) throw new Error(res.error);

            console.log(res.body);
        });
        }
    }
}
</script>

<!-- JSON stuff maybe...
,
  "browser": {
    "fs": "empty",
    "path": false,
    "os": false,
    "crypto": false,
    "stream": false,
    "http": false,
    "tls": false,
    "zlib": false,
    "https": false,
    "net": false,
    "target": "web"
  }
*/ --> 