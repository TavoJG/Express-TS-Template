const statusCodes = (code: number) => {
	switch (code) {
		case 200:
			return 'OK';
		case 201:
			return 'Created';
		case 202:
			return 'Accepted';
		case 204:
			return 'No Content';
		case 400:
			return 'Bad Request';
		case 401:
			return 'Unauthorized';
		case 403:
			return 'Forbidden';
		case 404:
			return 'Not Found';
		case 405:
			return 'Method not Allowed';
		case 500:
			return 'Internal Server Error';
		default:
			return 'Unknown HTTP code';
	}
};

export default statusCodes;
