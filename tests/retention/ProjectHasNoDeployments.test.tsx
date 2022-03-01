import Retention from '../../src/retentionPolicies/Retention';
import { multipleDeploysForTheSameEnvironmentMockData, singleDeploymentMockData } from '../mock.data';

describe('Retention policy', () => {

  it('When project has no deployments for a specific environment should return empty list', () => {
    const retention = new Retention(singleDeploymentMockData);

    const releases = retention.applyKeepRule(
      'Project-1',
      'Environment-1',
      1,
    );

    expect(releases.length).toBe(0);
  });
  
});

  it('When project has no releases should return empty list', () => {
    const releases = new Retention([]).applyKeepRule(
      'Project-1',
      'Environment-1',
      1,
    );

    expect(releases.length).toBe(0);
});

describe('When project has few deployments for the same environment', () => {
  it('should return zero if environment does not match', () => {
    const retention = new Retention(
      multipleDeploysForTheSameEnvironmentMockData,
    );

    const releases = retention.applyKeepRule(
      'Project-1',
      'Environment-6',
      1,
    );

    expect(releases.length).toBe(0);
  });
});