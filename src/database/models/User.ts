import { Model, DataTypes } from "sequelize";
import sequelize from "..";

export default class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.STRING(50),
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    bio: {
      type: DataTypes.STRING(300),
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(320),
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    dateOfBirth: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'date_of_birth',
    },
    dateJoined: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'date_joined',
    },
    lastOnline: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'last_online',
    },
  },
  {
    sequelize,
    tableName: 'users',
    timestamps: false,
  }
);