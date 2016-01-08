module.exports = {
  up: function(migration, DataTypes) {
    migration.createTable(
      'people_info',
      {
        id: {
          type: DataTypes.INTEGER,
          unique: true,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
        },
        _ip: {
          type: DataTypes.STRING,
          len:255,
          allowNull: false
        },
        _city: {
          type: DataTypes.STRING,
          len:255,
          allowNull: false
        },
      },
      {}
    )
  },
  down: function(migration) {
    migration.dropTable('people_info');
  }
}