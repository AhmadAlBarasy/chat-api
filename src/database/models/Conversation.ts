import { Model, DataTypes } from "sequelize";
import sequelize from "..";

export default class Conversation extends Model {}

Conversation.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM('private', 'group'),
    },
    date_created: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    description: {
      type: DataTypes.STRING(500)
    },
    invitation_token: {
      type: DataTypes.STRING(16),
      unique: true
    }
  },
  {
    sequelize,
    tableName: 'conversations',
    timestamps: false,
  }
);