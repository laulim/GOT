import React, {Component} from 'react';
import styled from 'styled-components';
import imgError from './error.png';
import img404 from './404.jpg';
import img408 from './408.png';
import img410 from './410.jpg';

const Img = styled.img`
  width: 100%
`

class ErrorMessage extends Component {
  
  render() {
    const {errorStatus} = this.props;
    let _img;
    switch (errorStatus) {
      case 404: _img = img404; break;
      case 408: _img = img408; break;
      case 410: _img = img410; break;
      default: _img = imgError; break;
    }

    return (
      <>
        <Img src={_img} alt='error'/>
        <span>Something goes wrong</span>
      </>
    )
  }
}

export default ErrorMessage;