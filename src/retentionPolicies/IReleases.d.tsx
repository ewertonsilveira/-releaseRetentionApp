/**
 * Expose Releases properties.
 */
export interface IRelease {
    ProjectId: string;
    DeploymentId?: string;
    ReleasesId?: string;
    EnvironmentId?: string;
    DeployedAt?: Date;
}
