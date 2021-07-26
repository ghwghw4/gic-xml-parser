import { PositionOffset, ScanContext } from './ScanContext';
import ParseAttribute from './parseAttribute';
import TakeText from './takeText'
import TakeComment from './takeComment'
import { TagNode } from './interface';

export default function ParseTagNode(context: ScanContext, parentNode: TagNode): boolean {
  if (context.isScanOver) {
    return false;
  }
  TakeText(context, parentNode);

  const nameInfo = takeOpenTag(context);
  if (!nameInfo) {
    return false;
  }
  const { name: tagName, startIndex } = nameInfo;

  if (tagName.startsWith('!--')) {
    const diff = tagName.length - 3;
    if (diff > 0) {
      context.moveSteps(-diff)
    }
    // 解析注释
    TakeComment(context, parentNode);
    ParseTagNode(context, parentNode)
    return true;
  }

  const tagNode: TagNode = {
    nodeType: 'tag',
    tagName,
    childNodes: [],
    attrs: {},
    start: startIndex - PositionOffset,
    end: startIndex
  }

  // 解析属性
  ParseAttribute(context, tagNode)

  while (!context.isScanOver) {
    if (context.currentChar === '>') { //说明有子元素
      context.moveSteps(1);
      // 继续解析子元素
      if (!ParseTagNode(context, tagNode)) break;
    } else {
      break;
    }
  }
  // 移动到闭合标签
  moveToCloseTag(context, tagName)
  tagNode.end = context.currentIndex - PositionOffset;
  parentNode.childNodes.push(tagNode);
  return true;
}

// 提取开始标签
function takeOpenTag(context: ScanContext) {
  if (context.getString(context.currentIndex, context.currentIndex + 2) === "</") {
    return null;
  }
  context.moverToChars('<');
  const startIndex = context.currentIndex;
  context.moverToChars(' />');
  const endIndex = context.currentIndex;
  const name = context.getString(startIndex + 1, endIndex).trim()
  return {
    name,
    startIndex,
    endIndex
  };
}

function moveToCloseTag(context: ScanContext, tagName): boolean {
  // 移动到 闭合标签的开始处
  const startIndex = context.moverToChars('/<');
  const endIndex = context.moverToChars('>');
  const content = context.getString(startIndex, endIndex + 1);
  if (content === '/>') {
    // TODO:自闭和标签
    return true;
  }

  if (content.startsWith('</')) {
    const name = content.substring(2, content.length - 1).trim();
    if (name !== tagName) {
      throw new Error(`闭合标签不正确,期望:${tagName},实际:${name}`)
    }
  } else {
    throw new Error(`未找到标签:${tagName} 的结束位置`);
  }
  return false;
}