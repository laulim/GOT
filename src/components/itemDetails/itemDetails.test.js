import React from 'react';
import ItemDetails from './itemDetails';
import {shallow} from 'enzyme';

describe('Testing <ItemDetails/>', () => {
    const itemD = shallow(<ItemDetails/>);

    describe('Testing snap & state', () => {
        it('ItemDetails have rendered correctly', () => {
            expect(itemD).toMatchSnapshot();
        });

        it('ItemDetails state "item" is null', () => {
            expect(itemD.state().item).toBeNil();
        });

        it('ItemDetails state "loading" is false', () => {
            expect(itemD.state().loading).toBeFalsy();
        });

        it('ItemDetails state "error" is false', () => {
            expect(itemD.state().error).toBeFalsy();
        });
    });

    describe('Hendlers tests', () => {
      it('Testing updateItem', () => {
        itemD.instance().updateItem();
        expect(itemD.state().loading).toBeFalsy();
      });

      it('Testing onError', () => {
        itemD.instance().onError();
        expect(itemD.state().loading).toBeFalsy();
        expect(itemD.state().error).toBeTruthy();
      });
    });
});