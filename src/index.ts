import ParseNode from './parseNode';
import { ScanContext } from './ScanContext';


export default function parse(input) {
  if (!input) return null;
  const context = new ScanContext(input);
  const root = {
    nodeType: 'tag',
    tagName: 'document',
    childNodes: [],
    attributes: []
  };
  ParseNode(context, root)
  if (root.childNodes.length === 1)
    return root.childNodes[0];
  return root.childNodes;
}