const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html")
});

app.post("/", function(req, res) {
  const query = req.body.cityName;
  const apiKey = "a37e8a58ba91f0a93feb8f36f9118f4e";
  const unit = "metric";
  const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query +"&appid="+ apiKey + "&units="+ unit;
  https.get(url, function(response) {
    console.log(response.statusCode);

    response.on("data", function(data) {
      const weatherData = JSON.parse(data)
      const temp = weatherData.main.temp
      const weatherDescription = weatherData.weather[0].description
      const icon = weatherData.weather[0].icon
      const imgURL = "http://openweathermap.org/img/wn/"+icon+"@2x.png"
      const cityName = weatherData.name

      res.write("<h1>The temperature in "+ cityName +" is " + temp + "degree Celcius.</h1>")
      res.write("<p>The weather is currently " + weatherDescription + ".</p>")
      res.write("<img src=" + imgURL + ">");
      res.send()
    })
  })
});


app.listen(3000, function() {
  console.log("Server is running on port 3000...")
});
