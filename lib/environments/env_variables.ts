import IEnvironment from './interfaces';
import Environments from './constants';

class EnvVariables implements IEnvironment {
	public env: string;

	public port: number;

	public secretKey: string;

	public dbName: string;

	public dbUser: string;

	public dbHost: string;

	public dbDriver: string;

	public dbPassword: string;

	public adminEmail: string;

	public adminPassword: string;

	constructor() {
		this.env = process.env.NODE_ENV || Environments.DEV;
		const port: string = process.env.PORT || '3000';
		this.port = Number(port);
		this.secretKey = process.env.SECRET_KEY as string;
		this.dbName = (process.env.DB_NAME as string) || '';
		this.dbUser = (process.env.DB_USER as string) || '';
		this.dbHost = (process.env.DB_HOST as string) || '';
		this.dbDriver = (process.env.DB_DRIVER as string) || 'postgres';
		this.dbPassword = (process.env.DB_PASSWORD as string) || '';
		this.adminEmail = (process.env.ADMIN_EMAIL as string) || '';
		this.adminPassword = (process.env.ADMIN_PASSWORD as string) || '';
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
