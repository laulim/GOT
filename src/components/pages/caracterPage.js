import React, {Component} from 'react';
import RowBlock from '../rowBlock';
import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import ErrorMessage from '../errorMessage';
import GotService from '../../services/gotService';

export default class CaracterPage extends Component {

  gotService = new GotService;
  state = {
    selectedChar: null,
    error: false
  }

  componentDidCatch() {
    this.setState({
      error: true
    })
  }

  onItemSelected = (id) => {
    this.setState({
      selectedChar: id
    })
  }

  render () {
    if (this.state.error) {
      return <ErrorMessage/>
    }
    const page = Math.floor(Math.random()*200 + 10);

    const itemList = (
      <ItemList 
        onItemSelected={this.onItemSelected}
        getData={this.gotService.getAllCaracters}
        pageDetails={[page, 3]}
        renderItem={({name, gender}) => `${name} (${gender})`}
      />
    )

    const itemDetails = (
      <ItemDetails 
        itemId={this.state.selectedChar}
        getData={this.gotService.getCharacter}
        emptyTitle='character'
      >
        <Field field='gender' label='Gender' />
        <Field field='born' label='Born' />
        <Field field='died' label='Died' />
        <Field field='culture' label='Culture' />
      </ItemDetails>
    )

    return (
      <RowBlock left={itemList} right={itemDetails}/>
    )
  }
}