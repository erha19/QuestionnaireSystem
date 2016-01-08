exports.index = function(req, res){
  models.Papers.findAll().then(function(papers) {
    res.json(
      papers.map(function(paper) {
        return paper.values;
      })
    );
  });
};
exports.new = function(req, res){
  models.Papers.create(req.body).then(function(){
  	res.send('{"tip":"success"}');
  },function(err){
    console.log(err.errors)
  	res.send('{"tip":"error","error":"'+err.message+'"}')
  })
};

exports.create = function(req, res){
  models.Papers.create(req.body).then(function(){
  	res.send('{"tip":"success"}');
  },function(err){
    console.log(err.errors)
  	res.send('{"tip":"error","error":"'+err.message+'"}')
  })
};
// /api/papers/:paper
exports.show = function(req, res){
  models.Papers.find({where:{id:req.params.paper}}).then(function(paper) {
    if(!paper)
    	res.send('{"tip":"not found"}');
    else
    	res.send(paper)
	
  },function(err){
    console.log(err.errors)
  	res.send('{"tip":"error","error":"'+err.message+'"}')
  });
};

exports.edit = function(req, res){
  models.Papers.find({where:{id:req.params.paper}}).then(function(paper) {
    res.send(paper)
  },function(err){
    console.log(err.errors)
  	res.send('{"tip":"error","error":"'+err.message+'"}')
  });
};
exports.update = function(req, res){
  models.Papers.update(req.body,{where:{id:req.params.paper},validate:true}).then(function() {
    res.send('{"tip":"success"}');
  },function(err){
    console.log(err.errors)
  	res.send('{"tip":"error","error":"'+err.message+'"}')
  });
};

exports.destroy = function(req, res){
  models.Papers.destroy({where:{id:req.params.paper}}).then(function(respond) {
  	if(!respond)
  		res.send('{"tip":"not found"}');
  	else
    	res.send('{"tip":"success"}');
  },function(err){
    console.log(err.errors)
  	res.send('{"tip":"error","error":"'+err.message+'"}')
  });
}