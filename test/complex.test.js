const parser = require('../dist/index').default;

describe('混合', function () {
    it('case1', () => {
        const xml = `
        dsadsadas
        <!-- comment0 -->
        <import a src="./01.axml" b />
        <template name="item" data="{{ aa}}">
          <!-- comment1 -->
          <view>
            <text a>{{text}}</text>
            <a>aaaa</a>
            <!-- comment2 -->
            <text>comment</text>
          </view>
        </template>
        
        <div>asdass</div>
    `;
        const result = parser(xml);
        expect(result).toEqual([
            { nodeType: '#text', value: 'dsadsadas' },
            { nodeType: '#comment', value: ' comment0 ' },
            {
                nodeType: 'tag', tagName: 'import', childNodes: [], attrs: [
                    { name: 'a', value: true },
                    { name: 'src', value: './01.axml' },
                    { name: 'b ', value: true }
                ]
            },
            {
                nodeType: 'tag', tagName: 'template', childNodes: [
                    { nodeType: '#comment', value: ' comment1 ' },
                    {
                        nodeType: 'tag', tagName: 'view', childNodes: [
                            {
                                nodeType: 'tag', tagName: 'text', childNodes: [
                                    { nodeType: '#text', value: '{{text}}' }
                                ], attrs: [
                                    { name: 'a', value: true }
                                ]
                            },
                            {
                                nodeType: 'tag', tagName: 'a', childNodes: [
                                    { nodeType: '#text', value: 'aaaa' }
                                ], attrs: []
                            },
                            { nodeType: '#comment', value: ' comment2 ' },
                            {
                                nodeType: 'tag', tagName: 'text', childNodes: [
                                    { nodeType: '#text', value: 'comment' }
                                ], attrs: []
                            }], attrs: []
                    }], attrs: [
                        { name: 'name', value: 'item' },
                        { name: 'data', value: '{{ aa}}' }
                    ]
            },
            { nodeType: 'tag', tagName: 'div', childNodes: [{ nodeType: '#text', value: 'asdass' }], attrs: [] }]);
    });
});
