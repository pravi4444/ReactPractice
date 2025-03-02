import logo from "./assets/adcb.jpg";
import MainList from "./MainList";
// import MainContainer from "./MainList";
import ProdList from "./ProdList";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
// import MainList from "./MainList";
function getDate() {
  const d = new Date();
  return d.getFullYear();
}

export default function MainContainer({ Children }) {
  console.log(Children);
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
        <div className="flex flex-row bg-stone-200 ">
          <p className="p-2 h-1rem text-black text-left">
            List Dislay using React Window Libaray
          </p>
        </div>

        <MainList></MainList>
      </main>
      <aside className="dashboard-sidebar">
        <div>
          <nav>
            <ul>
              <li>
                {/* <a href="#0">Home</a> */}
                <Link to="/MainList">Home</Link>
              </li>
              <li>
                {/* <a href="#0">About</a> */}
                <Link to="/ProdList">Product List</Link>
              </li>
              {/* <li>
                <a href="#0">Clients</a>
              </li>
              <li>
                <a href="#0">Contact</a>
              </li> */}
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
}
