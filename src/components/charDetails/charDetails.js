import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import styled from 'styled-components';

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
    color: #fff;
    text-align: center;
    font-size: 26px;
  }
  .term {
    font-weight: bold;
  }
`  

export default class CharDetails extends Component {

  render() {
    return (
      <CharDetailsBlock>
        <h4>John Snow</h4>
        <ListGroup flush={true}>
          <ListGroupItem className="d-flex justify-content-between">
            <span className="term">Gender</span>
            <span>male</span>
          </ListGroupItem>
          <ListGroupItem className="d-flex justify-content-between">
            <span className="term">Born</span>
            <span>1783</span>
          </ListGroupItem>
          <ListGroupItem className="d-flex justify-content-between">
            <span className="term">Died</span>
            <span>1820</span>
          </ListGroupItem>
          <ListGroupItem className="d-flex justify-content-between">
            <span className="term">Culture</span>
            <span>First</span>
          </ListGroupItem>
        </ListGroup>
      </CharDetailsBlock>
    );
  }
}