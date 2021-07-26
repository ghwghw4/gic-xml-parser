import { TagNode } from './interface';
import { PositionOffset, ScanContext } from './ScanContext';

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
  const attName = context.getString(start, end).trim();
  if (!attName) return;
  if (' />'.indexOf(context.currentChar) >= 0) { //布尔属性
    tagNode.attrs[attName] = {
      value: true,
      start: end - PositionOffset, // 属性名的最后一个字符
      end: end - PositionOffset
    };
    return;
  }

  const { value, start: valueStartIndex, end: valueEndIndex } = parseAttValue(context);
  var attNames = attName.split(' ').filter(a => a);
  attNames.forEach((att, index) => {
    if (index === attNames.length - 1) {
      tagNode.attrs[att] = {
        value,
        start: valueStartIndex - PositionOffset + 1,
        end: valueEndIndex - PositionOffset - 1
      };
    } else {
      tagNode.attrs[att] = {
        value: true,
        start: start - PositionOffset + att.length - 1, // 属性名的最后一个字符
        end: start - PositionOffset + att.length - 1
      };
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
  return {
    value,
    start,
    end
  };
}