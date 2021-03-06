import { IRelease } from './IReleases.d';
import * as _ from 'lodash';
import { ILogger } from '../logger/ILogger';

/**
 * Class to encapsulate and manipulate the releases retention rules
 */
class Retention {
    logger: ILogger;
    releases: IRelease[];

    constructor(logger: ILogger, releasesData: IRelease[]) {
        this.logger = logger;
        this.releases = releasesData;
    }

    /**
     * Returns a list of releases is kept.
     *
     * @param {number=} keep - A number releases to keep.
     * @returns {IReleases[]}
     */
    applyKeepRule(keep: number): IRelease[] {
        if (!this.releases) return [];

        const orderedList = _.orderBy(
            this.releases,
            ['ProjectId', 'EnvironmentId', 'DeployedAt'],
            ['asc', 'asc', 'desc'],
        );

        let deploymentCount = 0;
        let deployment: IRelease = null;
        let projectsToDelete: IRelease[] = [];
        const projectsToKeep: IRelease[] = [];

        // Cleaning up everything, This biz logic should be well discussed before
        if (keep === 0) {
            projectsToDelete = orderedList;
            // TODO: Call separated service to delete all the releases all the customers?
            return [];
        }

        // I prefered to loop it through manually, as I have more flexibility to avoid nested loops
        for (let i = 0; i < orderedList.length; i++) { 
            
            // increase the count for current project
            ++deploymentCount;
            deployment = orderedList[i];
            const nextItem = orderedList[i + 1];

            // Keep deployment that are below the number to keep threshold
            // Otherwise add them to delete list
            deploymentCount <= keep ? projectsToKeep.push(deployment) : projectsToDelete.push(deployment);

            const resetCountForNextProject =
                nextItem &&
                (deployment.ProjectId !== nextItem.ProjectId || deployment.EnvironmentId !== nextItem.EnvironmentId);

            deploymentCount = resetCountForNextProject ? 0 : deploymentCount;
        }

        const reason = `These deployments were kept as part or retention policy run on ${new Date()}. Number of releases to Keep was ${keep}`
        this.log(projectsToKeep,reason);

        return projectsToKeep;
    }

    /**
     * Log the reason to keep the release.
     *
     * @param {number=} keep - A number releases to keep.
     * @returns {IReleases[]}
     */
    log<IRelease>(releasesToKeep: IRelease[], reason: string) {
        _.forEach(releasesToKeep, (release) => this.logger.LogInfo(reason, release));
    }
}

export default Retention;
