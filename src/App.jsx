import "./data";
import { RoomContext } from "./Context";
import { useContext } from "react";
import Navbar from './Navbar/Navbar'
import Search from "./Search/Search";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Default from "./Default/Default";
import "./App.css";
import Home from "./Home/Home";
import Rooms from "./Rooms/Rooms";
function App() {
  // const { rooms, setRooms } = useContext(RoomContext);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms/:id" element={<Rooms />} />
        <Route path="/search" element={<Search />} />
        <Route path="/*" element={<Default />} />
      </Routes>
    </>
  );
}

export default App;
