export function filteration(data, region, cost, keyword) {
  const firstFilter = filterByCost(cost, data);
  const secondFilter = filterByRegion(region, firstFilter);
  const thirdFilter = filterByKeywords(keyword, secondFilter);
  return thirdFilter;
}

function filterByCost(cost, data) {
  if (cost !== -1) {
    const filtered = data.filter((card) => card.cost === cost);
    return filtered;
  }
  return data.sort((a, b) => a.cost - b.cost);
}
function filterByRegion(region, data) {
  if (region !== "All Cards") {
    const filtered = data.filter((card) => card.region === region);

    return filtered;
  }
  return data;
}
function filterByKeywords(keyword, data) {
  if (keyword !== "none") {
    const filtered = data.filter((card) => card.keywords.includes(keyword));
    return filtered;
  }
  return data;
}

function filterByType(type) {}
