import dayjs from "dayjs";
import {
  Box,
  Card as MuiCard,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import type { Article } from "../types";

type ArticleCardProps = Pick<Article, "title" | "topic" | "publishedAt">;

export function ArticleCard({ title, topic, publishedAt }: ArticleCardProps) {
  const formattedPublishedAt = dayjs(publishedAt).format("DD MMMM YYYY");

  return (
    <Box
      sx={{
        flex: "1 1 320px",
        minWidth: 280,
        minHeight: 170,
      }}
    >
      <MuiCard
        sx={{ height: "100%", display: "flex", flexDirection: "column" }}
      >
        <CardHeader title={title} subheader={topic} />
        <CardContent>
          <Typography variant='body1' color='text.secondary'>
            {formattedPublishedAt}
          </Typography>
        </CardContent>
      </MuiCard>
    </Box>
  );
}
