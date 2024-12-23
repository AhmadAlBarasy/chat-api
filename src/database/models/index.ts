import logger from "../../loggers/appLogger";
import User from "./User";
import Message from "./Message";
import Media from "./Media";
import Conversation from "./Conversation";
import Participation from "./Participation";
import Friendship from "./Friendship";
import sequelize from "..";

/* Associations */
Message.hasMany(Media, {
  foreignKey: 'message_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});

Conversation.hasMany(Message, {
  foreignKey: 'conversation_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});

User.belongsToMany(Conversation, {
  through: Participation,
  foreignKey: 'user_id'
});

Conversation.belongsToMany(User, {
  through: Participation,
  foreignKey: 'conversation_id'
});

User.hasMany(Friendship, {
  foreignKey: 'user_1',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});

Friendship.belongsTo(User, {
  foreignKey: 'user_1',
});

User.hasMany(Friendship, {
  foreignKey: 'user_2',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});

Friendship.belongsTo(User, {
  foreignKey: 'user_2',
});

(async () => {
  try {
    await sequelize.sync({ force: true });
    logger.info('Database synchronized successfully.');
  }
  catch(error: any){
    logger.error('An error happened while sycning changes to the database: ', error.message);
    process.exit(1);
  }
})();

export {
  User,
  Friendship,
  Participation,
  Conversation,
  Message,
  Media,
  sequelize,
};
