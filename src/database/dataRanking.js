export const sortList = [
  {
    label: "Rating",
    values: [
      {
        label: "from the biggest",
        linkValue: "rate_down",
        apiValue: "vote_average.desc",
      },
      {
        label: "from the lowest",
        linkValue: "rate_up",
        apiValue: "vote_average.asc",
      },
    ],
  },
  {
    label: "Released",
    values: [
      {
        label: "from the latest",
        linkValue: "date_down",
        apiValue: "release_date.desc",
      },
      {
        label: "from the oldest",
        linkValue: "date_up",
        apiValue: "release_date.asc",
      },
    ],
  },
  {
    label: "Poplarity",
    values: [
      {
        label: "from the most popular",
        linkValue: "popularity_down",
        apiValue: "popularity.desc",
      },
      {
        label: "from the least popular",
        linkValue: "popularity_up",
        apiValue: "popularity.asc",
      },
    ],
  },
];

export const databaseType = [
  {
    type: "movie",
    label: "Movies",
    title: "MOVIES DATABASE",
  },
  {
    type: "tv",
    label: "Tv series",
    title: "TV SERIES DATABASE",
  },
];
