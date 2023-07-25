import BaseError from './BaseError';

export default class ValidationError<T = any> extends BaseError<T> {
	public readonly name = 'ValidationError';

	constructor(message: string, code = 'VALIDATION_ERROR', details?: T) {
		super(message, code, details);
	}
}