export enum SortOrder {
  ASC = "asc",
  DESC = "desc",
  ALPHABETICAL = "alphabetical",
}

export type Article = {
  id: string;
  title: string;
  topic: string;
  publishedAt: string;
};
