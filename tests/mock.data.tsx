import { IRelease } from '../src/retentionPolicies/IReleases.d';

export const multipleDeploysForTheSameEnvironmentMockData: IRelease[] = [
  {
    ProjectId: 'Project-1',
    EnvironmentId: 'Environment-1',
    ReleasesId: 'Release-1',
    DeploymentId: 'Deployment-1',
    DeployedAt: new Date(2020, 4, 28, 9),
  },
  {
    ProjectId: 'Project-1',
    EnvironmentId: 'Environment-1',
    ReleasesId: 'Release-1',
    DeploymentId: 'Deployment-2',
    DeployedAt: new Date(2020, 5, 21, 9),
  },
  {
    ProjectId: 'Project-1',
    EnvironmentId: 'Environment-1',
    ReleasesId: 'Release-1',
    DeploymentId: 'Deployment-3',
    DeployedAt: new Date(2020, 6, 29, 9),
  },
  {
    ProjectId: 'Project-1',
    EnvironmentId: 'Environment-2',
    ReleasesId: 'Release-1',
    DeploymentId: 'Deployment-4',
    DeployedAt: new Date(2020, 7, 30, 9),
  },
];

export const multipleDeploysOnSameDayMockData: IRelease[] = [
  {
    ProjectId: 'Project-1',
    EnvironmentId: 'Environment-1',
    ReleasesId: 'Release-1',
    DeploymentId: 'Deployment-1',
    DeployedAt: new Date(2020, 3, 21, 8),
  },
  {
    ProjectId: 'Project-1',
    EnvironmentId: 'Environment-1',
    ReleasesId: 'Release-1',
    DeploymentId: 'Deployment-2',
    DeployedAt: new Date(2020, 3, 21, 9),
  },
  {
    ProjectId: 'Project-1',
    EnvironmentId: 'Environment-1',
    ReleasesId: 'Release-2',
    DeploymentId: 'Deployment-4',
    DeployedAt: new Date(2020, 3, 21, 11),
  },
  {
    ProjectId: 'Project-1',
    EnvironmentId: 'Environment-1',
    ReleasesId: 'Release-1',
    DeploymentId: 'Deployment-3',
    DeployedAt: new Date(2020, 3, 21, 10),
  },
];

export const singleDeploymentMockData: IRelease[] = [
  {
    ProjectId: 'Project-1',
    EnvironmentId: 'Environment-2',
    ReleasesId: 'Release-2',
    DeploymentId: 'Deployment-1',
    DeployedAt: new Date(2020, 8, 29, 9),
  },
];
