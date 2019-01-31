import React, {Component} from 'react';
import {Col, Row, Button } from 'reactstrap';
import GotService from '../../services/gotService';
import ItemDetails, {Field} from '../itemDetails';


export default class RandomItem extends Component {

  gotService = new GotService();
  state = {
    itemId: null,
  }

  componentDidMount() {
    this.updateChar();
  }

  randomId = () => {
    const [max, min] = this.props.itemIdInterval;
    return Math.floor(Math.random()*max + min)
  }

  updateChar = () => {
    const id = this.randomId();
    this.setState({
      itemId: id
    })
  }

  render() {

    const fieldsList = this.props.fieldsList.map((item, i) => {
      return (
        <Field key={i} field={item[0]} label={item[1]} />
      )
    });

    return (
      <>
        <Row>
          <Col lg={{size: 5, offset: 0}}>
            <Button className="mb-4"
              onClick={this.updateChar}
              color="info">
              {`Toggle random ${this.props.btnName}`}
            </Button>
            <ItemDetails 
              itemId={this.state.itemId}
              getData={this.props.getData}
            >
              {fieldsList}
            </ItemDetails>
          </Col>
        </Row>
      </>
    )
  }
}
