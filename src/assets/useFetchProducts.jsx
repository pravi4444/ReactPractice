import { useEffect, useState } from "react";

export function useFetchProducts(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(function () {
    async function fetchProducts(page, limit) {
      const res = await fetch(
        "https://api.slingacademy.com/v1/sample-data/photos?offset=1&limit=10"
      );

      if (!res.ok) throw new Error("Something went wrong with fetching movies");

      const data = await res.json();
      if (data.Response === "False") throw new Error("Movie not found");
    }

    fetchProducts(1, 10);
    // const fetchProducts = async (page, limit) => {
    //     const response = await fetch(
    //       // `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
    //       // `https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${limit}`
    //       // `https://api.slingacademy.com/v1/sample-data/photos?offset=${page}&limit=${limit}`
    //       "https://api.slingacademy.com/v1/sample-data/photos?offset=1&limit=10"
    //     );
    //     const data = await response.json();
    //     console.log("Data from fetchProducts::::: " + data.length);
    //     return data ? data : [];
    //   };
  }, []);
  return { movies, isLoading, error };
}
