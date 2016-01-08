exports.index = function(req, res){
  models.PeopleInfo.findAll().then(function(peoples) {
    res.json(
      peoples.map(function(people) {
        return people.values;
      })
    );
  });
};
exports.new = function(req, res){
  models.PeopleInfo.create(req.body).then(function(){
  	res.send('{"tip":"success"}');
  },function(err){
    console.log(err.errors)
  	res.send('{"tip":"error","error":"'+err.message+'"}')
  })
};

exports.create = function(req, res){
  models.PeopleInfo.create(req.body).then(function(){
  	res.send('{"tip":"success"}');
  },function(err){
    console.log(err.errors)
  	res.send('{"tip":"error","error":"'+err.message+'"}')
  })
};
// /api/people/:person
exports.show = function(req, res){
  models.PeopleInfo.find({where:{id:req.params.person}}).then(function(people) {
    if(!people)
    	res.send('{"tip":"not found"}');
    else
    	res.send(people)
	
  },function(err){
    console.log(err.errors)
  	res.send('{"tip":"error","error":"'+err.message+'"}')
  });
};

exports.edit = function(req, res){
  models.PeopleInfo.find({where:{id:req.params.person}}).then(function(people) {
    res.send(people)
  },function(err){
    console.log(err.errors)
  	res.send('{"tip":"error","error":"'+err.message+'"}')
  });
};
exports.update = function(req, res){
  models.PeopleInfo.update(req.body,{where:{id:req.params.person},validate:true}).then(function() {
    res.send('{"tip":"success"}');
  },function(err){
    console.log(err.errors)
  	res.send('{"tip":"error","error":"'+err.message+'"}')
  });
};

exports.destroy = function(req, res){
  models.PeopleInfo.destroy({where:{id:req.params.person}}).then(function(respond) {
  	if(!respond)
  		res.send('{"tip":"not found"}');
  	else
    	res.send('{"tip":"success"}');
  },function(err){
    console.log(err.errors)
  	res.send('{"tip":"error","error":"'+err.message+'"}')
  });
}