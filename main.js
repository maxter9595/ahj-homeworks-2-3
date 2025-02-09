/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/data/data.json
const data_namespaceObject = /*#__PURE__*/JSON.parse('[{"id":26,"title":"Побег из Шоушенка","imdb":9.3,"year":1994},{"id":25,"title":"Крёстный отец","imdb":9.2,"year":1972},{"id":27,"title":"Крёстный отец 2","imdb":9,"year":1974},{"id":1047,"title":"Тёмный рыцарь","imdb":9,"year":2008},{"id":223,"title":"Криминальное чтиво","imdb":8.9,"year":1994}]');
;// CONCATENATED MODULE: ./src/js/sortTable.js
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
/* harmony default export */ const js_sortTable = (sortTable);
;// CONCATENATED MODULE: ./src/js/updateArrow.js
function updateArrow(field, ascending) {
  document.querySelectorAll(".arrow").forEach(arrow => arrow.remove());
  const th = document.querySelector(`#sort-${field}`);
  if (!th) return;
  const arrow = document.createElement("span");
  arrow.classList.add("arrow");
  arrow.textContent = ascending ? "↑" : "↓";
  th.appendChild(arrow);
}
/* harmony default export */ const js_updateArrow = (updateArrow);
;// CONCATENATED MODULE: ./src/js/generateTable.js
function generateTable(data) {
  const tableBody = document.querySelector("#movies-table tbody");
  tableBody.innerHTML = "";
  data.forEach(movie => {
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
/* harmony default export */ const js_generateTable = (generateTable);
;// CONCATENATED MODULE: ./src/js/app.js




let sortOrder = 1;
let sortFieldIndex = 0;
const fields = ["id", "title", "year", "imdb"];
setInterval(() => {
  const currentField = fields[sortFieldIndex];
  const ascending = sortOrder === 1;
  const sortedData = [...data_namespaceObject];
  js_sortTable(sortedData, currentField, ascending);
  js_generateTable(sortedData);
  js_updateArrow(currentField, ascending);
  sortOrder = -sortOrder;
  if (sortOrder === 1) {
    sortFieldIndex = (sortFieldIndex + 1) % fields.length;
  }
}, 2000);
js_generateTable(data_namespaceObject);
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;