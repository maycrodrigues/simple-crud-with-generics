import BaseError from './BaseError';

class EntityAlreadyExistsError<T = any> extends BaseError<T> {
	public readonly name = 'EntityAlreadyExistsError';

	constructor(message: string, code = 'ENTITY_ALREADY_EXISTS_ERROR', details?: T) {
		super(message, code, details);
	}
}