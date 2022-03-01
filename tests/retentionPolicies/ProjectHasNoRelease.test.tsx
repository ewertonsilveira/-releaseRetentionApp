import RetentionRule from '../../src/retentionPolicies/RetentionRule';

const releasesData = [{
  ProjectId: 'Project-1',
  DeploymentId: "Deployment-1",
  ReleasesId: 'Release-1',
  EnvironmentId: 'Environment-1',
  DeployedAt: new Date(2020,7,26)
},
{
  ProjectId: 'Project-1',
  DeploymentId: "Deployment-1",
  ReleasesId: 'Release-2',
  EnvironmentId: 'Environment-1',
  DeployedAt: new Date(2020,8,29)
}];

describe('When project has no releases than the retention should', () => {

  it('return zero releases to keep', () => {
    const retentionRule = new RetentionRule(releasesData);
    const releases = retentionRule.releasesToKeep('Project-1', 'Environment-1', 1);
    expect(releases.length).toBe(1);
  });
});
