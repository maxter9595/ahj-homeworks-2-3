function sortTable(data, field, ascending = true) {
  const isNumeric = ["id", "year", "imdb"].includes(field);

  data.sort((a, b) => {
    const valA = a[field];
    const valB = b[field];

    if (isNumeric) {
      return ascending ? valA - valB : valB - valA;
    } else {
      return ascending ? valA.localeCompare(valB) : valB.localeCompare(valA);
    }
  });
}

export default sortTable;
