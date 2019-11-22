/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const Room = sequelize.define('room', {
    Name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    orgID: {
      type: DataTypes.INTEGER(11),
      references: {
        model: 'organizations', // <<< Note, its table's name, not object name
        key: 'id' // <<< Note, its a column name
      }
    },
    Available: {
      type: DataTypes.BOOLEAN(),
      defaultValue: '1'
    }
  });
  return Room;
};