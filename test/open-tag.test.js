const parser = require('../dist/index').default;

describe('起始标签带空格', function () {
  it('case1', () => {
    const xml = `<div></div>`;
    const result = parser(xml);
    expect(result).toEqual({ nodeType: 'tag', tagName: 'div', childNodes: [], attrs: [] });
  });


  // 不正确的
  it('case-error-1', () => {
    const xml = `<div `;
    expect(() =>  parser(xml)).toThrow('未找到标签:div 的结束位置');
  });

  it('case-error-2', () => {
    const xml = `<div>
    <a 
    </div>`;
    expect(() =>  parser(xml)).toThrow('未找到标签:a 的结束位置');
  });
});
