import React from 'react';
import { shallow } from 'enzyme';
import Profile from '../../components/Profile';
import data from '../../../data.json';
import * as AppContext from '../../containers/AppContext';

describe('<Profile />', () => {
  jest.spyOn(AppContext, 'appContext').mockImplementation(() => data.data);
  const profile = shallow(<Profile />);

  test('Profile render', () => {
    expect(profile.length).toEqual(1);
  });

  test('Profile title', () => {
    expect(profile.find('.Profile-title').length).toEqual(1);
  });

  test('Profile have a description', () => {
    expect(profile.find('.Profile-desc').length).toEqual(1);
  });

});
