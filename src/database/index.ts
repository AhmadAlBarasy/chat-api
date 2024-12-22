import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import dbLogger from "../loggers/dbLogger";

dotenv.config({ path: './config/.env.dev' });

const DB_NAME = process.env.DB_NAME || '';
const DB_USER = process.env.DB_USER || '';
const DB_PASS = process.env.DB_PASS || '';
const DB_HOST = process.env.DB_HOST || '';
const DB_PORT = Number(process.env.DB_PORT) || 3306;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    dialect: 'mysql',
    port: DB_PORT,
    logging: dbLogger,
    host: DB_HOST,
});

export default sequelize;