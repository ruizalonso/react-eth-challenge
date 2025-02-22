import React from 'react';
import { shallow } from 'enzyme';
import Languages from '../../components/Languages';
import data from '../../../data.json';
import * as AppContext from '../../containers/AppContext';

describe('<Languages />', () => {
  jest.spyOn(AppContext, 'appContext').mockImplementation(() => data.data);

  const languages = shallow(<Languages />);

  test('Languages render', () => {
    expect(languages.length).toEqual(1);
  });

  test('Languages title', () => {
    expect(languages.find('.Languages-title').length).toEqual(1);
  });

  test('Languages has 3 items', () => {
    expect(languages.find('.Languages-item').length).toBeGreaterThan(2);
  });

});
