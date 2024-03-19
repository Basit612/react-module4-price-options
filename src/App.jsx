// import Navbar from "./components/Navbar/Navbar";

import LineChart from "./components/LineChart/LineChart";
import NavBarr from "./components/NavBarr/NavBarr";
import Phones from "./components/Phones/Phones";
import Prices from "./components/Prices/Prices";

function App() {
  return (
    <>
      <NavBarr></NavBarr>
      {/* <Navbar></Navbar> */}
      <Prices></Prices>
      <LineChart></LineChart>
      <Phones></Phones>
    </>
  );
}

export default App;
