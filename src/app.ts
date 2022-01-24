import express from 'express';
import cors from 'cors';
import errorHandler from '@middleware/error_handler';
import CommonRoutes from '@routes/common_routes';
import morganMiddleware from '@middleware/morgan_middleware';
import swaggerMiddleware from '@middleware/swagger_middleware';
import validatorMiddleware from '@middleware/validator_middleware';

class App {
	public app: express.Application;

	// Registro de rutas
	private commonRoutes = new CommonRoutes();

	constructor() {
		this.app = express();
		this.config();
		this.commonRoutes.route(this.app);
		this.app.use(errorHandler);
	}

	private config(): void {
		this.app.use(morganMiddleware);
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: false }));
		this.app.use(cors());
		swaggerMiddleware(this.app);
		this.app.use(validatorMiddleware);
	}
}

export default App;
