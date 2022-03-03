import { ILogger } from './ILogger';

/**
 * Class that deals with logging information to a server.
 */
export class Logger implements ILogger {
    /**
     * Log informational data.
     *
     * @param {string=} message - The message.
     * @param {T=} params - The extra parameters.
     */
    LogInfo<T>(message: string, params: T): boolean {
        // TODO: A simple log mechanism for now. Will require something more robust and centralized
        // Also need to abstract it as we are not referencing the interface
        // Could move to a method and mock it. It is ok for the purpose of this demo
        console.log(message, params);

        // Successful information from logging api, etc.
        return true;
    }
}
