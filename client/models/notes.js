/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const Note = sequelize.define('notes', {
    Note: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Date: {
      type: DataTypes.DATE(),
      allowNull: false
    },
    userID: {
      type: DataTypes.INTEGER(11)
    },
    patientID: {
      type: DataTypes.INTEGER(11)
    }
  });
  return Note;
};