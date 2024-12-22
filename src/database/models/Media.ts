import { Model, DataTypes } from 'sequelize';
import sequelize from '..';

export default class Media extends Model{}
Media.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    type: {
      type: DataTypes.ENUM(
        'photo', 
        'video',
        'audio',
        'document',
        'text',
        'binary'
      ),
      allowNull: false
    },
    url: {
      type: DataTypes.STRING(500),
      allowNull: false,
    }
  },
  {
    sequelize,
    tableName: 'medium',
    timestamps: false
  }
);