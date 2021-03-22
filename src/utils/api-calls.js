export async function fullData() {
  const response = await fetch("http://localhost:4000");
  const data = response.json();
  return data;
}

export async function getKeywords() {
  const response = await fetch("http://localhost:4000/keywords");
  const data = response.json();
  return data;
}

export async function getRegions() {
  const response = await fetch("http://localhost:4000/regions");
  const data = response.json();
  return data;
}
