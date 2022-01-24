import IEnvironment from './interfaces';
import Environments from './constants';

class EnvVariables implements IEnvironment {
	public env: string;

	public port: number;

	constructor() {
		this.env = process.env.NODE_ENV || Environments.DEV;
		const port: string = process.env.PORT || '3000';
		this.port = Number(port);
	}

	public get isProductionEnvironment(): boolean {
		return this.env === Environments.PRODUCTION;
	}

	public get isDevEnvironment(): boolean {
		return this.env === Environments.DEV;
	}

	public get isTestEnvironment(): boolean {
		return this.env === Environments.TEST;
	}

	public get isLocalEnvironment(): boolean {
		return this.env === Environments.LOCAL;
	}
}

export default EnvVariables;
