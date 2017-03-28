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
var pg = require('pg');
var config = {
  user: 'esthszoitgheja',
  database: 'df6l0v1d2h7f9g',
  password: '411d33432c8b33fba190522db59d72757218205361f7adc26d46ed05c1597a95',
  host: 'ec2-54-221-255-153.compute-1.amazonaws.com',
  port: '5432'
};
var pool = new pg.Pool(config);


app.post('/webHooks', function(request,response){
  response.render('pages/in');
  const linebotParser = bot.parser();
  console.log(linebotParser);

  // pool.connect(function(err,client,done){
  //
  //   if(err) return '';
  //
  //   client.query('create table teste2(id int not null,anyText varchar(200))');
  //
  //   done(err);
  //
  // });


});

app.get('/', function(request, response){
  response.render('pages/index');

});

bot.on('message', function(event){

});



/*#############create server###########*/

var server = app.listen(process.env.PORT, function() {
  var port = server.address().port;

   pool.connect(function(err,client,done){

    if(err) return '';

    client.query('create table teste(id int not null,anyText varchar(200))');

    done(err);

  });


  console.log("App now running on port", port);

});

