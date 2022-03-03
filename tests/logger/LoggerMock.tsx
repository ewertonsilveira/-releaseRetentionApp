import { ILogger } from "../../src/logger/ILogger";

/**
 * Mock class for logging.
 */
export class LoggerMock implements ILogger {

    infoReturnValue: boolean

    constructor(infoReturnValue:boolean){
        this.infoReturnValue = infoReturnValue;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    LogInfo<T>(_message: string, _params: T): boolean {
        return this.infoReturnValue;
    }
}
