import React, {Component} from 'react';
import ItemList from '../itemList';
import ErrorMessage from '../errorMessage';
import GotService from '../../services/gotService';
import {withRouter} from 'react-router-dom';
import RandomItem from '../randomItem';

class BooksPage extends Component {

  gotService = new GotService();
  state = {
    error: false
  }

  componentDidCatch() {
    this.setState({
      error: true
    })
  }

  render () {
    if (this.state.error) {
      return <ErrorMessage/>
    }
    const page = Math.floor(Math.random()*3 + 1);

    return (
      <>
        <RandomItem
          btnName='book'
          itemIdInterval={[10, 1]} 
          getData={this.gotService.getBook}
          fieldsList={[
            ['numberOfPages', 'Number of pages'],
            ['publisher', 'Publisher'],
            ['released', 'Released'],
          ]}
        />
        <ItemList 
          onItemSelected={(itemId) => {
            this.props.history.push(itemId)
          }}
          getData={this.gotService.getAllBooks}
          pageDetails={[page, 5]}
          renderItem={({name}) => name}
        />
      </>
    )
  }
}

export default withRouter(BooksPage)