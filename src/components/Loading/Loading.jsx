import React from 'react';
import styled, { keyframes } from 'styled-components';


const fadeInOut = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  30% {
    opacity: 1;
    transform: translateY(0);
  }
  70% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(-20px);
  }
`;

const typingEffect = keyframes`
  0% {
    transform: scaleX(0);
    opacity: 0;
  }
  50% {
    transform: scaleX(1.05);
    opacity: 1;
  }
  100% {
    transform: scaleX(1);
    opacity: 1;
  }
`;

const neonGlow = keyframes`
  0% {
    text-shadow: 0 0 10px #800080, 0 0 20px #800080, 0 0 30px #800080, 0 0 40px #800080, 0 0 50px #800080, 0 0 60px #800080;
  }
  20% {
    text-shadow: 0 0 10px #9b30ff, 0 0 20px #9b30ff, 0 0 30px #9b30ff, 0 0 40px #9b30ff, 0 0 50px #9b30ff, 0 0 60px #9b30ff;
  }
  40% {
    text-shadow: 0 0 10px #9932cc, 0 0 20px #9932cc, 0 0 30px #9932cc, 0 0 40px #9932cc, 0 0 50px #9932cc, 0 0 60px #9932cc;
  }
  60% {
    text-shadow: 0 0 10px #8a2be2, 0 0 20px #8a2be2, 0 0 30px #8a2be2, 0 0 40px #8a2be2, 0 0 50px #8a2be2, 0 0 60px #8a2be2;
  }
  80% {
    text-shadow: 0 0 10px #7a5295, 0 0 20px #7a5295, 0 0 30px #7a5295, 0 0 40px #7a5295, 0 0 50px #7a5295, 0 0 60px #7a5295;
  }
  100% {
    text-shadow: 0 0 10px #800080, 0 0 20px #800080, 0 0 30px #800080, 0 0 40px #800080, 0 0 50px #800080, 0 0 60px #800080;
  }
`;

const pulseGlow = keyframes`
  0% {
    text-shadow: 0 0 5px #800080, 0 0 10px #800080, 0 0 15px #800080, 0 0 20px #800080;
  }
  50% {
    text-shadow: 0 0 15px #800080, 0 0 30px #800080, 0 0 45px #800080, 0 0 60px #800080;
  }
  100% {
    text-shadow: 0 0 5px #800080, 0 0 10px #800080, 0 0 15px #800080, 0 0 20px #800080;
  }
`;


const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #000;
`;


const HelloText = styled.span`
  font-family: 'Pacifico', cursive;
  font-size: 4rem;
  font-weight: bold;
  color: white;
  display: inline-block;
  opacity: 0;
  animation: ${typingEffect} 3s ease-in-out forwards, ${fadeInOut} 5s ease-in-out infinite, ${neonGlow} 2s linear infinite, ${pulseGlow} 2s ease-in-out infinite;
  text-stroke: 2px #fff;
  -webkit-text-stroke: 2px #fff;
`;

const Loading = () => {
  return (
    <LoaderContainer>
      <HelloText>hello ! welcome to QuickSell</HelloText>
    </LoaderContainer>
  );
};

export default Loading;












