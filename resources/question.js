exports.index = function(req, res){
  models.Question.findAll().then(function(questions) {
    res.json(
      questions.map(function(question) {
        return question.values;
      })
    );
  });
};
exports.new = function(req, res){
  models.Question.create(req.body).then(function(){
  	res.send('{"tip":"success"}');
  },function(err){
  	console.log(err.errors)
  	res.send('{"tip":"error","error":"'+err.message+'"}')
  })
};

exports.create = function(req, res){
  models.Question.create(req.body).then(function(){
  	res.send('{"tip":"success"}');
  },function(err){
  	console.log(err.errors)
  	res.send('{"tip":"error","error":"'+err.message+'"}')
  })
};
// /api/question/:question
exports.show = function(req, res){
  models.Question.findById(req.params.question).then(function(question) {
    if(!question)
    	res.send('{"tip":"not found"}');
    else
    	res.send(question)
	
  },function(err){
  	console.log(err.errors)
  	res.send('{"tip":"error","error":"'+err.message+'"}')
  });
};

exports.edit = function(req, res){
  models.Question.find({where:{id:req.params.question}}).then(function(question) {
  },function(err){
  	console.log(err.errors)
  	res.send('{"tip":"error","error":"'+err.message+'"}')
  });
};
exports.update = function(req, res){
  models.Question.update(req.body,{where:{id:req.params.question},validate:true}).then(function() {
    res.send('{"tip":"success"}');
  },function(err){
  	console.log(err.errors)
  	res.send('{"tip":"error","error":"'+err.message+'"}')
  });
};
exports.destroy = function(req, res){
	console.log(req.params)
  models.Question.destroy({where:{id:req.params.question}}).then(function(respond) {
  	if(!respond)
  		res.send('{"tip":"not found"}');
  	else
    	res.send('{"tip":"success"}');
  },function(err){
  	console.log(err.errors)
  	res.send('{"tip":"error","error":"'+err.message+'"}')
  });
}