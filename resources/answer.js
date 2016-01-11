exports.index = function(req, res){
  models.Answer.findAndCountAll().then(function(answers) {
    res.json(
      answers.rows.map(function(answer) {
        return answer.dataValues;
      })
    );
  });
};
exports.new = function(req, res){
  models.Answer.create(req.body).then(function(){
  	res.send('{"tip":"success"}');
  },function(err){
    console.log(err.errors)
  	res.send('{"tip":"error","error":"'+err.message+'"}')
  })
};

exports.create = function(req, res){
  models.Answer.create(req.body).then(function(){
  	res.send('{"tip":"success"}');
  },function(err){
    console.log(err.errors)
  	res.send('{"tip":"error","error":"'+err.message+'"}')
  })
};
// /api/answer/:answer
exports.show = function(req, res){
  models.Answer.findById(req.params.answer).then(function(answer) {
    if(!answer)
    	res.send('{"tip":"not found"}');
    else
    	res.send(answer)
	
  },function(err){
    console.log(err.errors)
  	res.send('{"tip":"error","error":"'+err.message+'"}')
  });
};

exports.edit = function(req, res){
  models.Answer.find({where:{id:req.params.answer}}).then(function(answer) {
    res.send(answer)
  },function(err){
    console.log(err.errors)
  	res.send('{"tip":"error","error":"'+err.message+'"}')
  });
};
exports.update = function(req, res){
  models.Answer.update(req.body,{where:{id:req.params.answer},validate:true}).then(function() {
    res.send('{"tip":"success"}');
  },function(err){
    console.log(err.errors)
  	res.send('{"tip":"error","error":"'+err.message+'"}')
  });
};

exports.destroy = function(req, res){
  models.Answer.destroy({where:{id:req.params.answer}}).then(function(respond) {
  	if(!respond)
  		res.send('{"tip":"not found"}');
  	else
    	res.send('{"tip":"success"}');
  },function(err){
    console.log(err.errors)
  	res.send('{"tip":"error","error":"'+err.message+'"}')
  });
}