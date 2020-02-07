import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';
import App from './App';

import PageIntro from './Layout/PageHeader/PageHeader';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  console.log('Test result For App.js');
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  console.log('Test result For PageIntro.js');
  it('PageIntro is rendered as h1', () => {
    const PageInto = shallow(<PageIntro />);
    expect(PageInto.find('h1').length).toEqual(1);
  });
})
