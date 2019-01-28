import React from 'react';
import styled from 'styled-components';
import imgError from './error.png';

const Img = styled.img`
  width: 100%
`

const ErrorMessage = () => {
  return (
    <>
      <Img src={imgError} alt='error'/>
      <span>Something goes wrong</span>
    </>
  )
}

export default ErrorMessage;