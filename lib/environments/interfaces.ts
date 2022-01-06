interface IEnvironment {
	env: string;
	port: number;
	secretKey: string;
	dbName: string;
	dbUser: string;
	dbHost: string;
	dbDriver: string;
	isProductionEnvironment: boolean;
	isDevEnvironment: boolean;
	isTestEnvironment: boolean;
	isLocalEnvironment: boolean;
}

export default IEnvironment;
