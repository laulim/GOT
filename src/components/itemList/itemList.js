import React, {Component} from 'react';
import styled from 'styled-components';
import { ListGroupItem } from 'reactstrap';

const ItemListUl = styled.ul`
  .list-group-item {
    cursor: pointer;
  }
`

export default class ItemList extends Component {

  render() {
    return (
      <ItemListUl className="list-group">
        <ListGroupItem>
          John Snow
        </ListGroupItem>
        <ListGroupItem>
          Brandon Stark
        </ListGroupItem>
        <ListGroupItem>
          Geremy
        </ListGroupItem>
      </ItemListUl>
    );
  }
}