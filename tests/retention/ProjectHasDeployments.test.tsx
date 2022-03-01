import Retention from '../../src/retentionPolicies/Retention';
import { multipleDeploysForTheSameEnvironmentMockData } from '../mock.data';

describe('When project has few deployments for the same environment', () => {
  it('should return 2 releases to keep', () => {
    const retention = new Retention(
      multipleDeploysForTheSameEnvironmentMockData,
    );

    const releases = retention.applyKeepRule(
      'Project-1',
      'Environment-1',
      2,
    );

    expect(releases.length).toBe(2);
    expect(releases[0].DeploymentId).toBe('Deployment-3');
    expect(releases[1].DeploymentId).toBe('Deployment-2');
  });

  it('should return 3 releases to keep', () => {
    const retention = new Retention(
      multipleDeploysForTheSameEnvironmentMockData,
    );

    const releases = retention.applyKeepRule(
      'Project-1',
      'Environment-1',
      3,
    );

    expect(releases.length).toBe(3);
    expect(releases[0].DeploymentId).toBe('Deployment-3');
    expect(releases[1].DeploymentId).toBe('Deployment-2');
    expect(releases[2].DeploymentId).toBe('Deployment-1');
  });

  it('should return zero releases to keep', () => {
    const retention = new Retention(
      multipleDeploysForTheSameEnvironmentMockData,
    );

    const releases = retention.applyKeepRule(
      'Project-1',
      'Environment-1',
      3,
    );

    expect(releases.length).toBe(3);
    expect(releases[0].DeploymentId).toBe('Deployment-3');
    expect(releases[1].DeploymentId).toBe('Deployment-2');
    expect(releases[2].DeploymentId).toBe('Deployment-1');
  });
});
