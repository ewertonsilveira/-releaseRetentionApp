import { IRelease } from '../../src/retentionPolicies/IReleases.d';
import RetentionRule from '../../src/retentionPolicies/RetentionRule';

// const releasesData = [{
//   ProjectId: 'Project-1',
//   EnvironmentId: 'Environment-1',
//   ReleasesId: 'Release-1',
//   DeploymentId: "Deployment-1",
//   DeployedAt: new Date(2020,7,26)
// },
// {
//   ProjectId: 'Project-1',
//   EnvironmentId: 'Environment-1',
//   ReleasesId: 'Release-2',
//   DeploymentId: "Deployment-1",
//   DeployedAt: new Date(2020,8,29)
// }];

describe('When project has no releases for a specific environment', () => {
  it('should return zero releases', () => {
    const mockData:IRelease[] = [{
        ProjectId: 'Project-1',
        EnvironmentId: 'Environment-2',
        ReleasesId: 'Release-2',
        DeploymentId: "Deployment-1",
        DeployedAt: new Date(2020,8,29)
      }];
    const retentionRule = new RetentionRule(mockData);

    const releases = retentionRule.releasesToKeep('Project-1', 'Environment-1', 1);

    expect(releases.length).toBe(0);
  });
});

describe('When release has no deployments for that environment', () => {
  it('should return zero releases', () => {
    
    const releases = new RetentionRule([]).releasesToKeep('Project-1', 'Environment-1', 1);

    expect(releases.length).toBe(0);
  });
});
