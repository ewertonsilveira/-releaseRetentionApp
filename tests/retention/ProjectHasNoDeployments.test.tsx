import RetentionRule from '../../src/retentionPolicies/RetentionRule';
import { singleDeploymentMockData } from '../mock.data';

describe('When project has no releases for a specific environment', () => {
  it('should return zero releases', () => {
    const retentionRule = new RetentionRule(singleDeploymentMockData);

    const releases = retentionRule.releasesToKeep(
      'Project-1',
      'Environment-1',
      1,
    );

    expect(releases.length).toBe(0);
  });
});

describe('When release has no deployments for that environment', () => {
  it('should return zero releases', () => {
    const releases = new RetentionRule([]).releasesToKeep(
      'Project-1',
      'Environment-1',
      1,
    );

    expect(releases.length).toBe(0);
  });
});
