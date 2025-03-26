import React from 'react'
import styled from "@emotion/styled"
import w1 from "./assets/images/why-us1.png"
import w2 from "./assets/images/why-us2.png"
import w3 from "./assets/images/why-us3.png"
import w4 from "./assets/images/why-us4.png"

const WhyUs = styled.div`
    padding-top: 60px;
    padding-bottom: 60px;
    width: 100%;
    text-align: center;
    justify-items: center;
    display: block;
`

const Sections = styled.div`
    width: 80%;
    text-align: center;
    justify-items: center;
`

const ImageDiv = styled.div`
    width: 65px;
    height: 65px;
    padding: 20px;
    margin-top: 60px;
    border: 5px solid #00204a;
    border-radius:100px;

    background-image: url(${(props) => props.image}); 
  background-size: 60px; 
  background-position: center; 
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    width: 80px; 
    height: 80px; 
  };
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

const WhyChooseUs = () => {
  return (
    <WhyUs>
        <h1>Why Choose <span style={{ color: '#00bbf0' }}>Us</span></h1>
        <Sections>
            <ImageDiv image={w1}>
            </ImageDiv>
            <h2>Expert Management</h2>
            <p>Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus</p>
        </Sections>

        <Sections>
        <ImageDiv image={w2}>
            </ImageDiv>
            <h2>Secure Investment</h2>
            <p>Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus</p>
        </Sections>


        <Sections>
        <ImageDiv image={w3}>
            </ImageDiv>
            <h2>Instant Trading</h2>
            <p>Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus</p>
        </Sections>

        <Sections>
        <ImageDiv image={w4}>
            </ImageDiv>
            <h2>EHappy Customers</h2>
            <p>Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus</p>
        </Sections>

        <Button>Read More</Button>
    </WhyUs>
  )
}

export default WhyChooseUs