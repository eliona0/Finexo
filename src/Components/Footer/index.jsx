import React from 'react'
import styled from "@emotion/styled"
import { NavLink } from "react-router-dom";
import PlaceIcon from '@mui/icons-material/Place';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import './index.scss';

const Section = styled.div`
    width: 100%;
    text-align: center;
    justify-items: center;
    align-content: center;
    background-color: #002759;
    color:#eee;
 `

const ColumnsWrapper = styled.div`
margin-top: 20px;
width: 80%;
display: flex;
justify-content: space-between;
margin-bottom: 60px;

@media (max-width: 768px) {
    display: block;
    width: 100%; 
    justify-items: center;
  }
`

 const Columns = styled.div`
  width: 21%;
  font-size: 18px;
  justify-items: left;
  text-align: left;
  padding-top: 30px;
  padding-bottom: 10px;
  color: #eee;

  @media (max-width: 768px) {
    width: 80%; 
  }
 `

 const Socials = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  width: 120px; 
 `

 const Links = styled.div`
 display: block;
 `

 const AllRightsReserved = styled.div`
  width: 100%;
  height: 80px;
  background-color: #eee;
  text-align: center;
  color: #002759;
  align-content: center;
  font-size: 18px;
 `

const Button = styled.button`
width: 250px;
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

const Footer = () => {
  return (
  <Section>
    <ColumnsWrapper>
    <Columns>
    <h2 style={{color: "#eee"}}>Address</h2>
    <div style={{ display: 'flex', justifyContent: 'space-beetween' }}>
    <PlaceIcon/>  <NavLink to="/" style={{color: "#eee", textDecoration:"none"}}>Location</NavLink>
    </div>

    <div style={{ display: 'flex', justifyContent: 'space-beetween' }}>
    <CallIcon/>  <NavLink to="/" style={{color: "#eee", textDecoration:"none"}}>Call +01 1234567890</NavLink>
    </div>

    <div style={{ display: 'flex', justifyContent: 'space-beetween' }}>
    <EmailIcon/>  <NavLink to="/" style={{color: "#eee", textDecoration:"none"}}>demo@gmail.com</NavLink>
    </div>

    <Socials>
      <FacebookRoundedIcon/>
      <TwitterIcon/>
      <LinkedInIcon/>
      <InstagramIcon/>

    </Socials>
    </Columns>

    <Columns>
    <h2 style={{color: "#eee"}}>Info</h2>
    <p>necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful</p>
    </Columns>

    <Columns>
      <h2 style={{color: "#eee"}}>Links</h2>

      <Links>
      <p><NavLink to="/" style={{color: "#eee", textDecoration:"none"}}>Home</NavLink></p>
      <p><NavLink to="/about" style={{color: "#eee", textDecoration:"none"}}>About</NavLink></p>
      <p><NavLink to="/services" style={{color: "#eee", textDecoration:"none"}}>Services</NavLink></p>
      <p><NavLink to="/why" style={{color: "#eee", textDecoration:"none"}}>Why Us</NavLink></p>
      <p><NavLink to="/team" style={{color: "#eee", textDecoration:"none"}}>Team</NavLink></p>
      </Links>
    </Columns>

    <Columns>
    <h2 style={{color: "#eee"}}>Subscribe</h2>
    <input
      type="text"
      placeholder="Enter email" 
      className="simple-input"
    />

    <Button>Subscribe</Button>
    </Columns>
    </ColumnsWrapper>

    <AllRightsReserved>
      <p>© 2024 All Rights Reserved By Free Html Templates</p>
    </AllRightsReserved>
  </Section>
  )
}

export default Footer