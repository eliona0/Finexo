import React from 'react'
import styled from '@emotion/styled'
import FloatingImage from "./FloatingImage";

const Container = styled.div`
    width: 100%;
    height: fit-content;
    justify-items: center;
    align-content: center;
    background-color: #20176a;
`
const CryptoCurrency = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-around;
   

    @media (max-width: 992px){
    display: block;
  }
`

const HeroText = styled.div`
    width: 40%;
    color: #eee;
    align-content: center;

    @media (max-width: 992px){
    margin-top: 30px;
    width: 80%;
  }
`
const Animation = styled.div`
    width: 40%;
    padding: 20px;
    text-align: center;

    @media (max-width: 992px){
    margin-top: 60px;
    margin-bottom: 40px;
    width: 80%;
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
const Hero = () => {
  return (
    <div>
        <Container>
            <CryptoCurrency>
                <HeroText>
                    <div className='h1' style={{width: "50%"}}>
                    <h1 tyle={{fontSize: '50px'}}>CRYPTO CURRENCY</h1>
                    </div>
              <p>Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.</p>
              <Button>Read More</Button>
              </HeroText>

              <Animation>
                <FloatingImage/>
              </Animation>
            </CryptoCurrency>
        </Container>

    </div>
  )
}

export default Hero
