import {
  Button,
  ButtonGroup,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import type { SelectChangeEvent } from "@mui/material/Select";
import { TOPICS } from "~/consts";
import { SortOrder } from "../types";

type ArticleToolbarProps = {
  search: string;
  onSearchChange: (value: string) => void;
  sortOrder: SortOrder;
  onSort: (value: SortOrder) => void;
  filterTopic: string;
  onFilter: (value: string) => void;
};

export function ArticlesToolbar({
  search,
  onSearchChange,
  sortOrder,
  onSort,
  filterTopic,
  onFilter,
}: ArticleToolbarProps) {
  return (
    <Paper
      variant='outlined'
      sx={{
        p: 2,
        borderRadius: 2,
        bgcolor: "background.paper",
      }}
    >
      <Stack gap={2}>
        <TextField
          size='small'
          label='Search by topic'
          sx={{ maxWidth: "250px" }}
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />

        <Stack direction='row' gap={4}>
          <ButtonGroup size='small'>
            <Button
              size='small'
              color={sortOrder === SortOrder.ASC ? "secondary" : "primary"}
              onClick={() => onSort(SortOrder.ASC)}
            >
              Sort from oldest
            </Button>

            <Button
              size='small'
              color={sortOrder === SortOrder.DESC ? "secondary" : "primary"}
              onClick={() => onSort(SortOrder.DESC)}
            >
              Sort from latest
            </Button>

            <Button
              size='small'
              color={
                sortOrder === SortOrder.ALPHABETICAL ? "secondary" : "primary"
              }
              onClick={() => onSort(SortOrder.ALPHABETICAL)}
            >
              Sort by title
            </Button>
          </ButtonGroup>

          <FormControl size='small' sx={{ maxWidth: "150px" }}>
            <InputLabel id='articles-filter-label'>Filter</InputLabel>
            <Select
              size='small'
              label={"Filter"}
              labelId='articles-filter-label'
              id='articles-filter'
              value={filterTopic}
              onChange={(e: SelectChangeEvent) =>
                onFilter(String(e.target.value))
              }
            >
              <MenuItem value='all'>All topics</MenuItem>
              {TOPICS.map((topic) => (
                <MenuItem key={topic} value={topic}>
                  {topic}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
      </Stack>
    </Paper>
  );
}
