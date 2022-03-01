import { IRelease } from './IReleases.d';

/**
 * Class to encapsulate and manipulate the releases retention rules
 */
class Retention {
  releases: IRelease[];

  constructor(releasesData: IRelease[]) {
    this.releases = releasesData;
  }

  /**
   * Returns a list of releases is kept.
   *
   * @param {number=} projectId - the project the retention will run against.
   * @param {number=} environmentId - the environment the retention will run against.
   * @param {number=} keep - A number releases to keep.
   * @returns {IReleases[]}
   */
  applyKeepRule(
    projectId: string,
    environmentId: string,
    keep: number,
  ): IRelease[] {
    if (!this.releases) return [];

    const projects = this.releases.filter(
      (r) => r.ProjectId === projectId && r.EnvironmentId === environmentId,
    );

    if (!projects) return [];

    const projectsOrderedByDateAsc = projects.sort((a, b) =>
      a.DeployedAt > b.DeployedAt ? -1 : 0,
    );

    return projectsOrderedByDateAsc.slice(0, keep);
  }
}

export default Retention;
