import React from 'react'
import styled from '@emotion/styled'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import t1 from "./assets/images/t1.jpg"
import t2 from "./assets/images/t2.jpg"
import t3 from "./assets/images/t3.jpg"
import t4 from "./assets/images/t4.jpg"



const Team = styled.div`
    width: 100%;
    padding-top: 60px;
    padding-bottom: 30px;
    text-align: center;
    justify-items: center;
    align-content: center;
    background-color: #002759;
    color:#eee;
`

const AllPeaople = styled.div`
    margin-top: 40px;
    width: 100%;
    display: flex;
    justify-items: center;
    justify-content: space-evenly;
    margin-bottom: 60px;

    @media (max-width: 768px) {
    display: block;
}
`

const Individuals = styled.div`
    width: 22%;
    justify-items: center;
    text-align: center;
    background-color:#002b64;
    padding-top: 30px;
    padding-bottom: 10px;
    color: #eee;

    @media (max-width: 768px) {
    width: 80%;
    margin-top: 20px;
}
`

const ImageDiv = styled.div`
    overflow: hidden;
    width: 75px;
    border: 5px solid #eee;
    border-radius:100%;
    height: 75px;
    background-image: url(${(props) => props.image});
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    width: 80px; 
    height: 80px; 
  };
    
`

const Socials = styled.div`
    display: flex;
    width: 100%;
    height: 40px;
    justify-content: space-evenly;
    margin-top: 40px; 
    margin-bottom: 0;
    `

const OurTeam = () => {
  return (
    <Team>
        <h1>Our <span style={{ color: '#00bbf0' }}>Team</span></h1>
        <AllPeaople>
            <Individuals>
                <ImageDiv image={t1}>
                
                </ImageDiv>
                <h2 style={{color:"#00bbf0", marginBottom:"0px"}}>Joseph Brown</h2>
                <p style={{marginTop:"0px", fontSize: '20px'}}>Marketing Head</p>
                <Socials>
                    <FacebookRoundedIcon/>
                    <TwitterIcon/>
                    <LinkedInIcon/>
                    <InstagramIcon/>
                    <YouTubeIcon/>
                </Socials>
            </Individuals>

            <Individuals>
            <ImageDiv image={t2}>
                </ImageDiv>
                <h2 style={{color:"#00bbf0", marginBottom:"0px"}}>Nancy White</h2>
                <p style={{marginTop:"0px", fontSize: '20px'}}>Marketing Head</p>
                <Socials>
                    <FacebookRoundedIcon/>
                    <TwitterIcon/>
                    <LinkedInIcon/>
                    <InstagramIcon/>
                    <YouTubeIcon/>
                </Socials>
            </Individuals>

            <Individuals>
            <ImageDiv image={t3}>
                </ImageDiv>
                <h2 style={{color:"#00bbf0", marginBottom:"0px"}}>Earl Martinez</h2>
                <p style={{marginTop:"0px", fontSize: '20px'}}>Josephine Allard</p>
                <Socials>
                    <FacebookRoundedIcon/>
                    <TwitterIcon/>
                    <LinkedInIcon/>
                    <InstagramIcon/>
                    <YouTubeIcon/>
                </Socials>
            </Individuals>

            <Individuals>
            <ImageDiv image={t4}>
                </ImageDiv>
                <h2 style={{color:"#00bbf0", marginBottom:"0px"}}>Joseph Brown</h2>
                <p style={{marginTop:"0px", fontSize: '20px'}}>Marketing Head</p>
                <Socials>
                    <FacebookRoundedIcon/>
                    <TwitterIcon/>
                    <LinkedInIcon/>
                    <InstagramIcon/>
                    <YouTubeIcon/>
                </Socials>
            </Individuals>

            


        </AllPeaople>
    </Team>
  )
}

export default OurTeam