import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {configure, mount} from 'enzyme';

import List from './index';
import { Circle, CheckCircle, XSquare, Save, Edit2, Trash2 } from 'react-feather';

configure({adapter: new Adapter()});

let activeItem = {
    name: "list 1",
    id: 'dsd555',
    isActive: true
}

let inactiveItem = {
    name: "list 1",
    id: 'dsd555',
    isActive: false
}

describe('<List />', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = mount(<List data={[]}/>);
    })

    it('should not render any <tr> tag if data is not passed as a prop', () => {
        expect(wrapper.find('tr')).toHaveLength(0);
    })

    it('should render an item with a Circle icon if item is inactive', () => {
        wrapper.setProps({data: [inactiveItem]});

        expect(wrapper.find(Circle)).toHaveLength(1);
    })

    it('should render an item with a Checked icon if item is active', () => {
        wrapper.setProps({data: [activeItem]});

        expect(wrapper.find(CheckCircle)).toHaveLength(1);
    })

    it('should render an item with Save and Cancel icons when it is editable', () => {
        wrapper.setProps({data: [activeItem]});
        expect(wrapper.find(Trash2)).toHaveLength(1);
        expect(wrapper.find(Edit2)).toHaveLength(1);
        expect(wrapper.find(Save)).toHaveLength(0);
        expect(wrapper.find(XSquare)).toHaveLength(0);

        wrapper.setState({editableItem: 0});
        expect(wrapper.find(Save)).toHaveLength(1);
        expect(wrapper.find(XSquare)).toHaveLength(1);
        expect(wrapper.find(Trash2)).toHaveLength(0);
        expect(wrapper.find(Edit2)).toHaveLength(0);
    })

    it('should render an input item for given editable item in state', () => {
        wrapper.setProps({data: [activeItem]});
        expect(wrapper.find('input')).toHaveLength(0);

        wrapper.setState({editableItem: 0});
        expect(wrapper.find('input')).toHaveLength(1);
    })

    it('should render additional row in table for creating new component if state is changed to isCreating: true', () => {
        wrapper.setProps({data: [activeItem]});
        wrapper.setState({isCreating: true});

        expect(wrapper.find('tr')).toHaveLength(2);
        expect(wrapper.find('input')).toHaveLength(1);
        expect(wrapper.find(Save)).toHaveLength(1);
        expect(wrapper.find(XSquare)).toHaveLength(1);
    })
})