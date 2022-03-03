import { Logger } from '../../src/logger/Logger';
import { twoDeploymentForDifferentEnvironmentsMockData } from '../mock.data';

describe('Logger component', () => {
    
    it('should log reason for deployment', () => {
        const logger = new Logger();

        const successfull = logger.LogInfo(
            `Deployments were kept as part or retention policy run on ${new Date()}`,
            twoDeploymentForDifferentEnvironmentsMockData,
        );

        expect(successfull).toBe(true);
    });
});
