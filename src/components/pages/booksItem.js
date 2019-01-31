import React, {Component} from 'react';
import ItemDetails, {Field} from '../itemDetails';
import GotService from '../../services/gotService';
import {Link} from 'react-router-dom'

export default class BooksItem extends Component {
  gotService = new GotService();

  render() {

    return (
      <>
        <ItemDetails 
          itemId={this.props.bookId}
          getData={this.gotService.getBook}
          emptyTitle='book'>
          <Field field='numberOfPages' label='Number of pages' />
          <Field field='publisher' label='Publisher' />
          <Field field='released' label='Released' />
        </ItemDetails>

        <Link className="btn btn-success" to='/books/'>&#8592; Go back</Link>
      </>
    )
  }
}
