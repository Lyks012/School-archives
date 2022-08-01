module.exports = (sequelize, Sequelize) => {
  const Correction = sequelize.define(
    "correction",
    {
      // all uniques
      name: { type: Sequelize.STRING },
      path: { type: Sequelize.STRING },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );

  Correction.associate = (models) => {
    Correction.belongsTo(models.epreuve, {});
  };

  return Correction;
};
