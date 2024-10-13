export interface ContentItem {
  text?: string;
  type: string;
  author?: string;
  alt?: string;
  src?: string;
  items?: string[];
}

export interface Section {
  title: string;
  content: ContentItem[];
}

export interface BlogContent {
  data: Section[];
}
