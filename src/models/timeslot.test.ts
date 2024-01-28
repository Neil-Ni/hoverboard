import data from '../../docs/default-firebase-data.json';
import { Timeslot } from './timeslot';
import { allKeys } from './utils';

describe('timeslot', () => {
  it('matches the shape of the default data', () => {
    const days: Timeslot[] = data['schedule']['2024-08-07']['timeslots'];
    const keys: Array<keyof Timeslot> = ['endTime', 'sessions', 'startTime'];
    expect(days).toHaveLength(13);
    expect(allKeys(days)).toStrictEqual(keys);
  });
});
