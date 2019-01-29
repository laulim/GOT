import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import styled from 'styled-components';
import GotService from '../../services/gotService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

const CharDetailsBlock  = styled.div`
  background-color: #fff;
  padding: 25px 25px 15px 25px;
  margin-bottom: 40px;
  border-radius: 0.25rem;
  h4 {
    margin-bottom: 20px;
    text-align: center;
  }
  .select-error {
    color: #000;
    text-align: center;
    font-size: 26px;
  }
  .term {
    font-weight: bold;
  }
` 

export default class CharDetails extends Component {

  gotService = new GotService;
  state = {
    char: null,
    loading: false,
    error: false,
    errorStatus: null
  }

  componentDidMount() {
    this.updateChar();
  }

  componentDidUpdate(prevProps) {
    if (this.props.charId !== prevProps.charId) {
      this.updateChar();
    }
  }

  onError = (err) => {
    this.setState({
      error: true,
      errorStatus: err,
      loading: false
    }) 
  }

  updateChar() {
    const {charId} = this.props;
    if (!charId) {
      return;
    }

    this.setState({
      loading: true
    })

    this.gotService.getCharacter(charId)
      .then((char) => {
        this.setState({
          loading: false,
          char
        })
      })
      .catch((res) => {
        this.onError(res);
      })
    // this.foo.bar = 0;
  }


  render() {

    const emptyChar = (!this.state.char) ? <span className="select-error">Please select a character</span> : null;

    const {char, loading, error, errorStatus} = this.state;

    const errorMessage = error ? <ErrorMessage errorStatus={errorStatus}/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error || !this.state.char) ? <View char={char}/> : null;

    return (
      <CharDetailsBlock>
        {errorMessage}
        {spinner || emptyChar}
        {content}
      </CharDetailsBlock>
    );
  }
}

const View = ({char}) => {
  const {name, gender, born, died, culture} = char;
  return (
    <>
      <h4>{name}</h4>
      <ListGroup flush={true}>
        <ListGroupItem className="d-flex justify-content-between">
          <span className="term">Gender</span>
          <span>{gender}</span>
        </ListGroupItem>
        <ListGroupItem className="d-flex justify-content-between">
          <span className="term">Born</span>
          <span>{born}</span>
        </ListGroupItem>
        <ListGroupItem className="d-flex justify-content-between">
          <span className="term">Died</span>
          <span>{died}</span>
        </ListGroupItem>
        <ListGroupItem className="d-flex justify-content-between">
          <span className="term">Culture</span>
          <span>{culture}</span>
        </ListGroupItem>
      </ListGroup>
    </>
  )
}