import React, {Component} from 'react';
import styled from 'styled-components';
import imgError from './error.png';
import img404 from './404.jpg';
import img408 from './408.png';
import img410 from './410.jpg';

const Img = styled.img`
  width: 100%
`

const ErrorBlock = styled.div`
  border-radius: 0.25rem;
  overflow: hidden;
  position: relative;
  border: 2px solid #fff;
  img {
    width: 100%;
  }
  span {
    position: absolute;
    bottom: 20px;
    right: 0;
    left: 0;
    text-align: center;
    color: #fff;
    font-weight: bold;
    font-size: 24px;
  }
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
      <ErrorBlock>
        <img src={_img} alt='error'/>
        <span>Something goes wrong</span>
      </ErrorBlock>
    )
  }
}

export default ErrorMessage;