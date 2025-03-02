import React from "react";
import { FixedSizeList as List } from "react-window";
import { VariableSizeList as List1 } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";

import RowComponent from "./RowComponent";

const ListComponent = ({ items, moreItemsLoading, loadMore, hasNextPage }) => {
  const Row = ({ index, style }) => (
    <RowComponent
      image={items}
      num={index}
      iteArr={items}
      style={style}
      loading={index === items.length}
    />
  );

  //   var itemsNew = (items && items) || [];
  const itemCount = hasNextPage ? items.length + 1 : items.length;

  const getItemSize = (index) => {
    console.log(
      "items[index].description.length--------------",
      items[index].description.length
    );
    items[index].description.length || 50;
  };

  console.log("Loading item", items);
  //   console.log("itemsNew:::::::::", itemsNew);
  console.log(
    "items[index].description.length--------------",
    items[1].description.length
  );
  return (
    <InfiniteLoader
      isItemLoaded={(index) => index < items.length}
      itemCount={itemCount}
      loadMoreItems={loadMore}
      className="list-container"
    >
      {({ onItemsRendered, ref }) => (
        <List
          height={550}
          width="100%"
          itemCount={itemCount}
          itemSize={150}
          // className="list-container"
          onItemsRendered={({ visibleStopIndex }) => {
            if (visibleStopIndex === items.length - 2) {
              loadMore();
            }
          }}
          items={items}
          ref={ref}
          overscanCount={5}
        >
          {Row}
        </List>
      )}
    </InfiniteLoader>
  );
};

export default ListComponent;
