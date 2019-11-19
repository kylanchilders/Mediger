/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const Patient = sequelize.define('patient', {
    First_Name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Last_Name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Date_Of_Birth: {
      type: DataTypes.DATE(),
      allowNull: false
    },
    Address: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    City: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    State: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    Zip_Code: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    Email: {
      type: DataTypes.STRING(50),
      isEmail: true
    },
    orgID: {
      type: DataTypes.INTEGER(11),
      references: {
        model: 'organizations', // <<< Note, its table's name, not object name
        key: 'id' // <<< Note, its a column name
      }
    },
    roomID: {
      type: DataTypes.INTEGER(11),
      references: {
        model: 'rooms', // <<< Note, its table's name, not object name
        key: 'id' // <<< Note, its a column name
      }
    }
  });
  return Patient;
};