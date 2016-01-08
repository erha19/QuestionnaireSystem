/**
 * App global config
 */
var config = require('./config/app.json');
GLOBAL.config = config;

/**
* A list of all Sequelize Models available, representing the tables.
*/
var models = require('./models/models.js');

/**
* Seed tables
**/
var Sequelize = require('sequelize');
var chainer = new Sequelize.Utils.QueryChainer;
var papers = [];
chainer.add(models.Papers.create({id: '1', _number: '0',_status:'0',_generate_date:'2015-12-26'}).success(function(paper){papers.push(paper);}));
chainer.add(models.Papers.create({id: '2', _number: '0',_status:'0',_generate_date:'2015-12-26'}).success(function(paper){papers.push(paper);}));
var peoples = [];
chainer.add(models.PeopleInfo.create({id: '1',_ip:'192.168.1.1',_city:'GUANGZHOU'}).success(function(people){peoples.push(people);}));
chainer.add(models.PeopleInfo.create({id: '2',_ip:'192.168.1.1',_city:'GUANGZHOU'}).success(function(people){peoples.push(people);}));
chainer.run().success(
  function(){
    models.Question.create({id:'1',paper_id: papers[0].id, _type: '0', _content:'SOMECONTENTS',_title:'TITLE'});
  }
).error(
  function(error){
    console.log(error);
  }
);