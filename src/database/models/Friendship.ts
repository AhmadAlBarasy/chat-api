import { Model, DataTypes } from "sequelize";
import sequelize from "..";

export default class Friendship extends Model {}

Friendship.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    status: {
      type: DataTypes.ENUM(
          'user1_req',
          'user2_req',
          'friends',
          'blocked'
      ),
      allowNull: false,
    },
    date_sent: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    date_accepted: {
      type: DataTypes.DATE,
    }
  },
  {
    sequelize,
    tableName: 'friendships',
    timestamps: false,
  }
);