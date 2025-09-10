import React from 'react'
import './Search.css'
import { useContext } from 'react';
import { RoomContext } from '../Context';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Search() {
    const {
      rooms,
      featured,
      details,
      setDetails,
      getItem,
      myDetailedRoom,
      price,
      setPrice,
      search,
      setSearchtype,
      type,
      setType,
      number,
      setNumber,
      size,
      setSize,
      pet,
      setPet,
      breakfast,
      setBreakfast,FindMyRoom
    } = useContext(RoomContext);
    return (
      <>
        <div
          className="home main-bg d-flex justify-content-center align-items-center "
          style={{ background: `url(/images/room-2.jpeg)` }}
        >
          <div className="header py-3 text-center px-5">
            <h1 className="fw-bold text-white position-relative text-center">
              Our Rooms
            </h1>

            <Button className="my-4">
              <Link to="/" className="text-decoration-none text-black">
                Return Home
              </Link>
            </Button>
          </div>
        </div>
        <div className="search">
          <h2 className="text-center fw-bold my-4 position-relative">
            Search rooms
          </h2>
          <div className="container my-3">
            <form className="d-flex w-100 row p-2">
              <div className="d-flex flex-column gap-2 col-lg-3 col-md-6">
                <label>Room Type</label>
                <select onChange={(e) => (setType(e.target.value) ) }>
                  <option>all</option>
                  <option>triple</option>
                  <option>double</option>
                  <option>family</option>
                  <option>single</option>
                </select>
              </div>
              <div className="d-flex flex-column gap-2 col-lg-3 col-md-6">
                <label>Guests</label>
                <input
                  type="number"
                  defaultValue={1}
                  onChange={(e) => (setNumber(parseInt(e.target.value)))}
                />
              </div>
              <div className="d-flex flex-column gap- slider-container col-lg-2 col-md-6">
                <label>Room Price ${price}</label>
                <input
                  type="range"
                  min="0"
                  max="700"
                  step="10"
                  value={price}
                  onChange={(e) => (setPrice(parseInt(e.target.value)))}
                />
              </div>
              <div className="d-flex flex-column gap-2 col-lg-2 col-md-6">
                <label>Room Size</label>
                <input
                  type="number"
                  defaultValue={100}
                  onChange={(e) => (setSize(parseInt(e.target.value)))}
                />
              </div>
              <div className="d-flex flex-column gap-2 col-lg-2 col-md-6">
                <div className="d-flex gap-1">
                  <input
                    type="checkbox"
                    id="breakfast"
                    onChange={(e) => (setBreakfast(e.target.checked))}
                  />
                  <label htmlFor="breakfast">breakfast</label>
                </div>
                <div className="d-flex gap-1">
                  <input
                    type="checkbox"
                    onChange={(e) => (setPet(e.target.checked))}
                    id="pets"
                  />
                  <label htmlFor="pets">Pets</label>
                </div>
              </div>
            </form>
            <div className="row">
              {search.length>0?(search.map((el) => {
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
                            onClick={() => {
                              return (
                                getItem(el.sys.id), myDetailedRoom(el.sys.id)
                              );
                            }}
                          >
                            Features
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })):<p className="text-center fw-bold my-5">No rooms found </p>}
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
`;
