module.exports = (sequelize, Sequelize) => {
  const Epreuve = sequelize.define(
    "epreuve",
    {
      // name and path unique
      name: { type: Sequelize.STRING },
      date: { type: Sequelize.DATE },
      path: { type: Sequelize.STRING },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );

  Epreuve.associate = (models) => {
    Epreuve.hasMany(models.correction);
  };

  return Epreuve;
};
