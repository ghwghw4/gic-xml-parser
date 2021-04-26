const parser = require('../dist/index').default;

describe('注释', function () {
    it('case1', () => {
        const xml = `
    <!-- sdasds -->
    <div></div>
    `;
        const result = parser(xml);
        expect(result).toEqual([
            { nodeType: '#comment', value: ' sdasds ' },
            { nodeType: 'tag', tagName: 'div', childNodes: [], attrs: [] }
        ]);
    });

    it('case2', () => {
        const xml = `
        <!--
        注释换行
        1. 
        2. 
        -->
    <div></div>
    `;
        const result = parser(xml);
        expect(result).toEqual([
            {
                nodeType: '#comment',
                value: '\n        注释换行\n        1. \n        2. \n        '
            },
            { nodeType: 'tag', tagName: 'div', childNodes: [], attrs: [] }
        ]);
    });



    // 不正确的
    it('case-error-1', () => {
        const xml = `<!-- sadasdas --`;
        expect(() => parser(xml)).toThrow('未找到注释 闭合标签');
    });
});
