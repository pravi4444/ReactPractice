import React from "react";

const Loader = ({ style }) => (
  <div style={style} className="list-group-loader">
    <div className="loader"></div>
  </div>
);

const Item = ({ image, num, style, iteArr, loading }) => (
  //   console.log("image", image);
  //   console.log("num", num);
  //   console.log("style", style);
  //   console.log("iteArr", iteArr);
  //   console.log("loading", loading);
  // {
  //   iteArr.index % 2 == 0 ? bg - amber - 500 : bg - amber - 200;
  // };
  // iteArr.length > 0 ? (
  //   <div class="user-card">
  //     <img src={iteArr[num + 1]?.url} alt="Random Photo" className="" />
  //     <div class="user-info">
  //       <h2>{iteArr[num + 1]?.title}</h2>
  //       <span>{iteArr[num + 1]?.description}</span>
  //       {/* <button>Contact</button> */}
  //     </div>
  //   </div>
  // ) : (
  //   <></>
  // );

  // iteArr.length > 0 ? (
  //   <div style={style} className="flex flex-row  border-b-2 border-t-2 m-2">
  //     <div className="avatar flex flex-wrap ">
  //       <img
  //         alt="avatar"
  //         className="min-w-24 min-h-24 content-center h-[86px] w-[86px] rounded-full object-cover object-center"
  //         src={iteArr[num + 1]?.url}
  //       />
  //     </div>
  //    // {/* <p>{iteArr[num + 1]?.user}</p>
  //    // <p>{iteArr[num + 1]?.description}</p> */}
  //     //{/* {iteArr[num].description} */}
  //     <div className="details w-dvw">
  //       <div className="number">
  //         <div className="info">
  //           <div>{iteArr[num + 1]?.user}</div>
  //           <div>{iteArr[num + 1]?.description}</div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // ) : (
  //   <></>
  // );

  <div
    style={style}
    className="odd:bg-gray-300 even:bg-gray-200  hover:bg-amber-100"
  >
    <a
      href="#"
      class="flex flex-col w-full gap-4  items-center border border-gray-200 rounded-lg shadow-sm md:flex-row"
    >
      <img
        class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src={iteArr[num + 1]?.url}
        alt=""
      />
      <div class="flex flex-col items-start content-start p-4 leading-normal">
        <h5 class="mb-2 text-xl  text-left font-bold tracking-tight text-gray-900 dark:text-white">
          {iteArr[num + 1]?.title}
        </h5>
        <p class="mb-3 font-normal text-left justify-items-start text-gray-700 dark:text-gray-400 text-sm">
          {iteArr[num + 1]?.description}
        </p>
      </div>
    </a>
  </div>
);

const RowComponent = ({ image, num, style, iteArr, loading }) => {
  // let className = num % 2 == 0 ? "oddSkin" : "evenSkin";

  return loading || iteArr.length < 0 ? (
    <Loader style={style} />
  ) : (
    <Item
      // className={className}
      image={image}
      num={num}
      style={style}
      iteArr={iteArr}
      loading={loading}
    />
  );
};

export default RowComponent;
