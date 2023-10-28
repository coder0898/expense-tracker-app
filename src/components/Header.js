import React from 'react'
import styled from 'styled-components';
import OverView from './OverView';

const Heading = styled.h1`
  letter-spacing: 1px;
  margin: 0;
`;

const Header = () => {
  return (
    <div>
       <Heading>Expense Tracker App</Heading>
       <OverView/>
    </div>
  )
}

export default Header;
