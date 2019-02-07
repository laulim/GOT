import React from 'react';
import {shallow} from 'enzyme';
import {BooksPage} from './booksPage';

describe('Testing <BooksPage/>', () => {
  const booksPage = shallow(<BooksPage/>);

  it('BooksPage has been rendered', () => {
    expect(booksPage).toMatchSnapshot();
  });

  it('BooksPage state "error" is false', () => {
    expect(booksPage.state().error).toBeFalsy();
  });

  it('Testing componentDidCatch, expect state "error" is true', () => {
    booksPage.instance().componentDidCatch();
    expect(booksPage.state().error).toBeTruthy();
  })
})