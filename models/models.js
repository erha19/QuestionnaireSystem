var Sequelize = require('sequelize');
var db_config = require('../config/models.json');
var db = new Sequelize(db_config.database, db_config.user, db_config.password, db_config.server);

var self = module.exports = {
  /** Sequel Object **/
  'db' : db,

  Question: db.define('question',
    {
      id: {type: Sequelize.INTEGER, allowNull: false, primaryKey: true},
      paper_id: {type: Sequelize.INTEGER, allowNull: false},
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
      id: {type: Sequelize.INTEGER, allowNull: false, primaryKey: true},
      _answer:{type: Sequelize.STRING, len: 255, allowNull: false},
      question_id: {type: Sequelize.INTEGER, allowNull: false},
      people_id: {type: Sequelize.INTEGER, allowNull: false},
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
  PeopleInfo: db.define('people_info',
    {
      id: {type: Sequelize.INTEGER, allowNull: false, primaryKey: true},
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
      id: {type: Sequelize.INTEGER, allowNull: false, primaryKey: true},
      _number:{type: Sequelize.INTEGER, allowNull: false},
      _generate_date: {type: Sequelize.DATE, allowNull: false},
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
  Paper: db.define('paper',
    {
      id: {type: Sequelize.INTEGER, allowNull: false, primaryKey: true},
      people_id: {type: Sequelize.INTEGER, len: 11, allowNull: false},
      paper_id: {type: Sequelize.INTEGER, len: 11, allowNull: false},
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
  )
};
self.Papers.hasMany(self.Paper, {as: 'paper', foreignKey: 'paper_id'});
self.Question.hasMany(self.Answer, {as: 'answer', foreignKey: 'question_id'});
self.PeopleInfo.hasMany(self.Answer, {as: 'answer', foreignKey: 'people_id'});
self.Papers.hasMany(self.Question, {as: 'question', foreignKey: 'paper_id'});
self.Paper.belongsTo(self.Papers, {as: 'papers', foreignKey: 'paper_id'});
self.Answer.belongsTo(self.Question, {as: 'question', foreignKey: 'question_id'});
self.Answer.belongsTo(self.PeopleInfo, {as: 'people_info', foreignKey: 'people_id'});
self.Question.belongsTo(self.Papers, {as: 'papers', foreignKey: 'paper_id'});
