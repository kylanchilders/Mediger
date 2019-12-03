/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const orgUsers =  sequelize.define('orgUsers', {
    Role: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    First_Name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Last_Name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Email: {
      type: DataTypes.STRING(50),
      isEmail: true
    },
    orgID: {
      type: DataTypes.INTEGER(11)}
  });
  return orgUsers;
};
