import React from 'react';
import { Link } from 'react-router-dom';
import homepage from '../assets/images/homepage.jpg';


function Home() {
  const HomeStyle = {
    textAlign: 'center'
  };
  return (
    <div style = {HomeStyle}>
      <h1><style jsx> {`
    h1 {
      color: black;
    }
    h1:hover {
      color: green;
    }
    `}</style>Heralding Harold</h1>
      <img src={homepage}/>
    </div>
  );
}

export default Home;