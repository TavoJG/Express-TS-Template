interface IEnvironment {
	env: string;
	port: number;
	isProductionEnvironment: boolean;
	isDevEnvironment: boolean;
	isTestEnvironment: boolean;
	isLocalEnvironment: boolean;
}

export default IEnvironment;
