import React from 'react';
import {Row, Col} from 'reactstrap';
import styled from 'styled-components';
import notFoundBg from './notFound.jpeg';
import {Link} from 'react-router-dom'

const NotFoundBlock = styled.div`
  background: #fff;
  border-radius: 0.25rem;
  border: 2px solid #fff;
  position: relative;
  text-align: center;
  img {
    width: 100%;
  }
  h1 {
    position: absolute;
    bottom: 25%;
    right: 0;
    left: 0;
    color: #fff;
  }
  a {
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
  }
`


const MainPage = () => {

  return (
    <Row>
      <Col>
        <NotFoundBlock>
          <img src={notFoundBg} alt="NotFound"/>
          <h1>The page does not exist or is not accessible anymore.</h1>
          <Link className="btn btn-warning" to='/'>&#8592; Back to main page</Link>
        </NotFoundBlock>
      </Col>
    </Row>
  )
}

export default MainPage