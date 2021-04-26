const parser = require('../dist/index').default;

describe('属性解析', function () {
    it('case1', () => {
        const xml = `<div a="ba"  c="kjshdskaj"></div>`;
        const result = parser(xml);
        expect(result).toEqual({
            nodeType: 'tag',
            tagName: 'div',
            childNodes: [],
            attrs: [{ name: 'a', value: 'ba' }, { name: 'c', value: 'kjshdskaj' }]
        });
    });

    it('case2-bool', () => {
        const xml = `<div uer a="ba"  c= "kjshdskaj" nvv = "sad" dsad></div>`;
        const result = parser(xml);
        expect(result).toEqual({
            nodeType: 'tag',
            tagName: 'div',
            childNodes: [],
            attrs: [
                { name: 'uer', value: true },
                { name: 'a', value: 'ba' },
                { name: 'c', value: 'kjshdskaj' },
                { name: 'nvv', value: 'sad' },
                { name: 'dsad', value: true }
            ]
        });

        expect(parser('<div a/>')).toEqual({
            nodeType: 'tag',
            tagName: 'div',
            childNodes: [],
            attrs: [
                { name: 'a', value: true },
            ]
        });
    });
    


    // 不正确的

});
