import { Response } from 'express';
import statusCode from './status_codes';

const response = (res: Response, code: number, message: string) => {
	res.status(code).json({
		code,
		status: statusCode(code),
		message,
	});
};

export default response;
