const parser = require('../dist/index').default;

describe('文本内容', function () {
    it('case1', () => {
        const xml = `<div>1234</div>`;
        const result = parser(xml);
        expect(result).toEqual({
            nodeType: 'tag',
            tagName: 'div',
            childNodes: [{ nodeType: '#text', value: '1234' }],
            attrs: []
        });
    });

    it('case2', () => {
        const xml = `abc<div>1234</div>efg`;
        const result = parser(xml);
        expect(result).toEqual(
            [
                { nodeType: '#text', value: 'abc' },
                {
                    nodeType: 'tag',
                    tagName: 'div',
                    childNodes: [{ nodeType: '#text', value: '1234' }],
                    attrs: []
                },
                { nodeType: '#text', value: 'efg' }
            ]
        );
    });


    it('case3', () => {
        const xml = `abc

        das
        <div/>
        bjkk
        
        dasdas`;
        const result = parser(xml);
        expect(result).toEqual(
            [
                { nodeType: '#text', value: 'abc\n\n        das' },
                { nodeType: 'tag', tagName: 'div', childNodes: [], attrs: [] },
                { nodeType: '#text', value: 'bjkk\n        \n        dasdas' }
              ]
        );
    });


});
