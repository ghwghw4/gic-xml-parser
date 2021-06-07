import { TagNode } from './interface';
import ParseNode from './parseNode';
import { ScanContext } from './ScanContext';


export default function parse(input): null | TagNode | TagNode[] {
  if (!input) return null;
  const context = new ScanContext(`<root>${input}</root>`);
  const document = {
    nodeType: 'tag',
    tagName: 'document',
    childNodes: [],
    attributes: [],
    start: 0,
    end: 0
  } as TagNode;
  ParseNode(context, document)
  const root = document.childNodes[0];
  if (root.childNodes.length === 1)
    return root.childNodes[0];
  return root.childNodes;
}