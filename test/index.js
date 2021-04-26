const parser = require('../dist/index').default;
const JSON5 = require('json5')

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
console.log(JSON5.stringify(result))