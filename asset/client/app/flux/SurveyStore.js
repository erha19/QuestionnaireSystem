var EventEmitter = require("event-emitter");
var CHANGE_EVENT = "changeEvent";
var SurveyStore = function() {
  this.emitter = new EventEmitter();
};

// Basic event handling functions

SurveyStore.prototype.emitChange = function() {
  this.emitter.emit(CHANGE_EVENT);
};

SurveyStore.prototype.addChangeListener = function(callback) {
  this.emitter.on(CHANGE_EVENT, callback);
};

SurveyStore.prototype.removeChangeListener = function(callback) {
  this.emitter.removeListener(CHANGE_EVENT, callback);
};



// Survey-specific methods
SurveyStore.prototype.saveSurvey = function(survey) {
  console.debug("TODO: fire XHR to persist survey, then invoke this.emitChange() after the XHR has completed.");
  console.log(JSON.stringify(survey))
  var str='';
  for(var i in survey.questions){
    console.log('123'+survey.questions[i].options)
    if(survey.questions[i].options)
      survey.questions[i].options=survey.questions[i].options.join(',')
    str+=JSON.stringify(survey.questions[i])
  }
  survey.questions='['+str+']';
  var url='/api/create/papers/';
  $.post(url,survey,function(data){
    console.log(data)
  })
  this.emitChange();
}

SurveyStore.prototype.deleteSurvey = function(id) {
  console.debug("TODO: delete survey", id);

  this.emitChange();
}

SurveyStore.prototype.recordSurvey = function(results) {
  console.debug("TODO: record the survey results", results);
  this.emitChange();
}

SurveyStore.prototype.listSurveys = function(callback) {
  console.debug("TODO: fetch surveys from server via XHR");
  $.ajax({url:'/api/papers/1',dataType:'json',success:function(data){
    console.log(data);
  }})
  callback([]);
}

SurveyStore.prototype.getSurvey = function(id) {
  console.debug("TODO: fetch survey by id from server via XHR");

  callback({});
}

// The SurveyStore is a singleton, so export only the one instance.
module.exports = new SurveyStore();
