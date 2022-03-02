import { ILogger } from "./ILogger";

/**
 * Class that deals with logging information to a server.
 */
export class Logger<T> implements ILogger<T> {
    LogInfo(msg: string, params: T[]): void {

        // TODO: simple log mechanism for now. Will require something more robust and centralized
        console.log(msg, params);
    }
  }