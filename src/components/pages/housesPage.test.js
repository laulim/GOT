import React from 'react';
import {shallow} from 'enzyme';
import HousesPage from './housesPage';

describe('Testing <HousesPage/>', () => {
  const housPage = shallow(<HousesPage/>);

  it('HousesPage has been rendered', () => {
    expect(housPage).toMatchSnapshot();
  });

  it('HousesPage state "error" is false', () => {
    expect(housPage.state().error).toBeFalsy();
  });

  it('HousesPage state "selectedHouse" is Null', () => {
    expect(housPage.state().selectedHouse).toBeNil();
  });

  it('Testing componentDidCatch, expect state "error" is true', () => {
    housPage.instance().componentDidCatch();
    expect(housPage.state().error).toBeTruthy();
  });

  it('Testing onItemSelected, expect state "selectedHouse" is equil to string "sdf8ds"', () => {
    const id = "sdf8ds";
    housPage.instance().onItemSelected(id);
    expect(housPage.state().selectedHouse).toBe("sdf8ds");
  })
})