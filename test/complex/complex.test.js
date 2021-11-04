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
                        start: 37,
                        end: 37,
                    },
                    src: {
                        value: './01.axml',
                        start: 43,
                        end: 51,
                    },
                    b: {
                        value: true,
                        start: 55,
                        end: 55,
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

    it('case2', () => {
        const result = parser(utils.readXml('./test/complex/2.xml'));
        expect(result).toEqual({
            nodeType: 'tag',
            tagName: 'video',
            childNodes: [],
            attrs: {
                loop: {
                    value: true,
                    start: 18,
                    end: 18,
                },
                controls: {
                    value: true,
                    start: 27,
                    end: 27,
                },
                bindfullscreenchange: {
                    value: 'fullscreenchange',
                    start: 57,
                    end: 72,
                },
                'vslide-gesture': {
                    value: true,
                    start: 96,
                    end: 96,
                },
                'vslide-gesture-in-fullscreen': {
                    value: true,
                    start: 132,
                    end: 132,
                },
                autoplay: {
                    value: true,
                    start: 148,
                    end: 148,
                },
                'enable-play-gesture': {
                    value: true,
                    start: 176,
                    end: 176,
                },
            },
            start: 0,
            end: 189,
        });
    });
});
