import BaseError from './BaseError';

class NotFoundError<T = any> extends BaseError<T> {
	public readonly name = 'NotFoundError';

	constructor(message: string, code = 'NOT_FOUND_ERROR', details?: T) {
		super(message, code, details);
	}
}