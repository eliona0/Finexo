import React from 'react'
import styled from '@emotion/styled'
import { Grid2, Typography, Box } from '@mui/material';
import currencyWallet from "./assets/images/currency-wallet.png"
import securityStorage from "./assets/images/security-storage.png"
import expertSupport from "./assets/images/expert-support.png"

const Services = styled.div`
    width: 100%;
    padding: 50px 0;
    text-align: center;
    justify-items: center;
    align-content: center;
    background-color: white;

    @media (max-width: 768px) {
    width: 100%;
  }

`

const Button = styled.button`
  width: 180px;
  height: 45px;
  background-color: #00bbf0;
  color: #eee;
  font-size: 18px;
  border: none;
  margin-top:20px ;
  transition: background-color 0.3s ease, color 0.5s ease;

  &:hover {
    background-color: #0398c1;
    cursor: pointer;
  }
`

const OurServices = () => {
  return (
    <Services>
    <h1>Our <span style={{ color: '#00bbf0' }}>Services</span></h1>
    <p style={{marginTop: "0px"}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</p>
    <Grid2 container spacing={4} marginBottom={5} marginTop={5}>
      <Grid2 item xs={12} sm={6} md={4}>
        <Box textAlign="center" maxWidth="300px" margin="0 auto" backgroundColor="#f8f8f9" padding={3} borderRadius="4px">
          <img src={currencyWallet} alt="Image 1" style={{ width: '80px', height: 'auto' }} />
          <h2 style={{}}>CURRENCY WALLET</h2>
          <Typography variant="body1">
          fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using
          </Typography>
        </Box>
      </Grid2>

      <Grid2 item xs={12} sm={6} md={4}>
        <Box textAlign="center" maxWidth="300px" margin="0 auto" backgroundColor="#f8f8f9" padding={3} borderRadius="4px">
          <img src={securityStorage} alt="Image 1" style={{ width: '80px', height: 'auto' }} />
          <h2 style={{}}>SECURITY STORAGE</h2>
          <Typography variant="body1">
          fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using
          </Typography>
        </Box>
      </Grid2>

      <Grid2 item xs={12} sm={6} md={4}>
        <Box textAlign="center" maxWidth="300px" margin="0 auto" backgroundColor="#f8f8f9" padding={3} borderRadius="4px">
          <img src={expertSupport} alt="Image 1" style={{ width: '80px', height: 'auto' }} />
          <h2 style={{}}>EXPERT SUPPORT</h2>
          <Typography variant="body1">
          fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using
          </Typography>
        </Box>
      </Grid2>


    </Grid2>

    <Button>View More</Button>
    </Services>
  )
}

export default OurServices