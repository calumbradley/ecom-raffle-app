export const fetchProductData = () => {
  console.log("Fetching product data from the server...");
  return fetch("http://localhost:4000/api/products")
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
      throw error;
    });
};
