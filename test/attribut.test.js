const parser = require('../dist/index').default;

describe('属性解析', function () {
    it('case1', () => {
        const xml = `<div a="ba"  c="kjshdskaj"></div>`;
        const result = parser(xml);
        expect(result).toEqual({
            nodeType: 'tag',
            tagName: 'div',
            childNodes: [],
            attrs: {
                a: {
                    value: 'ba',
                    start: 8,
                    end: 9,
                },
                c: {
                    value: 'kjshdskaj',
                    start: 16,
                    end: 24,
                },
            },
            start: 0,
            end: 32,
        });
    });

    it('case2-bool', () => {
        const xml = `<div uer a="ba"  c= "kjshdskaj" nvv = "sad" dsad></div>`;
        const result = parser(xml);
        expect(result).toEqual({
            nodeType: 'tag',
            tagName: 'div',
            childNodes: [],
            attrs: {
                uer: {
                    value: true,
                    start: 7,
                    end: 7,
                },
                a: {
                    value: 'ba',
                    start: 12,
                    end: 13,
                },
                c: {
                    value: 'kjshdskaj',
                    start: 21,
                    end: 29,
                },
                nvv: {
                    value: 'sad',
                    start: 39,
                    end: 41,
                },
                dsad: {
                    value: true,
                    start: 48,
                    end: 48,
                },
            },
            start: 0,
            end: 54,
        });

        expect(parser('<div a/>')).toEqual({
            nodeType: 'tag',
            tagName: 'div',
            childNodes: [],
            attrs: {
                a: {
                    value: true,
                    start: 6,
                    end: 6,
                },
            },
            start: 0,
            end: 7,
        });
    });

    it('case3-换行', () => {
        const xml = `<div a="ba" 
        c="kjshdskaj"></div>`;
        const result = parser(xml);
        expect(result).toEqual({
            nodeType: 'tag',
            tagName: 'div',
            childNodes: [],
            attrs: {
                a: {
                    value: 'ba',
                    start: 8,
                    end: 9,
                },
                c: {
                    value: 'kjshdskaj',
                    start: 24,
                    end: 32,
                },
            },
            start: 0,
            end: 40,
        });
    });

    // 不正确的

});
