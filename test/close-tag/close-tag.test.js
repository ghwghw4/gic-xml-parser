const parser = require('../../dist/index').default;
const utils = require('../utils');

describe('闭合标签带空格', function () {
  it('case1', () => {
    const xml = `<div></ div>`;
    const result = parser(xml);
    expect(result).toEqual({
      nodeType: 'tag',
      tagName: 'div',
      childNodes: [],
      attrs: {},
      start: 0,
      end: 11,
    });
  });

  it('case2', () => {
    const xml = `<div></ div >`;
    const result = parser(xml);
    expect(result).toEqual({
      nodeType: 'tag',
      tagName: 'div',
      childNodes: [],
      attrs: {},
      start: 0,
      end: 12,
    });
  });


  // 不正确的
  it('case-error-1', () => {
    const xml = `<div></di v>`;
    expect(() => parser(xml)).toThrow('闭合标签不正确,期望:div,实际:di v');
  });

  it('case-error-2', () => {
    const xml = `<div></a>`;
    expect(() => parser(xml)).toThrow('闭合标签不正确,期望:div,实际:a');
  });


  // 自我闭合
  it('case1', () => {
    const result = parser(utils.readXml('./test/close-tag/1.xml'));
    expect(result).toEqual({
      nodeType: 'tag',
      tagName: 'div',
      childNodes: [
        {
          nodeType: 'tag',
          tagName: 'a',
          childNodes: [],
          attrs: {},
          start: 10,
          end: 14,
        },
      ],
      attrs: {},
      start: 0,
      end: 21,
    });

    expect(parser('<div/>')).toEqual({
      nodeType: 'tag',
      tagName: 'div',
      childNodes: [],
      attrs: {},
      start: 0,
      end: 5,
    });
  });


  it('case-error-3', () => {
    const xml = `<div/ >`;
    expect(() => parser(xml)).toThrow('未找到标签:div 的结束位置');
  });
});
