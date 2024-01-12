import { createGlobalStyle } from 'styled-components';
import modernNormalize from 'modern-normalize';
const Global = createGlobalStyle`
 ${modernNormalize}

 input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill::first-line {
    transition: background-color 5000s ease-in-out 0s;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
  input[type=number] {
  -moz-appearance: textfield;
  }

body {
  background-color: ${({ theme }) => theme.backgrounds.main};
  margin: 0;
    font-family: 'Poppins', sans-serif; 
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.2;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
    

}


h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
    padding: 0;
}
ul, 
  ol, 
  li {
  margin: 0;
  padding: 0;
}
img {
  display: block;
  max-width: 100%;
  object-fit: cover;
}
a {
    text-decoration: none;
  }

  input:-webkit-autofill,
  textarea:-webkit-autofill {
    background-color: rgba(255, 255, 255, 0.9) !important;
  }

  input:-moz-autofill,
  textarea:-moz-autofill {
    background-color: rgba(255, 255, 255, 0.9) !important;
  }

  input:-ms-autofill,
  textarea:-ms-autofill {
    background-color: rgba(255, 255, 255, 0.9) !important;
  }

  

`;

export default Global;
