import React, {Component} from 'react';
import styled from 'styled-components';
import { ListGroupItem } from 'reactstrap';
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

  state = {
    itemList: null,
    error: false,
    loading: true,
    errorStatus: null
  }

  componentDidMount() {
    const {getData, pageDetails} = this.props;
    
    getData(...pageDetails)
      .then((itemList) => {
        this.setState({
          loading: false,
          itemList
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
      const {id} = item;
      const label = this.props.renderItem(item);
      return (
        <ListGroupItem key={id} onClick={() => this.props.onItemSelected(id)}>
          {label}
        </ListGroupItem>
      )
    })
  }

  render() {
    const {itemList, error, loading, errorStatus} = this.state;
    const errorMessage = error ? <ErrorMessage errorStatus={errorStatus}/> : null;
    const spinner = loading ? <Spinner/> : null;
    const items = !(loading || error) ? this.renderItems(itemList) : null;

    return (
      <ItemListUl className="list-group mb-5">
        {errorMessage}
        {spinner}
        {items}
      </ItemListUl>
    );
  }
}
