function generateTable(data) {
  const tableBody = document.querySelector("#movies-table tbody");
  tableBody.innerHTML = "";

  data.forEach((movie) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${movie.id}</td>
      <td>${movie.title}</td>
      <td>(${movie.year})</td>
      <td>imdb: ${movie.imdb.toFixed(2)}</td>
    `;

    tableBody.appendChild(row);
  });
}

export default generateTable;
