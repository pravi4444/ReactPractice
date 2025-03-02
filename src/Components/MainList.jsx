import React, { useEffect, useState } from "react";
import ListComponent from "./ListComponent";

const MainList = ({ items, setItems }) => {
  // const [items, setItems] = useState([]);
  useEffect(() => {
    loadMore();
  }, []);
  const [moreItemsLoading, setMoreItemsLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [hasNextPage, setHasNextPage] = useState(true);
  const [pageVal, setpageVal] = useState(1);
  useEffect(() => {
    loadMore();
  }, []);

  const loadMore = async () => {
    setMoreItemsLoading(true);

    console.log("pageValLLLLLLLLLLLLLLLLLLLL" + pageVal);
    const response = await fetch(
      // `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
      // `https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${limit}`
      `https://api.slingacademy.com/v1/sample-data/photos?offset=${pageVal}&limit=10`
      //   "https://api.slingacademy.com/v1/sample-data/photos?offset=1&limit=10"
    );

    const data = await response.json();
    data.length > 0;
    setItems([...items, ...data.photos]);
    setpageVal(pageVal + 1);
    setMoreItemsLoading(false);
  };
  //   console.log("000000000000vitems.length 000000000000000", items.length);
  console.log(
    "000000000000vitems.length 000000000000000",
    JSON.stringify(items)
  );
  return items.length > 0 ? (
    <>
      <ListComponent
        items={items} //items.sort((a, b) => a.user - b.user)
        moreItemsLoading={moreItemsLoading}
        loadMore={loadMore}
        hasNextPage={hasNextPage}
      />
    </>
  ) : (
    <div>Loading ...</div>
  );
};

export default MainList;
