import WeiboPid2url from '../src/index.js';

describe('Normal test cases', () => {
  test('method: invalid pid should throw error', () => {
    const wp1 = new WeiboPid2url({ host: 'tva1.js.work' });
    // expect(() => wp1.get('invalid_pid')).toThrow('Invalid pid');
    // expect(() => wp1.get('')).toThrow('Invalid pid');
  });
  test('method: get/gets/gets(all)', () => {
    const wp1 = new WeiboPid2url({ host: 'tva1.js.work' });
    const url1 = wp1.get('007S8ZIlgy1gexw87htqhj305k05k74o');
    const url2 = wp1.gets('007S8ZIlgy1gexw87htqhj305k05k74o', ['small', 'large']);
    const url3 = wp1.gets('007S8ZIlgy1gexw87htqhj305k05k74o');

    expect(url1).toBe('https://tva1.js.work/large/007S8ZIlgy1gexw87htqhj305k05k74o.jpg');
    expect(url2).toEqual({
      small: 'https://tva1.js.work/small/007S8ZIlgy1gexw87htqhj305k05k74o.jpg',
      large: 'https://tva1.js.work/large/007S8ZIlgy1gexw87htqhj305k05k74o.jpg'
    });

    expect(url3).toEqual({
      large: 'https://tva1.js.work/large/007S8ZIlgy1gexw87htqhj305k05k74o.jpg',
      bmiddle: 'https://tva1.js.work/bmiddle/007S8ZIlgy1gexw87htqhj305k05k74o.jpg',
      mw1024: 'https://tva1.js.work/mw1024/007S8ZIlgy1gexw87htqhj305k05k74o.jpg',
      mw690: 'https://tva1.js.work/mw690/007S8ZIlgy1gexw87htqhj305k05k74o.jpg',
      small: 'https://tva1.js.work/small/007S8ZIlgy1gexw87htqhj305k05k74o.jpg',
      square: 'https://tva1.js.work/square/007S8ZIlgy1gexw87htqhj305k05k74o.jpg',
      thumb180: 'https://tva1.js.work/thumb180/007S8ZIlgy1gexw87htqhj305k05k74o.jpg',
      thumbnail: 'https://tva1.js.work/thumbnail/007S8ZIlgy1gexw87htqhj305k05k74o.jpg'
    });
  });
});
