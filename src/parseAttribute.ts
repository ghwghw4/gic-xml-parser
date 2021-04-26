import { ScanContext, TagNode, TagAttribute } from './ScanContext';

export default function (context: ScanContext, tagNode: TagNode) {
  while (!context.isScanOver) {
    context.moverToCharsNot(' ');
    switch (context.currentChar) {
      case '/':
      case '>': {
        return;
      }
    }
    parseAttibute(context, tagNode);
  }
}

function parseAttibute(context: ScanContext, tagNode: TagNode) {
  const start = context.currentIndex;
  const end = context.moverToChars('=/>')
  const attName = context.getString(start, end);
  if (' />'.indexOf(context.currentChar) >= 0) { //布尔属性
    tagNode.attrs.push({
      name: attName,
      value: true
    });
    return;
  }

  const value = parseAttValue(context);
  var attNames = attName.split(' ').filter(a => a);

  attNames.forEach((att, index) => {
    if (index === attNames.length - 1) {
      tagNode.attrs.push({
        name: att,
        value
      })
    } else {
      tagNode.attrs.push({
        name: att,
        value: true
      })
    }
  });
}

function parseAttValue(context: ScanContext) {
  const start = context.moverToChars(`'"`);
  const char = context.currentChar;
  context.moveSteps(1);
  const end = context.moverToChars(`${char}`)
  context.moveSteps(1);
  const value = context.getString(start + 1, end);
  return value;
}