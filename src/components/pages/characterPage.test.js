import React from 'react';
import {shallow} from 'enzyme';
import CharacterPage from './characterPage';

describe('Testing <CharacterPage/>', () => {
  const charPage = shallow(<CharacterPage/>);

  it('CharacterPage has been rendered', () => {
    expect(charPage).toMatchSnapshot();
  });

  it('CharacterPage state "error" is false', () => {
    expect(charPage.state().error).toBeFalsy();
  });

  it('CharacterPage state "selectedChar" is Null', () => {
    expect(charPage.state().selectedChar).toBeNil();
  });

  it('Testing componentDidCatch, expect state "error" is true', () => {
    charPage.instance().componentDidCatch();
    expect(charPage.state().error).toBeTruthy();
  });

  it('Testing onItemSelected, expect state "selectedChar" is equil to string "sdf8ds"', () => {
    const id = "sdf8ds";
    charPage.instance().onItemSelected(id);
    expect(charPage.state().selectedChar).toBe("sdf8ds");
  })
})