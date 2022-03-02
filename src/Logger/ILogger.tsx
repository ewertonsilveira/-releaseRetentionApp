/**
 * Contract to specify custom logs and levels.
 */
export interface ILogger<T> {
    LogInfo(msg: string, params: T[]): void;
}
