const parser = require('../dist/index').default;

describe('闭合标签带空格', function () {
  it('case1', () => {
    const xml = `<div></ div>`;
    const result = parser(xml);
    expect(result).toEqual({ nodeType: 'tag', tagName: 'div', childNodes: [], attrs: [] });
  });

  it('case2', () => {
    const xml = `<div></ div >`;
    const result = parser(xml);
    expect(result).toEqual({ nodeType: 'tag', tagName: 'div', childNodes: [], attrs: [] });
  });

  it('case2', () => {
    const xml = `<div></di v>`;
    const result = parser(xml);
    expect(_.isEqual(result, { nodeType: 'tag', tagName: 'div', childNodes: [], attrs: [] })).toEqual(true);
  });
});
