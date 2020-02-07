import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// import ReactDOM from 'react-dom';
import Modules from '../Modules';

Enzyme.configure({ adapter: new Adapter() });

console.log('Test result For Modules/index.js');

describe('<Modules />', () => {
    it('Modules is renders', () => {
        const Module = shallow(<Modules />)
        expect(Module.find('main').length).toBe(1)
    });
    it('Modules renders introduction', () => {
        const Module = shallow(<Modules />).hostNodes();
        console.log('Module', Module)
        expect(Module.find('a[href="/dropdown"]').length()).toBe(1)
    });
    // it('Check if right module is loaded on click', () => {
    //     let Module = shallow(<Modules />)
    //     const dd = Module.find('a[href="/dropdown"]');
    //     console.log('dd', dd, 'Module', Module)
    //     dd.simulate('click');
    //     expect(Module.find('h2').text).toBe('Dropdown')
    // });
})

