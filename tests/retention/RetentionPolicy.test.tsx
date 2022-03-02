import { Logger } from '../../src/Logger/Logger';
import Retention from '../../src/retentionPolicies/Retention';

jest.mock('../../src/Logger/Logger'); 
const loggerMock = Logger as jest.MockedClass<typeof Logger>;

describe('Retention policy', () => {

    it('When project has no releases or deployments than it should return empty list', () => {
        const releases = new Retention(loggerMock.mock.instances[0], []).applyKeepRule(1);

        expect(releases.length).toBe(0);
    });

});

