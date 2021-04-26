
import { ScanContext, TagNode } from './ScanContext';

// 提取注释
export default function TakeComment(context: ScanContext, parentNode: TagNode) {
  const start = context.currentIndex;
  const endIndex = context.getString(start, undefined).indexOf('-->');
  if (endIndex === -1) {
    throw new Error('未找到注释 闭合标签');
  }
  const text = context.getString(start, endIndex + start);
  context.moveSteps(3 + endIndex);
  parentNode.childNodes.push({
    nodeType: '#comment',
    value: text
  })
}