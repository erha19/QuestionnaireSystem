var _ = require('lodash-node');
var formatDate = function (date) {
  return date.getFullYear()+'-'+(date.getMonth()+1) + '-' + date.getDate();
}
exports.create = function(req, res){
  models.Papers.create({_title:req.body.title,_description:req.body.introduction,_number:0,_status:0,_generate_date:formatDate(new Date())}).then(function(data){
  	var queue=[];
  		req.body.questions=JSON.parse(req.body.questions)
  		_.each(req.body.questions,function(q){
  		if(q.options){
  			queue.push(models.Question.create({_type:q.type,_title:q.description,paper_id:data.dataValues.id,_content:q.options}))
      }
  		else
  			queue.push(models.Question.create({_type:q.type,_title:q.description,paper_id:data.dataValues.id,_content:''}))
  		})
  		res.send('{"tip":"success"}');
  },function(err){
    console.log(err.errors)
  	res.send('{"tip":"error","error":"'+err.message+'"}')
  })
};