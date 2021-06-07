const parser = require('../../dist/index').default;
const utils = require('../utils');
describe('混合', function () {
    it('case1', () => {
        const result = parser(utils.readXml('./test/complex/1.xml'));
        expect(result).toEqual([
            {
                nodeType: '#text',
                value: 'dsadsadas',
                start: 0,
                end: 9,
            },
            {
                nodeType: '#comment',
                value: ' comment0 ',
                start: 10,
                end: 26,
            },
            {
                nodeType: 'tag',
                tagName: 'import',
                childNodes: [],
                attrs: {
                    a: {
                        value: true,
                        start: 36,
                        end: 36,
                    },
                    src: {
                        value: './01.axml',
                        start: 43,
                        end: 51,
                    },
                    'b ': {
                        value: true,
                        start: 56,
                        end: 56,
                    },
                },
                start: 28,
                end: 57,
            },
            {
                nodeType: 'tag',
                tagName: 'template',
                childNodes: [
                    {
                        nodeType: '#comment',
                        value: ' comment1 ',
                        start: 99,
                        end: 115,
                    },
                    {
                        nodeType: 'tag',
                        tagName: 'view',
                        childNodes: [
                            {
                                nodeType: 'tag',
                                tagName: 'text',
                                childNodes: [
                                    {
                                        nodeType: '#text',
                                        value: '{{text}}',
                                        start: 138,
                                        end: 145,
                                    },
                                ],
                                attrs: {
                                    a: {
                                        value: true,
                                        start: 137,
                                        end: 137,
                                    },
                                },
                                start: 130,
                                end: 152,
                            },
                            {
                                nodeType: 'tag',
                                tagName: 'a',
                                childNodes: [
                                    {
                                        nodeType: '#text',
                                        value: 'aaaa',
                                        start: 161,
                                        end: 164,
                                    },
                                ],
                                attrs: {},
                                start: 158,
                                end: 168,
                            },
                            {
                                nodeType: '#comment',
                                value: ' comment2 ',
                                start: 174,
                                end: 190,
                            },
                            {
                                nodeType: 'tag',
                                tagName: 'text',
                                childNodes: [
                                    {
                                        nodeType: '#text',
                                        value: 'comment',
                                        start: 202,
                                        end: 208,
                                    },
                                ],
                                attrs: {},
                                start: 196,
                                end: 215,
                            },
                        ],
                        attrs: {},
                        start: 119,
                        end: 225,
                    },
                ],
                attrs: {
                    name: {
                        value: 'item',
                        start: 75,
                        end: 78,
                    },
                    data: {
                        value: '{{ aa}}',
                        start: 87,
                        end: 93,
                    },
                },
                start: 59,
                end: 237,
            },
            {
                nodeType: 'tag',
                tagName: 'div',
                childNodes: [
                    {
                        nodeType: '#text',
                        value: 'asdass',
                        start: 245,
                        end: 250,
                    },
                ],
                attrs: {},
                start: 240,
                end: 256,
            },
        ]);
    });
});
