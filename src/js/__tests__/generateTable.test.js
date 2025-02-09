import generateTable from "../generateTable";

const mockData = [
  { id: 26, title: "Побег из Шоушенка", imdb: 9.3, year: 1994 },
  { id: 25, title: "Крёстный отец", imdb: 9.2, year: 1972 },
  { id: 27, title: "Крёстный отец 2", imdb: 9.0, year: 1974 },
];

describe("generateTable", () => {
  let tableBody;

  beforeEach(() => {
    document.body.innerHTML = `
      <table id="movies-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Название</th>
            <th>Год</th>
            <th>Рейтинг IMDb</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    `;
    tableBody = document.querySelector("#movies-table tbody");
  });

  test("Should add correct number of rows to the table", () => {
    generateTable(mockData);
    expect(tableBody.children.length).toBe(mockData.length);
  });

  test("Should correctly display movie data", () => {
    generateTable(mockData);
    const rows = tableBody.querySelectorAll("tr");
    expect(rows[0].textContent).toContain("Побег из Шоушенка");
    expect(rows[0].textContent).toContain("1994");
    expect(rows[0].textContent).toContain("imdb: 9.30");
  });
});
