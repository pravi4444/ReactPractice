import React, { useState } from "react";
import MainList from "./Components/MainList";
import logo from "./assets/adcb.jpg";

const App = () => {
  const [items, setItems] = useState([]);

  function getDate() {
    const d = new Date();
    return d.getFullYear();
  }
  function userSort() {
    console.log("============", items);
    setItems(items.sort((a, b) => a.user - b.user));
    console.log("============", items);
  }
  function idSort() {
    console.log("============", items);
    setItems(items.sort((a, b) => a.id - b.id));
    console.log("============", items);
  }

  const openExternalWebsite = () => {
    const url = "https://www.adcb.com";
    window.open(url, "_blank"); // Opens the website in a new tab
  };

  return (
    <div className="MainContainer">
      <header className="dashboard-header">
        <div className="logo1">
          <img src={logo} className="h-fit w-30" />
        </div>
        <h1 className="w-xl"> ADCB React Scroll List</h1>
        {/* <center>
          <h1> ADCB React Scroll List</h1> 
        </center> */}
      </header>
      <main className="dashboard-main">
        <div className="flex flex-row  bg-white">
          <p className="p-2 h-1rem text-black text-left">
            List dislay using React-Window and Tailwinds css
          </p>
        </div>

        <MainList onShow={() => userSort()} items={items} setItems={setItems} />
      </main>
      <aside className="dashboard-sidebar">
        <div>
          <nav>
            <ul>
              <li onClick={userSort}>
                <a>User Sort</a>
              </li>
              <li onClick={idSort}>
                <a>ID Sort</a>
              </li>
              <li onClick={openExternalWebsite}>
                <a>Adcb</a>
              </li>
            </ul>
          </nav>
        </div>

        <button
          type="button"
          id="resize"
          onClick={() => {
            // alert("tes");
            document.querySelector(".MainContainer").classList.toggle("Sbbig");
          }}
        >
          ☰
        </button>
      </aside>
      <footer className="dashboard-footer">
        © {getDate()} ADCB. All Rights Reserved.{" "}
      </footer>
    </div>
  );
};

export default App;
