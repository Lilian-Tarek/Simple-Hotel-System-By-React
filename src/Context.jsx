import { createContext, useState } from "react";
import roomsData from "./data.js";
import { useEffect } from "react";

export const RoomContext = createContext();

export const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState(roomsData);
  const featuredArr = rooms.filter((el) => el.fields.featured === true);
  const [featured, setFeatured] = useState(featuredArr);
  const [details, setDetails] = useState();
  const [price, setPrice] = useState(700);
  const [search, setSearch] = useState(rooms);
  const [type, setType] = useState("all");
  const [number, setNumber] = useState(1);
  const [pet, setPet] = useState(false);

  const [size, setSize] = useState(100);

  const [breakfast, setBreakfast] = useState(false);

  const getItem = (id) => {
    console.log(id);
  };
  const myDetailedRoom = (id) => {
    getItem(id);
    // const room=featured.find((el) =>  el.sys.id === id );

    const room = rooms.find((el) => el.sys.id === id);
    console.log(room);
    setDetails(room);
    return room;
  };
  const FindMyRoom = () => {
    setSearch(
      rooms.filter(
        (e) =>
          e.fields.size >= size &&
          e.fields.price <= price &&
          (type === "all" || e.fields.type === type) &&
          // e.fields.breakfast == breakfast &&
          // e.fields.pets === pet &&
          (!breakfast || e.fields.breakfast === true) &&
          (!pet || e.fields.pets === true) &&
          e.fields.capacity >= number
      )
    );
  };
  useEffect(() => {
    FindMyRoom();
  }, [type, number, size, price, pet, breakfast]); 

  return (
    <RoomContext.Provider
      value={{
        rooms,
        setRooms,
        featured,
        setFeatured,
        details,
        setDetails,
        getItem,
        myDetailedRoom,
        price,
        setPrice,
        search,
        setSearch,
        type,
        setType,
        number,
        setNumber,
        size,
        setSize,
        pet,
        setPet,
        breakfast,
        setBreakfast,
        FindMyRoom
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};
