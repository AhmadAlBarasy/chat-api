import { magenta } from 'colorette';
import appLogger from './appLogger';

const dbLogger = (message: string): void => {
  // to colorize the logs of the database to differentiate them from the rest of the logs
  // logger.info(magenta(`[Sequelize]: ${message}`));
  appLogger.info(`[Sequelize]: ${message}`);
};

export default dbLogger;