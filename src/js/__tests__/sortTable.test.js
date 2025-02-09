import sortTable from "../sortTable";

const mockData = [
  { id: 26, title: "Побег из Шоушенка", imdb: 9.3, year: 1994 },
  { id: 25, title: "Крёстный отец", imdb: 9.2, year: 1972 },
  { id: 27, title: "Крёстный отец 2", imdb: 9.0, year: 1974 },
];

describe("sortTable", () => {
  test("Should sort by 'id' in ascending order", () => {
    const data = [...mockData];
    sortTable(data, "id", true);
    expect(data.map((m) => m.id)).toEqual([25, 26, 27]);
  });

  test("Should sort by 'id' in descending order", () => {
    const data = [...mockData];
    sortTable(data, "id", false);
    expect(data.map((m) => m.id)).toEqual([27, 26, 25]);
  });

  test("Should sort by 'year' in ascending order", () => {
    const data = [...mockData];
    sortTable(data, "year", true);
    expect(data.map((m) => m.year)).toEqual([1972, 1974, 1994]);
  });

  test("Should sort by 'imdb' in descending order", () => {
    const data = [...mockData];
    sortTable(data, "imdb", false);
    expect(data.map((m) => m.imdb)).toEqual([9.3, 9.2, 9.0]);
  });

  test("Should sort by 'title' in ascending order", () => {
    const data = [
      { id: 1, title: "Б" },
      { id: 2, title: "А" },
      { id: 3, title: "В" },
    ];
    sortTable(data, "title", true);
    expect(data.map((item) => item.title)).toEqual(["А", "Б", "В"]);
  });

  test("Should sort by 'title' in descending order", () => {
    const data = [
      { id: 1, title: "Б" },
      { id: 2, title: "А" },
      { id: 3, title: "В" },
    ];
    sortTable(data, "title", false);
    expect(data.map((item) => item.title)).toEqual(["В", "Б", "А"]);
  });

  test("Should handle sorting when field does not exist in data", () => {
    const invalidData = [
      { id: 1, title: "Фильм 1" },
      { id: 2, title: "Фильм 2" },
    ];
    expect(() => sortTable(invalidData, "nonExistentField")).toThrow();
  });
});
