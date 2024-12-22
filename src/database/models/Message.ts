import { Model, DataTypes } from 'sequelize';
import sequelize from '..';

export default class Message extends Model{}
Message.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.STRING(50),
    },
    content: {
      type: DataTypes.TEXT,
    },
    date_sent: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    status: {
      type: DataTypes.ENUM('visible', 'deleted'),
      defaultValue: 'visible'
    }
  },
  {
    sequelize,
    tableName: 'messages',
    timestamps: false
  }
);