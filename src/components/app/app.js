import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomItem from '../randomItem';
import ErrorMessage from '../errorMessage';
import {CaracterPage, BooksPage, HousesPage} from '../pages';
import GotService from '../../services/gotService';


class App extends Component {

  gotService = new GotService;
  state = {
    error: false
  }

  componentDidCatch() {
    console.log('error');
    this.setState({
      error: true
    })
  }

  
  render(){

    if (this.state.error) {
      return <ErrorMessage/>
    }

    return (
      <> 
        <Container>
          <Header />
        </Container>
        <Container>
          <RandomItem
            btnName='caracter'
            itemIdInterval={[500, 35]} 
            getData={this.gotService.getCharacter}
            fieldsList={[
              ['gender', 'Gender'],
              ['born', 'Born'],
              ['died', 'Died'],
              ['culture', 'Culture'],
            ]}
          />
          <CaracterPage/>

          <RandomItem
            btnName='house'
            itemIdInterval={[80, 1]} 
            getData={this.gotService.getHouse}
            fieldsList={[
              ['region', 'Region'],
              ['words', 'Words'],
              ['titles', 'Titles'],
              ['overlord', 'Overlord'],
              ['ancestralWeapons', 'Ancestra wWeapons'],
            ]}
          />
          <HousesPage/>

          <RandomItem
            btnName='book'
            itemIdInterval={[10, 1]} 
            getData={this.gotService.getBook}
            fieldsList={[
              ['numberOfPages', 'Number of pages'],
              ['publisher', 'Publisher'],
              ['released', 'Released'],
            ]}
          />
          <BooksPage/>
        </Container>
      </>
    );
  }
};

export default App;