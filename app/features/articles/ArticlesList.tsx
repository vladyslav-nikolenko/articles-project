import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { ArticleCard } from "./components/ArticleCard";
import { ArticlesToolbar } from "./components/ArticlesToolbar";
import { SortOrder, useArticlesView } from "./use-articles-view";

export function ArticlesList() {
  const [sortOrder, setSortOrder] = useState<SortOrder>(SortOrder.ASC);
  const [filterTopic, setFilterTopic] = useState<string>("all");
  const [search, setSearch] = useState("");

  const displayedArticles = useArticlesView({
    search,
    filterTopic,
    sortOrder,
  });

  return (
    <Container maxWidth='lg'>
      <Box sx={{ py: { xs: 3, md: 4 } }}>
        <Stack spacing={3}>
          <Stack spacing={0.5}>
            <Typography variant='h4' fontWeight={800}>
              Welcome to the articles app
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Search, filter, and sort to find the right articles.
            </Typography>
          </Stack>

          <ArticlesToolbar
            search={search}
            onSearchChange={setSearch}
            sortOrder={sortOrder}
            onSort={setSortOrder}
            filterTopic={filterTopic}
            onFilter={setFilterTopic}
          />

          {displayedArticles.length === 0 ? (
            <Paper
              variant='outlined'
              sx={{
                p: 3,
                borderRadius: 2,
                textAlign: "center",
                color: "text.secondary",
              }}
            >
              No articles match your search/filter.
            </Paper>
          ) : (
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
              }}
            >
              {displayedArticles.map(({ id, title, topic, publishedAt }) => (
                <ArticleCard
                  key={id}
                  title={title}
                  topic={topic}
                  publishedAt={publishedAt}
                />
              ))}
            </Box>
          )}
        </Stack>
      </Box>
    </Container>
  );
}
