import React, { useContext } from "react";
import "./Home.css";
import styled from "styled-components";
import { RoomContext } from "../Context";
import { Link } from "react-router-dom";
export default function Home() {
  const { rooms, featured, details, setDetails, getItem, myDetailedRoom } =
    useContext(RoomContext);
  console.log(featured);
  return (
    <>
      <div
        className="home main-bg d-flex justify-content-center align-items-center "
        style={{ background: `url(/images/defaultBcg.jpeg)` }}
      >
        <div className="header py-3 text-center px-5">
          <h1 className="fw-bold text-white position-relative text-center">
            Luxurious Rooms
          </h1>
          <p className="my-4 text-white text-center">
            Deluxe Rooms Starting At $2.99
          </p>
                  <Button className='my-4'><Link to="/search" className='text-decoration-none text-black'>Search For Rooms</Link></Button>
        
        </div>
      </div>
      <div className="featured py-5">
        <h2 className="text-center position-relative">Featured Rooms</h2>
        <div className="container my-5">
          <div className="row">
            {featured.map((el) => {
              return (
                <div className="col-lg-4 col-12 my-3" key={el.sys.id}>
                  <div className="position-relative overflow-hidden featured-room">
                    <div className="price position-absolute bg-black text-white">
                      <p>${el.fields.price}</p>
                    </div>
                    <img
                      src={el.fields.images[0].fields.file.url}
                      className="w-100"
                    />
                    <div className="bottom text-center p-2 fw-bold">
                      {el.fields.name}
                    </div>
                    <div className="overlay position-absolute d-flex justify-content-center w-100 h-100 align-items-center">
                      <Button>
                        <Link
                          to={`/rooms/${el.sys.id}`}
                          className="text-decoration-none text-black"
                          onClick={() => { return (getItem(el.sys.id),myDetailedRoom(el.sys.id)) }}
                        >
                          Features
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
const Button = styled.button`
  background-color: var(--primaryColor);
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  text-align: center;
  height: 50px;
`;
