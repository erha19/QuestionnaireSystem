module.exports = {
  up: function(migration, DataTypes) {
    migration.createTable(
      'paper',
      {
        id: {
          type: DataTypes.INTEGER,
          unique: true,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
        },
        people_id: {
          type: DataTypes.INTEGER,
          len:11,
          allowNull: false
        },
        paper_id: {
          type: DataTypes.INTEGER,
          len:11,
          allowNull: false
        },
        _status: {
          type: DataTypes.INTEGER,
          len:11,
          allowNull: false
        },
        _start_time: {
          type: DataTypes.DATE,
          allowNull: false
        },
        _end_time: {
          type: DataTypes.DATE,
          allowNull: false
        },
      },
      {}
    )
  },
  down: function(migration) {
    migration.dropTable('paper');
  }
}