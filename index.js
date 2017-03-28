var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 3000));
app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


var lineBot = require('linebot'),
    channelId = '1503342448',
    channelSecret = '15f3c6563c1b68b221aca3a7f0bac0ad',
    token = 'pvCPP5tm40b9XjlyI3yvG3U4/G4sKZ4Y+ic2z4iFXRJAIZXErV7xHSGjoXR5E/S1JMRUjZonFvNTSRVQjHhFk7KEkrsrROJaoYE91hQw/Y6McRhuJP4Hl6boDnT0j3XJR372Z9LJXKgIWtZzszDJlgdB04t89/1O/w1cDnyilFU=';

var bot = lineBot({
  channelId: channelId,
  channelSecret: channelSecret,
  channelAccessToken: token
});

const linebotParser = bot.parser();

app.post('/', function(request,response){

  response.render('pages/in');

});


app.get('/', function(request, response){

  response.render('pages/index');

});


bot.on('message', function(event){

  console.log(event);

});


var server = app.listen(process.env.PORT || 8080, function() {

  var port = server.address().port;
  console.log("App now running on port", port);

});

