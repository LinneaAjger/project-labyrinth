/* eslint-disable no-nested-ternary */
import styled, { createGlobalStyle } from 'styled-components/macro';
import One from '../images/One.jpg'
import Start from '../images/start.jpg'
import Zero from '../images/Zero.jpg'
import ZeroOne from '../images/ZeroOne.jpg'
import ZeroTwo from '../images/ZeroTwo.jpg'
import ZeroThree from '../images/ZeroThree.jpg'
import OneOne from '../images/OneOne.jpg'
import OneThree from '../images/OneThree.jpg'

export const GlobalStyles = createGlobalStyle`
// RESET CSS
*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

html, body {
  height: 100%;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

#root, #__next {
  isolation: isolate;
  height: 100%;
}

//regular CSS

@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap');

html {
  html {
    font-size: 16px;
  }
}

body {
  margin: 0;
  font-family: 'JetBrains Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #222727;
}

span {
  display: block;
  font-size: 1.2rem;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
button {
  cursor: pointer;
  transition: 0.3s ease-in-out;
  color: black;
  height: 34px;
  border-radius: 5px;
  background-color: #E5E5E5;
  
  &:disabled {
    background-color: #e5e5e580;
  }

  &:hover {
      transform: scale(1.07);
    }
}

.instructions {
  background-color: #1c1f1f;
  border-radius: 10px;
  margin-top: 1rem;
  padding: 10px 5px;
  width: 100%;
  animation: fadeIn 1s; 
}
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

.hidden-instructions {
  display: none;
}

@media (min-width: 668px) {
  html {
    font-size: 20px;
  }
  button {
    height: 36px;
  }

    }
@media (min-width: 1025px) {
  html {
    font-size: 22px;
  }

  button {
    height: 39px;
  }
}
`
export const Outerwrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items:center;
justify-content: center;
background-size: cover;
background-image: url(${(props) => (props.coordinates === '' ? Start : props.coordinates === '0,0' ? Zero : props.coordinates === '1,0' ? One : props.coordinates === '1,1' ? OneOne : props.coordinates === '0,1' ? ZeroOne : props.coordinates === '0,2' ? ZeroTwo : props.coordinates === '0,3' ? ZeroThree : props.coordinates === '1,3' ? OneThree : Start)})
`

export const Innerwrapper = styled.div`
  margin: 0 auto;
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`