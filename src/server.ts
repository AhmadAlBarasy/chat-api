import app from "./app";
import dotenv from "dotenv";
import logger from "./loggers/appLogger";
// import { syncAssociations, syncModels } from "./database/models";
import './database/models';

dotenv.config({ path: './config/.env' });
dotenv.config({ path: './config/.env.dev' });

const PORT: number = Number(process.env.PORT) || 3000;

const startServer = async () => {
  try {
    app.listen(PORT, () => logger.info(`Server is listening on port ${PORT}`));
  }
  catch(error: any){
    logger.error(`Something wrong happened :( ${error.message}`);
    process.exit(1);
  }
};

startServer();