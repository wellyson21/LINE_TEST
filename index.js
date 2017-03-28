var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 3000));
app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


/*############LineBot##########*/

var lineBot = require('linebot'),
    channelId = '1503342448',
    channelSecret = '15f3c6563c1b68b221aca3a7f0bac0ad',
    token = 'pvCPP5tm40b9XjlyI3yvG3U4/G4sKZ4Y+ic2z4iFXRJAIZXErV7xHSGjoXR5E/S1JMRUjZonFvNTSRVQjHhFk7KEkrsrROJaoYE91hQw/Y6McRhuJP4Hl6boDnT0j3XJR372Z9LJXKgIWtZzszDJlgdB04t89/1O/w1cDnyilFU=';

var bot = lineBot({
  channelId: channelId,
  channelSecret: channelSecret,
  channelAccessToken: token
});

/*#########database##############*/
var mysql = require('mysql');
var connection = mysql.createPool({
  host: '177.234.153.2',
  user: 'u213826385_tiud',
  password: '123456',
  database: 'u213826385_tiud'
});

app.post('/webHooks', function(request,response) {
  response.render('pages/in');
  const linebotParser = bot.parser();

  connection.query("insert into teste values (null,'webHooks')");

});

app.get('/', function(request, response){response.render('pages/index');});

bot.on('message', function(event){

  connection.query("insert into teste values (null,'message')");

});



/*#############create server###########*/

var server = app.listen(process.env.PORT, function() {
  var port = server.address().port;

  connection.query("insert into teste values (null,'text')");

  console.log("App now running on port", port);

});

