import { useMemo } from "react";
import type { Article } from "./types";
import { articles as mockedArticles } from "~/features/articles/consts";

import { SortOrder } from "./types";

export { SortOrder };

export function useArticlesView({
  search,
  filterTopic,
  sortOrder,
}: {
  search: string;
  filterTopic: string;
  sortOrder: SortOrder;
}): Article[] {
  return useMemo(() => {
    let list = [...mockedArticles];

    if (search) {
      list = list.filter((article) =>
        article.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
      );
    }

    if (filterTopic !== "all") {
      list = list.filter((article) => article.topic === filterTopic);
    }

    const sorted = [...list].sort((a, b) => {
      if (sortOrder === SortOrder.ALPHABETICAL) {
        return a.title.localeCompare(b.title);
      }
      if (sortOrder === SortOrder.ASC) {
        return a.publishedAt.localeCompare(b.publishedAt);
      }
      if (sortOrder === SortOrder.DESC) {
        return b.publishedAt.localeCompare(a.publishedAt);
      }
      return 0;
    });

    return sorted;
  }, [filterTopic, search, sortOrder]);
}
