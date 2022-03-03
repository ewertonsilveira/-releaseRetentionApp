import Retention from '../../src/retentionPolicies/Retention';
import { LoggerMock } from '../logger/LoggerMock';
import { multipleDeploysOnSameDayMockData } from '../mock.data';

describe('When a project has multiple deployments for same environment on the same day', () => {
    it('should sort by the last 2 most recent deployments', () => {
        const retention = new Retention(new LoggerMock(true), multipleDeploysOnSameDayMockData);

        const releases = retention.applyKeepRule(2);

        expect(releases.length).toBe(2);
        expect(releases[0].DeploymentId).toBe('Deployment-4');
        expect(releases[0].ReleasesId).toBe('Release-2');

        expect(releases[1].DeploymentId).toBe('Deployment-3');
        expect(releases[1].ReleasesId).toBe('Release-1');
    });
});
