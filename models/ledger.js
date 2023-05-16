const { DataTypes } = require("sequelize");
const db = require("../connect");

const ledger = db.define(
  "ledger",
  {
    entryId: {
      type: DataTypes.STRING(8),
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    clicks: {
      type: DataTypes.INTEGER.UNSIGNED,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = {
  ledger,
};
