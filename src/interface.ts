
export interface NodePosition {
    start: number;
    end: number;
}

export interface TagNode extends NodePosition {
    nodeType: 'tag' | '#comment' | '#text';
    tagName?: string;
    childNodes?: Array<TagNode>;
    value?: string;
    attrs?: TagAttribute;
}

export interface TagAttribute {
    [key: string]: TagAttributeValue;
}

export interface TagAttributeValue extends NodePosition{
    value: any;
}