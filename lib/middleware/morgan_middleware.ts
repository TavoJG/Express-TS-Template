import morgan, { StreamOptions } from 'morgan';
import logger from '../config/logger';

const stream: StreamOptions = {
	write: (message) => logger.http(message),
};

// Build the morgan middleware
const morganMiddleware = morgan(':method :url :status :res[content-length] - :response-time ms', {
	stream,
});

export default morganMiddleware;
