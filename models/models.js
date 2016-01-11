var Sequelize = require('sequelize');
var db_config = require('../config/models.json');
var db = new Sequelize(db_config.database, db_config.user, db_config.password, db_config.server);

var self = module.exports = {
  /** Sequel Object **/
  'db' : db,

  PeopleInfo: db.define('people_info',
    {
      id: {type: Sequelize.INTEGER(11).UNSIGNED, allowNull: false, primaryKey: true,autoIncrement: true},
      _ip:{type: Sequelize.STRING, len: 255, allowNull: false},
      _city:{type: Sequelize.STRING, len: 255, allowNull: false},
    },
    {
      charset: 'utf8',
      timestamps: false,
      freezeTableName: true,
      classMethods: {
      },
      instanceMethods: {
      }
    }
  ),
  Papers: db.define('papers',
    {
      id: {type: Sequelize.INTEGER(11).UNSIGNED, allowNull: false, primaryKey: true,autoIncrement: true},
      _number:{type: Sequelize.INTEGER(11), allowNull: false},
      _generate_date: {type: Sequelize.DATE, allowNull: false},
      _status: {type: Sequelize.INTEGER(11), allowNull: false},
      _title:{type:Sequelize.STRING, len: 255, allowNull: false},
      _description:{type:Sequelize.STRING, len: 255, allowNull: false},
    },
    {
      charset: 'utf8',
      timestamps: false,
      freezeTableName: true,
      classMethods: {
      },
      instanceMethods: {
      }
    }
  ),
  Paper: db.define('paper',
    {
      id: {type: Sequelize.INTEGER(11).UNSIGNED, allowNull: false, primaryKey: true,autoIncrement: true},
      people_id: {type: Sequelize.INTEGER(11).UNSIGNED, len: 11, allowNull: false},
      paper_id: {type: Sequelize.INTEGER(11).UNSIGNED, len: 11, allowNull: false},
      _start_time: {type: Sequelize.DATE, len: 0, allowNull: false},
      _end_time: {type: Sequelize.DATE, len: 0, allowNull: false},
      _status: {type: Sequelize.INTEGER(11), allowNull: false},
    },
    {
      charset: 'utf8',
      timestamps: false,
      freezeTableName: true,
      classMethods: {
      },
      instanceMethods: {
      }
    }
  ),
  Question: db.define('question',
    {
      id: {type: Sequelize.INTEGER(11).UNSIGNED, allowNull: false, primaryKey: true,autoIncrement: true},
      paper_id: {type: Sequelize.INTEGER(11).UNSIGNED, allowNull: false},
      _type: {type: Sequelize.STRING, len: 255, allowNull: true},
      _content: {type: Sequelize.STRING, len: 255, allowNull: true},
      _title: {type: Sequelize.STRING, len: 255, allowNull: true},
    },
    {
      charset: 'utf8',
      timestamps: false,
      freezeTableName: true,
      classMethods: {
      },
      instanceMethods: {
      }
    }
  ),

  Answer: db.define('answer',
    {
      id: {type: Sequelize.INTEGER(11).UNSIGNED, allowNull: false, primaryKey: true,autoIncrement: true},
      _answer:{type: Sequelize.STRING, len: 255, allowNull: false},
      question_id: {type: Sequelize.INTEGER(11).UNSIGNED, allowNull: false},
      people_id: {type: Sequelize.INTEGER(11).UNSIGNED, allowNull: false},
    },
    {
      charset: 'utf8',
      timestamps: false,
      freezeTableName: true,
      classMethods: {
      },
      instanceMethods: {
      }
    }
  ),
  
};
self.Papers.hasMany(self.Paper, {as: 'FK_PAPERS_PAPER', foreignKey: 'paper_id'});
self.Question.hasMany(self.Answer, {as: 'FK_QUESTION_ANSWER', foreignKey: 'question_id'});
self.PeopleInfo.hasMany(self.Answer, {as: 'FK_PEOPLE_ANSWER', foreignKey: 'people_id'});
self.Papers.hasMany(self.Question, {as:'FK_PAPERS_QUESTION',foreignKey: 'paper_id'});
