import React, {Component} from 'react';
import RowBlock from '../rowBlock';
import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import ErrorMessage from '../errorMessage';
import GotService from '../../services/gotService';
import RandomItem from '../randomItem';

export default class HousesPage extends Component {

  gotService = new GotService();
  state = {
    selectedHouse: null,
    error: false
  }

  componentDidCatch() {
    this.setState({
      error: true
    })
  }

  onItemSelected = (id) => {
    this.setState({
      selectedHouse: id
    })
  }

  render () {
    if (this.state.error) {
      return <ErrorMessage/>
    }
    const page = Math.floor(Math.random()*70 + 1);

    const itemList = (
      <ItemList 
        onItemSelected={this.onItemSelected}
        getData={this.gotService.getAllHouses}
        pageDetails={[page, 5]}
        renderItem={({name}) => name}
      />
    )

    const itemDetails = (
      <ItemDetails 
        itemId={this.state.selectedHouse}
        getData={this.gotService.getHouse}
        emptyTitle='house'
      >
        <Field field='region' label='Region' />
        <Field field='words' label='Words' />
        <Field field='titles' label='Titles' />
        <Field field='overlord' label='Overlord' />
        <Field field='ancestralWeapons' label='Ancestral weapons' />
      </ItemDetails>
    )

    return (
      <>
        <RandomItem
          btnName='house'
          itemIdInterval={[80, 1]} 
          getData={this.gotService.getHouse}
          fieldsList={[
            ['region', 'Region'],
            ['words', 'Words'],
            ['titles', 'Titles'],
            ['overlord', 'Overlord'],
            ['ancestralWeapons', 'Ancestra wWeapons'],
          ]}
        />
        <RowBlock left={itemList} right={itemDetails}/>
      </>
    )
  }
}