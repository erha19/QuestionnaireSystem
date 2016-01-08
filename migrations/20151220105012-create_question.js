module.exports = {
  up: function(migration, DataTypes) {
    migration.createTable(
      'question',
      {
        id: {
          type: DataTypes.INTEGER,
          unique: true,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
        },
        paper_id:{
          type: DataTypes.INTEGER,
          unique: true,
          allowNull: false,
        },
        _type: {
          type: DataTypes.STRING,
          len:255,
          allowNull: false
        },
        _content: {
          type: DataTypes.STRING,
          len:255,
          allowNull: false
        },
        _title: {
          type: DataTypes.STRING,
          len:255,
          allowNull: false
        },
      },
      {}
    )
  },
  down: function(migration) {
    migration.dropTable('question');
  }
}