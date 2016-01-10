module.exports = {
  up: function(migration, DataTypes) {
    migration.createTable(
      'papers',
      {
        id: {
          type: DataTypes.INTEGER,
          unique: true,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
        },
        _number: {
          type: DataTypes.INTEGER,
          len:11,
          allowNull: false
        },
        _status: {
          type: DataTypes.INTEGER,
          len:11,
          allowNull: false
        },
        _generate_date: {
          type: DataTypes.DATE,
          allowNull: false
        },
        _title: {
          type: DataTypes.STRING,
          len:255,
          allowNull: false
        },
        _description: {
          type: DataTypes.STRING,
          len:255,
          allowNull: false
        },
      },
      {}
    )
  },
  down: function(migration) {
    migration.dropTable('papers');
  }
}