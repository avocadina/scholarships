export interface IDocsItem {
  title: string;
  descr: string;
}

export interface IDocsBlock {
  title: string;
  items?: IDocsItem[];
  subBlocks?: IDocsBlock[];
}
