import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import ErrorMessage from '../errorMessage';

export default class CaracterPage extends Component {

  state = {
    selectedChar: null,
    error: false
  }

  componentDidCatch() {
    this.setState({
      error: true
    })
  }

  onCharSelected = (id) => {
    this.setState({
      selectedChar: id
    })
  }

  render () {
    if (this.state.error) {
      return <ErrorMessage/>
    }
    return (
      <Row>
        <Col md='6'>
          <ItemList onCharSelected={this.onCharSelected}/>
        </Col>
        <Col md='6'>
          <CharDetails charId={this.state.selectedChar}/>
        </Col>
      </Row>
    )
  }
}