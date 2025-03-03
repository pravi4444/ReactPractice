import React, { useEffect, useState } from "react";
import ListComponent from "./ListComponent";

const MainList = ({ items, setItems, sortType, resetData, searchString }) => {
  // const [items, setItems] = useState([]);
  useEffect(() => {
    loadMore("start");
  }, []);
  const [moreItemsLoading, setMoreItemsLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [hasNextPage, setHasNextPage] = useState(true);
  const [pageVal, setpageVal] = useState(1);
  const [originalData, setOriginalData] = useState([]);
  // useEffect(() => {
  //   loadMore();
  // }, []);

  function searchData(array, value) {
    if (array && array.length > 0) {
      return array.filter(
        (data) =>
          JSON.stringify(data).toLowerCase().indexOf(value.toLowerCase()) !== -1
      );
    } else {
      setItems(originalData);
    }
  }
  useEffect(() => {
    setItems(originalData.photos);
  }, [resetData]);

  function SortData() {
    console.log("======SortData======", items);
    setItems(items.sort((a, b) => a[sortType] - b[sortType]));
    console.log("======SortData======", items);
  }

  useEffect(() => {
    if (searchString == "") {
      setItems(originalData);
    } else {
      const updateArr = searchData(items, searchString);
      setItems(updateArr);
    }
  }, [searchString]);
  useEffect(() => {
    console.log("-------------------idSort:::" + sortType);
    SortData();
  }, [sortType]);

  const loadMore = async (first) => {
    setMoreItemsLoading(true);

    console.log("pageValLLLLLLLLLLLLLLLLLLLL" + first);
    const response = await fetch(
      // `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
      // `https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${limit}`
      `https://api.slingacademy.com/v1/sample-data/photos?offset=${pageVal}&limit=10`
      //   "https://api.slingacademy.com/v1/sample-data/photos?offset=1&limit=10"
    );

    const data = await response.json();
    if (first == "start") setOriginalData(data);

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
