import ParseNode from './parseNode';
import { ScanContext, TagNode } from './ScanContext';


export default function parse(input): null | TagNode | TagNode[] {
  if (!input) return null;
  const context = new ScanContext(`<root>${input}</root>`);
  const document = {
    nodeType: 'tag',
    tagName: 'document',
    childNodes: [],
    attributes: []
  };
  ParseNode(context, document)
  const root = document.childNodes[0];
  if (root.childNodes.length === 1)
    return root.childNodes[0];
  return root.childNodes;
}