import React from 'react';
import {Row, Col} from 'reactstrap';
import styled from 'styled-components';
import mainPageBg from './mainPageBg.jpg'


const MainPageBlock = styled.div`
  background: #fff;
  border-radius: 0.25rem;
  border: 2px solid #fff;
  position: relative;
  img {
    width: 100%;
  }
  h1 {
    position: absolute;
    bottom: 25%;
    right: 0;
    left: 0;
    text-align: center;
    color: #fff;
  }

`


const MainPage = () => {

  return (
    <Row>
      <Col>
        <MainPageBlock>
          <img src={mainPageBg} alt="MainPage"/>
          <h1>Welcome to GOT DB</h1>
        </MainPageBlock>
      </Col>
    </Row>
  )
}

export default MainPage