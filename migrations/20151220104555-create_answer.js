module.exports = {
  up: function(migration, DataTypes) {
    migration.createTable(
      'answer',
      {
        id: {
          type: DataTypes.INTEGER,
          unique: true,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
        },
        question_id:{
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        people_id:{
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        _answer: {
          type: DataTypes.STRING,
          len:255,
          allowNull: false
        },
      },
      {}
    )
  },
  down: function(migration) {
    migration.dropTable('answer');
  }
}