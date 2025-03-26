import React from 'react'
import styled from '@emotion/styled'
import photo from "./assets/images/about-us.png"

const About = styled.div`
    width: 100%;
    padding-top: 60px;
    text-align: center;
    justify-items: center;
    align-content: center;
    background-color: #20176a;
    color:#eee;
`

const Inner = styled.div`
    display: flex;
    width: 75%;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
    display: block;
    justify-items: center;
    }
`

const InnerDivs = styled.div`
    width: 50%;
    margin-bottom: 60px;
    text-align: left;

    @media (max-width: 768px) {
    width: 100%;
    }

    img {
        width: 100%;
        height: auto;
        max-width: 400px; 
        object-fit: cover; 
    }
`

const Button = styled.button`
  width: 180px;
  height: 45px;
  background-color: #00bbf0;
  color: #eee;
  font-size: 18px;
  border: none;
  margin-top: 20px;
  transition: background-color 0.3s ease, color 0.5s ease;

  &:hover {
    background-color: #0398c1;
    cursor: pointer;
  }
`

const AboutUs = () => {
  return (
    <About>
        <h1>About <span style={{ color: '#00bbf0' }}>Us</span></h1>
        <p style={{ marginTop: "0px" }}>Magni quod blanditiis non minus sed aut voluptatum illum quisquam aspernatur ullam vel beatae rerum ipsum voluptatibus</p>
        <Inner>
            <InnerDivs>
                <img src={photo} alt="About Us" />
            </InnerDivs>

            <InnerDivs>
                <h2>We Are Finexo</h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>

                <p>Molestiae odio earum non qui cumque provident voluptates, repellendus exercitationem, possimus at iste corrupti officiis unde alias eius ducimus reiciendis soluta eveniet. Nobis ullam ab omnis quasi expedita.</p>
                <Button>Read More</Button>
            </InnerDivs>
        </Inner>
    </About>
  )
}

export default AboutUs
