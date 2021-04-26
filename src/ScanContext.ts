export class ScanContext {
  private input: string;
  currentIndex = 0;

  get currentChar() {
    return this.input[this.currentIndex]
  }

  get isScanOver() {
    return this.currentIndex >= this.input.length - 1
  }

  constructor(input) {
    // this.input = `<root>${input}</root>`;
    this.input = input;
  }

  // 移动到下一个字符 在 chars 中的位置
  moverToChars(chars: string) {
    while (!this.isScanOver) {
      if (chars.indexOf(this.currentChar) >= 0) {
        break;
      }
      this.currentIndex++;
    }
    return this.currentIndex
  }

  moverToCharsNot(chars: string) {
    while (!this.isScanOver) {
      if (chars.indexOf(this.currentChar) === -1) {
        break;
      }
      this.currentIndex++;
    }
    return this.currentIndex
  }

  moveSteps(steps) {
    this.currentIndex += steps;
    if(this.isScanOver){
      this.currentIndex = this.input.length - 1;
    }
  }

  // 截取字符串
  getString(start, end): string {
    return this.input.substring(start, end);
  }

  printLeft(){
    console.log(this.input.substring(this.currentIndex))
  }
}


export interface TagNode {
  nodeType: string;
  tagName?: string;
  childNodes?: Array<TagNode>;
  value?: string;
  attrs?: Array<TagAttribute>;
}

export interface TagAttribute {
  name: string;
  value: any;
}
