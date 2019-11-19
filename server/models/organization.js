/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    const Organization =  sequelize.define('organization', {
      Name: {
        type: DataTypes.STRING(50),
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
      Zip_Code:{
        type: DataTypes.INTEGER(5),
        allowNull:false
      },
      Email: {
        type: DataTypes.STRING(50),
        isEmail: true
      }
    });
    return Organization;
  };