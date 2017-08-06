import { sequelize } from 'sequelize';

export default (sequelize, Datatypes) => {
  const Message = sequelize.define("Message", {
    id: {
      type: Datatypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    time: Datatypes.TIME,
    memberId: Datatypes.STRING,
    bollyId: Datatypes.STRING,
    text: Datatypes.STRING,
  });
  return Message;
};
