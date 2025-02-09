import updateArrow from "../updateArrow";

describe("updateArrow", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <table id="movies-table">
        <thead>
          <tr>
            <th id="sort-id">ID</th>
            <th id="sort-title">Название</th>
            <th id="sort-year">Год</th>
            <th id="sort-imdb">Рейтинг IMDb</th>
          </tr>
        </thead>
      </table>
    `;
  });

  test("Should add an arrow with correct direction", () => {
    updateArrow("id", true);
    let arrow = document.querySelector("#sort-id .arrow");
    expect(arrow).toBeTruthy();
    expect(arrow.innerHTML).toBe("↑");
    updateArrow("id", false);
    arrow = document.querySelector("#sort-id .arrow");
    expect(arrow.innerHTML).toBe("↓");
  });

  test("Should remove existing arrows when adding a new one", () => {
    updateArrow("title", false);
    updateArrow("year", true);
    updateArrow("id", true);
    expect(document.querySelector("#sort-id .arrow")).toBeTruthy();
    expect(document.querySelector("#sort-title .arrow")).toBeNull();
    expect(document.querySelector("#sort-year .arrow")).toBeNull();
  });

  test("Should update arrow direction when sorting the same column again", () => {
    updateArrow("id", true);
    expect(document.querySelector("#sort-id .arrow").innerHTML).toBe("↑");
    updateArrow("id", false);
    expect(document.querySelector("#sort-id .arrow").innerHTML).toBe("↓");
  });

  test("Should do nothing if the column header does not exist", () => {
    updateArrow("non-existent-column", true);
    expect(document.querySelector(".arrow")).toBeNull();
  });
});
