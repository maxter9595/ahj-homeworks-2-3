function updateArrow(field, ascending) {
  document.querySelectorAll(".arrow").forEach((arrow) => arrow.remove());

  const th = document.querySelector(`#sort-${field}`);
  if (!th) return;

  const arrow = document.createElement("span");
  arrow.classList.add("arrow");
  arrow.textContent = ascending ? "↑" : "↓";
  th.appendChild(arrow);
}

export default updateArrow;
