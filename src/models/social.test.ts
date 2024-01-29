import data from '../../docs/default-firebase-data.json';
import { Social } from './social';
import { allKeys } from './utils';

describe('speaker', () => {
  it('matches the shape of the default data', () => {
    const socials: Social[] = Object.values(data['speakers']['the_superior_labor']['socials']);
    const keys: Array<keyof Social> = ['icon', 'link', 'name'];
    expect(socials).toHaveLength(2);
    expect(allKeys(socials)).toStrictEqual(keys);
  });
});
