export async function resourcesLoader() {
  const SHEETS_KEY = "AIzaSyAIUQ5MsQjv8Reb4VbDCb1FqCN6r9L-RZQ"; // Replace with your API key
  const SHEET_ID = "1eyPHmrevpHmxCeKpHSTFVUh0QWF7G7gsUAFjK9YyWGE"; // Replace with your Google Sheet ID
  const RANGE = "A1:C"; // Adjust the range to match your sheet structure

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${SHEETS_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch resources");
  }

  const { values } = await response.json();
  const resources = values.slice(1).reduce((map, [category, resource, link]) => {
    if (!map[category]) map[category] = [];
    map[category].push([resource, link]);
    return map;
  }, {});

  return resources;
}
