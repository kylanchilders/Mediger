/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const Patient = sequelize.define('patient', {
    CheckedIn: {
      type: DataTypes.BOOLEAN(),
      defaultValue: '0'
    },
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
    Phone_Number: {
      type: DataTypes.CHAR(11),
      allowNull: false
    },
    Email: {
      type: DataTypes.STRING(50),
      isEmail: true
    },
    orgID: {
      type: DataTypes.INTEGER(11)
    },
    roomID: {
      type: DataTypes.INTEGER(11)
    }
  });
  return Patient;
};