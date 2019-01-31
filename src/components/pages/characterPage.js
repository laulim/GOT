import React, {Component} from 'react';
import RowBlock from '../rowBlock';
import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import ErrorMessage from '../errorMessage';
import GotService from '../../services/gotService';
import RandomItem from '../randomItem';

export default class CharacterPage extends Component {

  gotService = new GotService();
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
        pageDetails={[page, 5]}
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
      <>
        <RandomItem
          btnName='character'
          itemIdInterval={[500, 35]} 
          getData={this.gotService.getCharacter}
          fieldsList={[
            ['gender', 'Gender'],
            ['born', 'Born'],
            ['died', 'Died'],
            ['culture', 'Culture'],
          ]}
        />
        <RowBlock left={itemList} right={itemDetails}/>
      </>
    )
  }
}