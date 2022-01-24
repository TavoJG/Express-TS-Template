import * as path from 'path';
import { Application } from 'express';
import YAML from 'yamljs';
import swaggerUi from 'swagger-ui-express';

const rootDir: string = path.resolve(__dirname, '../../');

const jsonSchema = YAML.load(`${rootDir}/schema/openapi.yaml`);

const swaggerMiddleware = (app: Application) =>
	app.use('/swagger', swaggerUi.serve, swaggerUi.setup(jsonSchema));

export default swaggerMiddleware;
