const parser = require('../../dist/index').default;
const utils = require('../utils');

describe('文本内容', function () {
    it('case1', () => {
        const xml = `<div>1234</div>`;
        const result = parser(xml);
        expect(result).toEqual({
            nodeType: 'tag',
            tagName: 'div',
            childNodes: [
                {
                    nodeType: '#text',
                    value: '1234',
                    start: 5,
                    end: 8,
                },
            ],
            attrs: {},
            start: 0,
            end: 14,
        });
    });

    it('case2', () => {
        const xml = `abc<div>1234</div>efg`;
        const result = parser(xml);
        expect(result).toEqual(
            [
                {
                    nodeType: '#text',
                    value: 'abc',
                    start: 0,
                    end: 2,
                },
                {
                    nodeType: 'tag',
                    tagName: 'div',
                    childNodes: [
                        {
                            nodeType: '#text',
                            value: '1234',
                            start: 8,
                            end: 11,
                        },
                    ],
                    attrs: {},
                    start: 3,
                    end: 17,
                },
                {
                    nodeType: '#text',
                    value: 'efg',
                    start: 18,
                    end: 20,
                },
            ]
        );
    });


    it('case3', () => {
        const result = parser(utils.readXml('./test/text/3.xml'));
        expect(result).toEqual(
            [
                {
                    nodeType: '#text',
                    value: 'abc\n\ndas',
                    start: 0,
                    end: 8,
                },
                {
                    nodeType: 'tag',
                    tagName: 'div',
                    childNodes: [],
                    attrs: {},
                    start: 9,
                    end: 14,
                },
                {
                    nodeType: '#text',
                    value: 'bjkk\n        \ndasdas',
                    start: 15,
                    end: 35,
                },
            ]
        );
    });


});
