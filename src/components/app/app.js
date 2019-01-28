import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
// import GotService from '../../services/gotService';


class App extends Component {
  constructor(){
    super();
    this.state = {charBlockToggle: true}
  }

  
  onToggleRandomChar = (e) => {
    e.preventDefault();
    this.setState({charBlockToggle: !this.state.charBlockToggle});
  }
  
  render(){
    const randomCharBlock = this.state.charBlockToggle ? <RandomChar/> : null;

    return (
      <> 
        <Container>
          <Header />
        </Container>
        <Container>
          <Row>
            <Col lg={{size: 5, offset: 0}}>
              <Button 
                onClick={this.onToggleRandomChar}
                color="info">
                Toggle RandomChar
              </Button>
              {randomCharBlock}
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
  }
};

export default App;