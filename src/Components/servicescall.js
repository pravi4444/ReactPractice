export const fetchProducts = async (page, limit) => {
  const response = await fetch(
    // `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
    // `https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${limit}`
    // `https://api.slingacademy.com/v1/sample-data/photos?offset=${page}&limit=${limit}`
    "https://api.slingacademy.com/v1/sample-data/photos?offset=1&limit=10"
  );
  const data = await response.json();
  console.log("Data from fetchProducts::::: " + JSON.stringify(data));
  return data;
};
