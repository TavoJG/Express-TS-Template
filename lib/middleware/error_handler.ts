import { Request, Response, NextFunction } from 'express';
import { error as ValidatorError } from 'express-openapi-validator';
import { isHttpError } from 'http-errors';

import response from '../modules/responses';
import logger from '../config/logger';

const { BadRequest, NotFound, MethodNotAllowed } = ValidatorError;

// eslint-disable-next-line
const errorHandler = (error: unknown, req: Request, res: Response, next: NextFunction) => {
	if (
		error instanceof BadRequest ||
		error instanceof NotFound ||
		error instanceof MethodNotAllowed ||
		isHttpError(error)
	) {
		return response(res, error.status || 500, error.message);
	}

	logger.error(error);
	return res.status(500).send(`Error interno del servidor: ${error}`);
};

export default errorHandler;
