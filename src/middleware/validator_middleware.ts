import * as path from 'path';
import * as OpenApiValidator from 'express-openapi-validator';

const rootDir: string = path.resolve(__dirname, '../../');

const validatorMiddleware = OpenApiValidator.middleware({
	apiSpec: `${rootDir}/schema/openapi.yaml`,
	validateRequests: true, // (default)
});

export default validatorMiddleware;
