import db from "../../database/db.json";

export const sortList = [
  {
    label: "Rating:",
    values: [
      { label: "from the biggest", linkValue: "rate_down" },
      { label: "from the lowest", linkValue: "rate_up" },
    ],
  },
  {
    label: "Released:",
    values: [
      { label: "from the latest", linkValue: "date_down" },
      { label: "from the oldest", linkValue: "date_up" },
    ],
  },
  {
    label: "Poplarity:",
    values: [
      { label: "from the most popular", linkValue: "popularity_down" },
      { label: "from the least popular", linkValue: "popularity_up" },
    ],
  },
];

export const renderData = [
  {
    id: "movies",
    data: db.movies,
  },
  {
    id: "tvSeries",
    data: db.tvSeries,
  },
];

export const databaseType = [
  {
    type: "movies",
    label: "Movies",
    title: "MOVIES DATABASE",
  },
  {
    type: "tvSeries",
    label: "Tv series",
    title: "TV SERIES DATABASE",
  },
];
