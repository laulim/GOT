import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';

import GotService from '../../services/gotService';

const got = new GotService;
console.log(got.getAllCaracters(15, 5));
console.log(got.getCharacter(283));
console.log(got.getAllBooks(2));
console.log(got.getBook(10));
console.log(got.getAllHouses(2));
console.log(got.getHouse(23));

const App = () => {
  return (
    <> 
      <Container>
        <Header />
      </Container>
      <Container>
        <Row>
          <Col lg={{size: 5, offset: 0}}>
            <RandomChar/>
          </Col>
        </Row>
        <Row>
          <Col md='6'>
            <ItemList />
          </Col>
          <Col md='6'>
            <CharDetails />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;