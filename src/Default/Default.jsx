import React from 'react'
import './Default.css'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
export default function Default() {
  return (
    <div>
      <div
        className="home main-bg d-flex justify-content-center align-items-center "
        style={{ background: `url(/images/defaultBcg.jpeg)` }}
      >
        <div className="header py-3 text-center px-5">
          <h1 className="fw-bold text-white position-relative text-center">
        404 Error 
          </h1>
        
          <Button className='my-4'><Link to="/" className='text-decoration-none text-black'>Back to Main</Link></Button>
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
  height: 50px;
`;

