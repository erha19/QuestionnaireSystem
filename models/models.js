var Sequelize = require('sequelize');
var db_config = require('../config/models.json');
var db = new Sequelize(db_config.database, db_config.user, db_config.password, db_config.server);

var self = module.exports = {
  /** Sequel Object **/
  'db' : db,

  PeopleInfo: db.define('people_info',
    {
      id: {type: Sequelize.INTEGER.UNSIGNED, allowNull: false, primaryKey: true,unique: true,autoIncrement: true},
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
      id: {type: Sequelize.INTEGER.UNSIGNED, allowNull: false, primaryKey: true,unique: true,autoIncrement: true},
      _number:{type: Sequelize.INTEGER, allowNull: false},
      _generate_date: {type: Sequelize.DATE, allowNull: false},
      _status: {type: Sequelize.INTEGER, allowNull: false},
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
      id: {type: Sequelize.INTEGER.UNSIGNED, allowNull: false, primaryKey: true,unique: true,autoIncrement: true},
      people_id: {type: Sequelize.INTEGER.UNSIGNED, len: 11, allowNull: false},
      paper_id: {type: Sequelize.INTEGER.UNSIGNED, len: 11, allowNull: false},
      _start_time: {type: Sequelize.DATE, len: 0, allowNull: false},
      _end_time: {type: Sequelize.DATE, len: 0, allowNull: false},
      _status: {type: Sequelize.INTEGER, allowNull: false},
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
      id: {type: Sequelize.INTEGER.UNSIGNED, allowNull: false, primaryKey: true,unique: true,autoIncrement: true},
      paper_id: {type: Sequelize.INTEGER.UNSIGNED, allowNull: false},
      _type: {type: Sequelize.STRING, len: 255, allowNull: false},
      _content: {type: Sequelize.STRING, len: 255, allowNull: false},
      _title: {type: Sequelize.STRING, len: 255, allowNull: false},
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
      id: {type: Sequelize.INTEGER.UNSIGNED, allowNull: false, primaryKey: true,unique: true,autoIncrement: true},
      _answer:{type: Sequelize.STRING, len: 255, allowNull: false},
      question_id: {type: Sequelize.INTEGER.UNSIGNED, allowNull: false},
      people_id: {type: Sequelize.INTEGER.UNSIGNED, allowNull: false},
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
self.Paper.hasMany(self.Papers, {as: 'papers', foreignKey: 'paper_id'});
self.Answer.hasMany(self.Question, {as: 'answer', foreignKey: 'question_id'});
self.Answer.hasMany(self.PeopleInfo, {as: 'answer', foreignKey: 'people_id'});
self.Question.hasMany(self.Papers, {as: 'question', foreignKey: 'paper_id'});
