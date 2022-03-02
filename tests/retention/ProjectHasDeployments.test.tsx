import { Logger } from '../../src/Logger/Logger';
import Retention from '../../src/retentionPolicies/Retention';
import { multipleDeploysForTheSameEnvironmentMockData } from '../mock.data';

jest.mock('../../src/Logger/Logger'); 
const loggerMock = Logger as jest.MockedClass<typeof Logger>;

describe('When a project has releases in 2 environments', () => {

    it('and was requested 2 release to keep than it should return 1 release for each environment', () => {
        
        const retention = new Retention(loggerMock.mock.instances[0], multipleDeploysForTheSameEnvironmentMockData);

        const releases = retention.applyKeepRule(2);

        expect(releases.length).toBe(3);
        expect(releases[0].DeploymentId).toBe('Deployment-3');
        expect(releases[1].DeploymentId).toBe('Deployment-2');
        expect(releases[2].DeploymentId).toBe('Deployment-4');        
    });

    it('and was requested 1 release to keep than it should return 1 release for each environment', () => {
        const retention = new Retention(loggerMock.mock.instances[0], multipleDeploysForTheSameEnvironmentMockData);

        const releases = retention.applyKeepRule(1);

        expect(releases.length).toBe(2);
        expect(releases[0].DeploymentId).toBe('Deployment-3');
        expect(releases[1].DeploymentId).toBe('Deployment-4');  
    });

    it('request to delete all releases should return empty list', () => {
        const retention = new Retention(loggerMock.mock.instances[0], multipleDeploysForTheSameEnvironmentMockData);

        const releases = retention.applyKeepRule(0);

        expect(releases.length).toBe(0);
    });
});
