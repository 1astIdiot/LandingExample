import { fonts, colors } from './variables';

const styles = `
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    width: 100vw;
    overflow-y: scroll;
    overflow-x: hidden;
    font-family: ${fonts.sansSerif};
    color: ${colors.text};
    background-color: ${colors.white};
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${colors.header};
  }

  a {
    text-decoration: none;
  }

  figure {
    margin: 2rem 0;
  }

  figcaption {
    font-size: 80%;
  }

  strong {
    color: ${colors.black};
  }

  ul,
  ol,
  dl {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .slick-arrow:before {
    color: ${colors.forestGreen100}
  }

  .slick-prev, .slick-next {
    top: 73px;
  }
`;

export default styles;
