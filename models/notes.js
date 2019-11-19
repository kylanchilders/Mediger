/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const Note = sequelize.define('note', {
    Note: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Date: {
      type: DataTypes.DATE(),
      allowNull: false
    },
    userID: {
      type: DataTypes.INTEGER(11),
      references: {
        model: 'orgUsers', // <<< Note, its table's name, not object name
        key: 'id' // <<< Note, its a column name
      }
    },
    patientID: {
      type: DataTypes.INTEGER(11),
      references:
      {
        model: 'patients', // <<< Note, its table's name, not object name
        key: 'id' // <<< Note, its a column name
      }
    }
  });
  return Note;
};