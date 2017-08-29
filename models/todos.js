module.exports = function (sequelize, DataTypes) {
  const Todos = sequelize.define('Todos', {
    task_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    task_difficulty: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    task_complete: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  })

  return Todos
}