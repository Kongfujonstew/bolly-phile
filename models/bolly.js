import { sequelize } from 'sequelize';

export default (sequelize, Datatypes) => {
  const Bolly = sequelize.define("Bolly", {
    id: {
      type: Datatypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    memberId: Datatypes.STRING,
    title: Datatypes.STRING,
    youtubeURL: Datatypes.STRING,
    streamTime: {type: Datatypes.STRING, default: "0"}
    
  });
  return Bolly;
};


