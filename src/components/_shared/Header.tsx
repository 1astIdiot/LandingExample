import * as React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import { heights, colors, dimensions } from 'styles/variables';

import Container from './Container';
// import Typography from './Typography'; //Temporarily removed

const StyledHeader = styled.header`
  position: fixed;
  z-index: 100;
  width: 100%;
  height: ${heights.header};
  background-color: ${colors.white};

  @media (min-width: 320px) and (max-width: 480px) {
    position: relative;
  }
`;

const HeaderInner = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  margin-bottom: 0;

  @media (width: 320px) {
    flex-direction: column;
  }
`;

//Temporarily removed
// const HeaderMenu = styled.div`
//   display: flex;
//   margin-left: auto;
//   margin-right: 53px;
// `;

const HomepageLink = styled(Link)`
  color: ${colors.text};
`;

//Temporarily removed
// const MenuButton = styled(Link)`
//   display: flex;
//   align-items: center;
//   margin-right: 24px;
//   color: ${colors.text};

//   &:last-child {
//     margin-right: 0;
//   }

//   &:hover, &:focus {
//     color: ${colors.emeraldGreen100};
//   }
// `;

const Telephone = styled.a`
  color: ${colors.emeraldGreen100};
  font-weight: ${dimensions.weights.rich};
  font-size: ${dimensions.fontSize.subtitle1};
  line-height: 21px;

  &:hover {
    color: ${colors.forestGreen100};
  };

  &:active {
    color: ${colors.emeraldGreen100}
  }
`;

//Temporarily removed
// const menuList = [
//   {
//     title: 'Каталог',
//     url: '/',
//   },
//   {
//     title: 'Отрасли',
//     url: '/',
//   },
//   {
//     title: 'Операции',
//     url: '/',
//   },
//   {
//     title: 'Внедрение',
//     url: '/',
//   },
//   {
//     title: 'О Компании',
//     url: '/',
//   },
//   {
//     title: 'FAQ',
//     url: '/',
//   },
// ];

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <HeaderInner>
        <HomepageLink to='/'>
          <StaticImage
            src='../../images/fvLogo1.png'
            alt='logo'
          />
        </HomepageLink>

        {/* <HeaderMenu> //Temporarily removed
          {menuList.map((item) => (
            <MenuButton to={item.url} key={item.title}>
              <Typography variant='button'>{item.title}</Typography>
            </MenuButton>
          ))}
        </HeaderMenu> */}

        <Telephone href='tel:+7-9272-705-678'>+7 (9272) 705 678</Telephone>
      </HeaderInner>
    </StyledHeader>
  );
};

export default Header;
