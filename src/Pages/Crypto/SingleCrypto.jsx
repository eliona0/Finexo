import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./style.scss";

const SingleCrypto = () => {
  const [data, setData] = useState();
  const { id } = useParams(); 


  if (!data) {
    axios.get(`https://example-data.draftbit.com/crypto/${id}`).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }

  return (
    <div className="container">
      <h2>{data?.name} ({data?.symbol})</h2>
      <Link to="/crypto">Back</Link> 
      {data && (
        <div>
          <div className="details">
            <p>Market Cap: ${data["market cap"]?.toLocaleString()}</p>
            <p>Price: ${data?.price?.toLocaleString()}</p>
            <p>1h Change: {data?.["%_change_1h"]}%</p>
            <p>24h Change: {data?.["%_change_24h"]}%</p>
            <p>7d Change: {data?.["%_change_7d"]}%</p>
            <p>Circulating Supply: {data?.circulating_supply?.toLocaleString()} {data?.symbol}</p>
            <p>Volume (24h): ${data?.volume_24h?.toLocaleString()}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleCrypto;
