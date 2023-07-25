export default abstract class BaseError<T = any> extends Error {
  public abstract name: string;
  public readonly code: string;
  public readonly details?: T;

  protected constructor(message: string, code: string, details?: T) {
    super(message);
    if (typeof code !== 'string' || code.length === 0) {
      throw new Error('Error code must be a non-empty string.');
    }
    this.code = code;
    this.details = details;
  }
}