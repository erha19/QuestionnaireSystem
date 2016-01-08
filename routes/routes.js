var resource = require('express-resource');

//index: list of options
app.get('/api', function(req, res){
  //All routes we have defined, along with the verbs
  var routes_array = (app.routes.routes.get ? app.routes.routes.get : [])
        .concat((app.routes.routes.post ? app.routes.routes.post : [])
          .concat((app.routes.routes.put ? app.routes.routes.put : [])
            .concat(app.routes.routes.delete ? app.routes.routes.delete : [])));

  var routes_list = '';
  routes_array.forEach(function(r){
    if(r.path != '*'){
      routes_list += '<a href="' + r.path + '">' + r.method + ': ' + r.path + '</a> <br/>';
    }
  });

  res.render('index', {
    title: 'Qs_development',
    'routes_list': routes_list
  });
});

var answer = app.resource('api/answer', require('../resources/answer'),{ format: 'json' });
var paper = app.resource('api/paper', require('../resources/paper'),{ format: 'json' });
var papers = app.resource('api/papers', require('../resources/papers'),{ format: 'json' });
var people = app.resource('api/people', require('../resources/people'),{ format: 'json' });
var question = app.resource('api/question', require('../resources/question'),{ format: 'json' });

module.exports = true;