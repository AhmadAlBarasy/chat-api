import { Model, DataTypes } from "sequelize";
import sequelize from "..";

export default class Participation extends Model {}

Participation.init(
  {
    role: {
      type: DataTypes.ENUM(
        'member',
        'admin'
      ),
    }
  },
  {
    sequelize,
    tableName: 'participations',
    timestamps: false,
  }
);