import Retention from '../../src/retentionPolicies/Retention';
import { LoggerMock } from '../logger/LoggerMock';
import { multipleDeploysForTheSameEnvironmentMockData, twoDeploymentForDifferentEnvironmentsMockData } from '../mock.data';

const loggerMock  = new LoggerMock(true);

describe('When projects has releases in 2 distinct environments', () => {
    it('and was requested 2 release to keep than it should return 1 release for each environment', () => {
        
        const retention = new Retention(loggerMock, multipleDeploysForTheSameEnvironmentMockData);

        const releases = retention.applyKeepRule(2);

        expect(releases.length).toBe(3);
        expect(releases[0].DeploymentId).toBe('Deployment-3');
        expect(releases[1].DeploymentId).toBe('Deployment-2');
        expect(releases[2].DeploymentId).toBe('Deployment-4');
    });

    it('and was requested 1 release to keep than it should return 1 release for each environment', () => {
        const retention = new Retention(loggerMock, multipleDeploysForTheSameEnvironmentMockData);

        const releases = retention.applyKeepRule(1);

        expect(releases.length).toBe(2);
        expect(releases[0].DeploymentId).toBe('Deployment-3');
        expect(releases[1].DeploymentId).toBe('Deployment-4');
    });

    it('request to delete all releases should return empty list', () => {
        const retention = new Retention(loggerMock, multipleDeploysForTheSameEnvironmentMockData);

        const releases = retention.applyKeepRule(0);

        expect(releases.length).toBe(0);
    });
});

describe('When a project has 2 env with 1 releases each and keep is 1', () => {
    it('should log why a release should be kept for each environment', () => {
        const mock = new LoggerMock(true);
        const infoMock = jest.spyOn(mock, 'LogInfo');

        const retention = new Retention(mock, twoDeploymentForDifferentEnvironmentsMockData);

        const releases = retention.applyKeepRule(1);

        expect(releases.length).toBe(2);
        expect(infoMock).toHaveBeenCalledTimes(2);
    });
});
