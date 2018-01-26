module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'todo',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      task: {
        type: DataTypes.STRING
      },
      completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
        alowNull: false
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
        alowNull: false
      },
      deleted_at: {
        type: DataTypes.DATE
      }
    },
    {
      paranoid: true, // Doesn't delete, only modifies deleted_at
      underscored: true // Instead of camelCase
    }
  );
};
