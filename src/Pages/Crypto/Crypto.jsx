import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const Crypto = () => {
  const [cryptoData, setCryptoData] = useState();

 
  if (!cryptoData) {
    axios
      .get("https://example-data.draftbit.com/crypto")
      .then((response) => {
        console.log(response);
        setCryptoData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <h1>Select Crypto</h1>
      <div className="content">
        <div className="row">
          {cryptoData?.map((crypto) => (
            <div className="col-4" key={crypto.id}>
              <div className="card">
                <h3>{crypto.name} ({crypto.symbol})</h3>
                <p>Market Cap: ${crypto["market cap"].toLocaleString()}</p>
                <p>Price: ${crypto.price.toLocaleString()}</p>
                <p>1h Change: {crypto["%_change_1h"]}%</p>
                <p>24h Change: {crypto["%_change_24h"]}%</p>
                <p>7d Change: {crypto["%_change_7d"]}%</p>
                <p>Circulating Supply: {crypto.circulating_supply.toLocaleString()} {crypto.symbol}</p>
                <p>Volume (24h): ${crypto.volume_24h.toLocaleString()}</p>
                <Link to={`/crypto/${crypto.id}`}>View more</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Crypto;
