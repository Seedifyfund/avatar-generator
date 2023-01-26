import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
html, body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  button {
    outline: none;
  }
}
h1,
h2,
h3,
h4 {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
::selection {
  width: 100%;
  display: flex;
  color: #fff;
}

`;