/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BannerSection = styled.section`
  background-image:url(https://tse3.mm.bing.net/th?id=OIP.0EpGESH6j5i88vvb3FIdDQHaEo&pid=Api&P=0&h=180);
  background-repeat: no-repeat;
  background-size:cover;
  padding: 40px 0;
`;

const BannerContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
`;

const BannerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 50%;
`;

const BannerVideo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

const BannerImage = styled.img`
  width: 100%;
  max-width: 500px;
  cursor: pointer;
`;

const BannerCategory = styled.div`
  display: inline-block;
  background-color: #6BD1FF;
  color: #F5F5F5;
  font-size: 30px;
  font-weight: 400;
  width: auto;
  padding: 10px 20px;
  border-radius: 4px;
  text-align: center;
  margin-bottom: 30px;
`;

const BannerTitle = styled.h2`
  color: #F5F5F5;
  font-size: 36px;
  font-weight: 400;
  margin-bottom: 20px;
`;

const BannerDescription = styled.p`
  color: #F5F5F5;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.5;
`;

function Banner() {
    return (
        <BannerSection>
            <BannerContent className="container">
                <BannerText>
                    <BannerCategory>Front End</BannerCategory>
                    <BannerTitle>Challenge React</BannerTitle>
                    <BannerDescription>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</BannerDescription>
                </BannerText>
                <BannerVideo>
                    <Link to='https://www.youtube.com/watch?v=ov7vA5HFe6w&t' target='_blank' rel="noopener noreferrer">
                        <BannerImage src="/public/assets/img/banner.png" alt="Imagen del video" />
                    </Link>
                </BannerVideo>
            </BannerContent>
        </BannerSection>
    )
}

export default Banner;
