import React from 'react'
import './Rooms.css'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { RoomContext } from '../Context';
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
export default function Rooms() {
  const { rooms, featured, details, setDetails, getItem, myDetailedRoom } = useContext(RoomContext);
  console.log(details);
  const { id } = useParams();
useEffect(() => {
  if (!details) {
    myDetailedRoom(id);
  }
}, [id, details, myDetailedRoom]);

if (!details) {
  return <h2>Loading...</h2>;
}


  return (
    <div>
      <div
        className="main-bg d-flex justify-content-center align-items-center "
        style={{
          background: `url(${details.fields.images[0].fields.file.url})`
        }}
      >
        <div className="header py-3 text-center px-5">
          <h1 className="fw-bold text-white position-relative text-center">
            {details.fields.name} Room
          </h1>

          <Button className="my-3">
            <Link to="/" className="text-decoration-none text-black">
              Back to Main
            </Link>
          </Button>
        </div>
      </div>
      <div className="many-photos container">
        <div className="row my-5">
          {details.fields.images.slice(1).map((img, i) => (
            <div className="col-lg-4" key={i}>
              <img
                src={img.fields.file.url}
                alt={`room-${i}`}
                className="w-100 my-4"
              />
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-lg-7">
            <h3 className="fw-bold my-3">Details</h3>
            <p>{details.fields.description}</p>
          </div>
          <div className="col-lg-5">
            <h3 className="fw-bold my-3">Info</h3>
            <p className="my-2">Price: ${details.fields.price}</p>
            <p className="my-2">Size: ${details.fields.size} SQFT</p>
            <p className="my-2">
              Max Capacity: {details.fields.capacity} People
            </p>
            <p className="my-2">
              Pets {details.fields.pets ? "Allowed" : "Not allowed"}
            </p>
            <p className="my-2">
              {details.fields.breakfast
                ? "Free Breakfast Included"
                : "No breakfast"}
            </p>
          </div>
        </div>
        <div className="extras">
          <h3 className="my-3 fw-bold">Extras</h3>
          <ul>
            {details?.fields?.extras?.map((el, index) => (
              <li key={index}>{el}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
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
