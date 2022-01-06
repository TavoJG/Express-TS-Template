import * as path from 'path';
import { existsSync, mkdirSync } from 'fs';
import { Logger } from 'winston';
import winston = require('winston');
import environment from '../environments';
import Environments from '../environments/constants';

const rootDir: string = path.resolve(__dirname, '../../');

const { env } = environment;
const logDir = `${rootDir}/logs`;

if (!existsSync(logDir)) {
	mkdirSync(logDir);
}

const levels = {
	error: 0,
	warn: 1,
	info: 2,
	http: 3,
	debug: 4,
};

const level = () => {
	switch (env) {
		case Environments.PRODUCTION:
			return 'warn';
		case Environments.DEV:
		case Environments.TEST:
		default:
			return 'debug';
	}
};

const colors = {
	error: 'red',
	warn: 'yellow',
	info: 'green',
	http: 'magenta',
	debug: 'white',
};

winston.addColors(colors);

const format = winston.format.combine(
	winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
	winston.format.colorize({ all: true }),
	winston.format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
);

const transports = [
	new winston.transports.Console(),
	new winston.transports.File({
		filename: `${logDir}/error.log`,
		level: 'error',
	}),
	new winston.transports.File({ filename: `${logDir}/all.log` }),
];

const logger: Logger = winston.createLogger({
	level: level(),
	levels,
	format,
	transports,
});

export default logger;
