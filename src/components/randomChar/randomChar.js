import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import styled from 'styled-components';
import GotService from '../../services/gotService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';


const RandomBlock = styled.div`
  background-color: #fff;
  padding: 25px 25px 15px 25px;
  margin-bottom: 40px;
  border-radius: 0.25rem;
  h4 {
    margin-bottom: 20px;
    text-align: center;
  }
  .term {
    font-weight: bold;
  }
`


export default class RandomChar extends Component {
  constructor(){
    super();
    this.updateChar();
  }

  gotService = new GotService();

  state = {
    char: {},
    loading: true,
    error: false,
    errorStatus: null
  }

  onCharLoaded = (char) => {
    this.setState({
      char,
      loading: false
    })
  }

  onError = (err) => {
    this.setState({
      error: true,
      errorStatus: err,
      loading: false
    })
    
  }

  updateChar = () => {
    // const id = Math.floor(Math.random()*500 + 35); //35-500
    const id = 130000;
    this.gotService.getCharacter(id)
      .then(this.onCharLoaded)
      .catch((res) => {
        this.onError(res);
      })
  }

  render() {

    const {char, loading, error, errorStatus} = this.state;
    const errorMessage = error ? <ErrorMessage errorStatus={errorStatus}/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error) ? <View char={char}/> : null;

    return (
      <RandomBlock>
        {errorMessage}
        {spinner}
        {content}
      </RandomBlock>
    );
  }
}

const View = ({char}) => {

  const {name, gender, born, died, culture} = char;
  return (
    <>
      <h4>Random Character: {name}</h4>
      <ListGroup flush={true}>
        <ListGroupItem className="d-flex justify-content-between">
          <span className="term">Gender </span>
          <span>{gender}</span>
        </ListGroupItem>
        <ListGroupItem className="d-flex justify-content-between">
          <span className="term">Born </span>
          <span>{born}</span>
        </ListGroupItem>
        <ListGroupItem className="d-flex justify-content-between">
          <span className="term">Died </span>
          <span>{died}</span>
        </ListGroupItem>
        <ListGroupItem className="d-flex justify-content-between">
          <span className="term">Culture </span>
          <span>{culture}</span>
        </ListGroupItem>
      </ListGroup>
    </>
  )
}
