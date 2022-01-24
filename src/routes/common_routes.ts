import { Application, Request, Response } from 'express';
import response from '@lib/responses';

export default class CommonRoutes {
	public route(app: Application) {
		// HealthCheck
		app.all('/health-check', (req: Request, res: Response) =>
			response(res, 200, 'Everything Ok :)')
		);
		// URL no registrada
		app.all('*', (req: Request, res: Response) => {
			response(res, 404, 'La URL solicitada no existe');
		});
	}
}
