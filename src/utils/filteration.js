export function filteration(data, region, cost, keyword) {
  if (cost === -1) {
    if (region === "All Cards") return data.sort((a, b) => a.cost - b.cost);
    const filtered = data.filter((card) => card.region === region);
    filtered.sort((a, b) => a.cost - b.cost);
    return filtered;
  } else {
    if (region === "All Cards")
      return data.filter((card) => card.cost === cost);
    const filtered = data.filter(
      (card) => card.region === region && card.cost === cost
    );
    return filtered;
  }
}

function filterByCost(cost) {
  if (cost !== -1) {
  }
}
function filterByKeywords(keywords) {}
function filterByRegion(region) {}
function filterByType(type) {}
