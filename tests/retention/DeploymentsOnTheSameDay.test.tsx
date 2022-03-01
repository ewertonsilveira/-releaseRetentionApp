import Retention from '../../src/retentionPolicies/Retention';
import { multipleDeploysOnSameDayMockData } from '../mock.data';

describe('When project has few deployments on same environment for the same day', () => {
  it('should sort by the last 2 most recent deployments', () => {
    const retention = new Retention(multipleDeploysOnSameDayMockData);

    const releases = retention.applyKeepRule(
      'Project-1',
      'Environment-1',
      2,
    );

    expect(releases.length).toBe(2);
    expect(releases[0].DeploymentId).toBe('Deployment-4');
    expect(releases[0].ReleasesId).toBe('Release-2');

    expect(releases[1].DeploymentId).toBe('Deployment-3');
    expect(releases[1].ReleasesId).toBe('Release-1');
  });
});
