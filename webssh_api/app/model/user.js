module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
 
  const User = app.model.define("t_user", {
    user_id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_name: STRING(255),
    user_pwd: STRING(255)
  });
 
  return User;
};