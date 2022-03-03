/**
 * Contract to specify custom logs and levels.
 */
export interface ILogger {
    LogInfo<T>(msg: string, params: T): boolean;
}
