module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    "user",
    {
      // email unique
      name: { type: Sequelize.STRING },
      email: { type: Sequelize.STRING },
      password: { type: Sequelize.STRING },
      role: { type: Sequelize.STRING },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );

  return User;
};

























