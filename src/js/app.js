import data from "../data/data.json";
import sortTable from "./sortTable";
import updateArrow from "./updateArrow";
import generateTable from "./generateTable";

let sortOrder = 1;
let sortFieldIndex = 0;
const fields = ["id", "title", "year", "imdb"];

setInterval(() => {
  const currentField = fields[sortFieldIndex];
  const ascending = sortOrder === 1;
  const sortedData = [...data];

  sortTable(sortedData, currentField, ascending);
  generateTable(sortedData);
  updateArrow(currentField, ascending);

  sortOrder = -sortOrder;

  if (sortOrder === 1) {
    sortFieldIndex = (sortFieldIndex + 1) % fields.length;
  }
}, 2000);

generateTable(data);
