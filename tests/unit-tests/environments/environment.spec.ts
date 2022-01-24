import env from '@environments/index';
import Environments from '@environments/constants';

describe('Environment', () => {
	const instance = env;

	it('should get the current environment', async () => {
		expect(instance.env).toBe(Environments.TEST);
	});

	it('should check if environement is production or not', async () => {
		const result = instance.isProductionEnvironment;
		expect(result).toBe(false);
	});

	it('should get the correct env variables', async () => {
		const { port } = instance;
		expect(port).toBe(3000);
	});
});
