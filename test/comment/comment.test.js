const parser = require('../../dist/index').default;
const utils = require('../utils');

describe('注释', function () {
    it('case1', () => {
        const result = parser(utils.readXml('./test/comment/1.xml'));
        expect(result).toEqual([
            {
                nodeType: '#comment',
                value: ' sdasds ',
                start: 0,
                end: 14,
            },
            {
                nodeType: 'tag',
                tagName: 'div',
                childNodes: [],
                attrs: {},
                start: 16,
                end: 26,
            },
        ]);
    });

    it('case2', () => {
        const result = parser(utils.readXml('./test/comment/2.xml'));
        expect(result).toEqual([
            {
                nodeType: '#comment',
                value: '\n注释换行\n1. \n2. \n',
                start: 0,
                end: 20,
            },
            {
                nodeType: 'tag',
                tagName: 'div',
                childNodes: [],
                attrs: {},
                start: 22,
                end: 32,
            },
        ]);
    });



    // 不正确的
    it('case-error-1', () => {
        const xml = `<!-- sadasdas --`;
        expect(() => parser(xml)).toThrow('未找到注释 闭合标签');
    });
});
