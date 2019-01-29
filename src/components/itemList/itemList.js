import React, {Component} from 'react';
import styled from 'styled-components';
import { ListGroupItem } from 'reactstrap';
import GotService from '../../services/gotService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

const ItemListUl = styled.ul`
  background: #fff;
  border-radius: 0.25rem;
  overflow: hidden;
  .list-group-item {
    cursor: pointer;
  }
`

export default class ItemList extends Component {

  gotService = new GotService();
  state = {
    charList: null,
    error: false,
    loading: true,
    errorStatus: null
  }

  componentDidMount() {
    const page = Math.floor(Math.random()*200 + 10);
    this.gotService.getAllCaracters(page, 3)
      .then((charList) => {
        this.setState({
          loading: false,
          charList
        })
      })
      .catch((res) => {
        this.onError(res);
      })
  }

  onError = (err) => {
    this.setState({
      error: true,
      errorStatus: err,
      loading: false
    }) 
  }

  renderItems (arr) {

    return arr.map((item) => {
      const urlArr = item.url.split('/');
      const id = urlArr[urlArr.length - 1];

      return (
        <ListGroupItem key={id} onClick={() => this.props.onCharSelected(id)}>
          {item.name}
        </ListGroupItem>
      )
    })
  }

  render() {

    const {charList, error, loading, errorStatus} = this.state;
    const errorMessage = error ? <ErrorMessage errorStatus={errorStatus}/> : null;
    const spinner = loading ? <Spinner/> : null;
    const items = !(loading || error) ? this.renderItems(charList) : null;

    return (
      <ItemListUl className="list-group">
        {errorMessage}
        {spinner}
        {items}
      </ItemListUl>
    );
  }
}
