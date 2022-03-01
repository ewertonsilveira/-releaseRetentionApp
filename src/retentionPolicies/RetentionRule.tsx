import { IReleases } from './IReleases.d';

class RetentionRule {
  releases: IReleases[];

  constructor(releasesData: IReleases[]) {
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
  releasesToKeep(
    projectId: string,
    environmentId: string,
    keep: number,
  ): IReleases[] {
    if (this.releases)
      return this.releases
        .filter(
          (r) => r.ProjectId === projectId && r.EnvironmentId == environmentId,
        )
        .slice(keep);

    return [];
  }
}

export default RetentionRule;
