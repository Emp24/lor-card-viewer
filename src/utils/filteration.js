import _ from "lodash";
export function filteration(data, regions, cost, keyword) {
  const firstFilter = filterByCost(cost, data);
  const secondFilter = filterByRegion(regions, firstFilter);
  const thirdFilter = filterByKeywords(keyword, secondFilter);
  return thirdFilter;
}

function filterByCost(costs, data) {
  if (costs.length !== 0) {
    const filtered = data.filter((card) => costs.includes(card.cost));
    return filtered;
  }
  return data.sort((a, b) => a.cost - b.cost);
}
function filterByRegion(regions, data) {
  if (regions.length !== 0) {
    const filtered = data.filter((card) => regions.includes(card.region));

    return filtered;
  }
  return data;
}
function filterByKeywords(keywords, data) {
  if (keywords.length !== 0) {
    const filtered = data.filter((card) => {
      if (_.intersection(keywords, card.keywords).length > 0) return true;
    });

    return filtered;
  }
  return data;
}

function filterByType(type) {}
