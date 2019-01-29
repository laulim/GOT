import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import CaracterPage from '../characterPage';
// import GotService from '../../services/gotService';


class App extends Component {

  state = {
    showRandomChar: true,
    selectedChar: null,
    error: false
  }

  componentDidCatch() {
    console.log('error');
    this.setState({
      error: true
    })
  }
  
  onToggleRandomChar = (e) => {
    e.preventDefault();
    this.setState((state) => {
      return {
        showRandomChar: !state.showRandomChar
      }
    });
  }

  onCharSelected = (id) => {
    this.setState({
      selectedChar: id
    })
  }
  
  render(){
    const randomCharBlock = this.state.showRandomChar ? <RandomChar/> : null;

    if (this.state.error) {
      return <ErrorMessage/>
    }

    return (
      <> 
        <Container>
          <Header />
        </Container>
        <Container>
          <Row>
            <Col lg={{size: 5, offset: 0}}>
              <Button className="mb-4"
                onClick={this.onToggleRandomChar}
                color="info">
                Toggle RandomChar
              </Button>
              {randomCharBlock}
            </Col>
          </Row>
          <CaracterPage/>
        </Container>
      </>
    );
  }
};

export default App;