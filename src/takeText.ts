import { ScanContext, TagNode } from './ScanContext';

export default function TakeText(context: ScanContext, parentNode: TagNode) {
  const start = context.currentIndex;
  const end = context.moverToChars('<');
  const text = context.getString(start, end).replace(/^\s+|\s+$/g,'');
  if (text.length > 0) {
    parentNode.childNodes.push({
      nodeType: '#text',
      value: text
    })
  }
}