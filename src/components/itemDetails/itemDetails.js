import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import styled from 'styled-components';
import GotService from '../../services/gotService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

const ItemDetailsBlock  = styled.div`
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

const Field = ({item, field, label}) => {
  const text = Array.isArray(item[field]) ? item[field].map((text, i) => <div key={i}>{text}</div>) : item[field];
  return (
    <ListGroupItem className="d-flex justify-content-between">
      <span className="term">{label}</span>
      <span>{text}</span>
    </ListGroupItem>
  )
}
export { Field }

export default class ItemDetails extends Component {

  gotService = new GotService();
  state = {
    item: null,
    loading: false,
    error: false,
    errorStatus: null
  }

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  onError = (err) => {
    this.setState({
      error: true,
      errorStatus: err,
      loading: false
    }) 
  }

  updateItem() {
    const {itemId, getData} = this.props;
    if (!itemId) {
      return;
    }

    this.setState({
      loading: true
    })

    getData(itemId)
      .then((item) => {
        this.setState({
          loading: false,
          item
        })
      })
      .catch((res) => {
        this.onError(res);
      })
    // this.foo.bar = 0;
  }


  render() {

    const emptyItem = (!this.state.item) ? <span className="select-error">{`Please select a ${this.props.emptyTitle}`}</span> : null;

    const {item, loading, error, errorStatus} = this.state;
    
    const view = (
      <>
        <h4>{(item !== null) ? item.name : ''}</h4>
        <ListGroup flush={true}>
          {
            React.Children.map(this.props.children, (child) => {
              return React.cloneElement(child, {item});
            })
          }
        </ListGroup>
      </>
    )

    const errorMessage = error ? <ErrorMessage errorStatus={errorStatus}/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error || !this.state.item) ? view : null;  

    return (
      <ItemDetailsBlock>
        {errorMessage}
        {spinner || emptyItem}
        {content}
      </ItemDetailsBlock>
    );
  }
}
