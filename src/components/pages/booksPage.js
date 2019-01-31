import React, {Component} from 'react';
import RowBlock from '../rowBlock';
import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import ErrorMessage from '../errorMessage';
import GotService from '../../services/gotService';

export default class BooksPage extends Component {

  gotService = new GotService();
  state = {
    selectedBook: null,
    error: false
  }

  componentDidCatch() {
    this.setState({
      error: true
    })
  }

  onItemSelected = (id) => {
    this.setState({
      selectedBook: id
    })
  }

  render () {
    if (this.state.error) {
      return <ErrorMessage/>
    }
    const page = Math.floor(Math.random()*4 + 1);

    const itemList = (
      <ItemList 
        onItemSelected={this.onItemSelected}
        getData={this.gotService.getAllBooks}
        pageDetails={[page, 3]}
        renderItem={({name}) => name}
      />
    )

    const itemDetails = (
      <ItemDetails 
        itemId={this.state.selectedBook}
        getData={this.gotService.getBook}
        emptyTitle='book'
      >
        <Field field='numberOfPages' label='Number of pages' />
        <Field field='publisher' label='Publisher' />
        <Field field='released' label='Released' />
      </ItemDetails>
    )

    return (
      <RowBlock left={itemList} right={itemDetails}/>
    )
  }
}