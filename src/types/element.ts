export type ElementTypeType = 'layer' | 'group' | 'case';

export interface ElementType {
  id: number;
  type: ElementTypeType;
  name: string;
  parentId: number | null;
  value?: string | undefined;
}

export interface ElementWithChildrenType extends ElementType {
  children: ElementWithChildrenType[];
}

export interface responseDataType {
  r: number;
  result: {
    [key: string]: {
      [property: string]: string[];
    };
  };
}
