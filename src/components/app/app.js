import React from 'react';
import {Container} from 'reactstrap';
import Header from '../header';
import {CharacterPage, BooksPage, HousesPage, BooksItem, MainPage, NotFound} from '../pages';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import styled from 'styled-components';
import background from './got.jpeg'

const AppWrapper = styled.div`
  overflow-x: hidden;
  background: url(${background}) center center no-repeat;
  background-size: cover;
  font-size: 16px;
  height: 100%;
  min-height: 100vh;
`

const App = () => {
  
  return (
    <Router>
      <AppWrapper > 
        <Container>
          <Header />
        </Container>
        <Container className="pt-5">
          <Switch>
            <Route path='/' exact component={MainPage}/>
            <Route path='/characters' exact component={CharacterPage}/>
            <Route path='/houses' exact component={HousesPage} />
            <Route path='/books' exact component={BooksPage} />
            <Route path='/books/:id' render={
              ({match}) => {
                const {id} = match.params;
                return <BooksItem bookId={id}/>
                }
            }/>
            <Route component={NotFound}/>
          </Switch>
        </Container>
      </AppWrapper>
    </Router>
  );
};

export default App;