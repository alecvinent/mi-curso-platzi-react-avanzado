import {css, keyframes} from "styled-components";

export const fadeIn = ({time = '1s', type = 'easy'} = {}) =>
  css`
      animation: ${time} ${fadeInKeyframes} ${type};
    `

export const fadeInKeyframes = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  } 
  to {
    filter: blur(0);
    opacity: 1;
  }
`
