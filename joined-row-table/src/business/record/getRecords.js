const getRecords = () => {
  const records = [
    {
      bu: "1部",
      buLeader: "山田太郎",
      children: [
        {
          ka: "1課",
          kaLeader: "山田一郎",
          children: [
            {
              name: "たろう",
            },
            {
              name: "じろう",
            },
          ],
        },
        {
          ka: "2課",
          kaLeader: "田中一郎",
          children: [
            {
              name: "kakakaka",
            },
            {
              name: "aaaaaa",
            },
            {
              name: "bbbbbb",
            },
          ],
        },
        {
          ka: "3課",
          kaLeader: "田中二郎",
          children: [
            {
              name: "cccccc",
            },
          ],
        },
      ],
    },

    {
      bu: "2部",
      buLeader: "山本太郎",
      children: [
        {
          ka: "1課",
          kaLeader: "中山一郎",
          children: [
            {
              name: "ぽち",
            },
            {
              name: "けん",
            },
          ],
        },
        {
          ka: "2課",
          kaLeader: "中山一郎",
          children: [
            {
              name: "aba",
            },
            {
              name: "def",
            },
            {
              name: "hij",
            },
          ],
        },
      ],
    },
  ];
  return records;
};

export { getRecords };
