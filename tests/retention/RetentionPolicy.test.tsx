import Retention from '../../src/retentionPolicies/Retention';
import { LoggerMock } from '../logger/LoggerMock';

describe('Retention policy', () => {
    it('When project has no releases or deployments than it should return empty list', () => {
        const releases = new Retention(new LoggerMock(true), []).applyKeepRule(1);

        expect(releases.length).toBe(0);
    });
});
