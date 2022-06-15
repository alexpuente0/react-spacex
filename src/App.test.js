/* eslint-disable */
import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Rocket from './components/rockets/Rocket';
import MissionItem from './components/Mission/MissionItem';
import Profile from './components/profile/Profile';

describe('Pages are rendered correctly', () => {
  it('Renders Missions Page correctly', () => {
    const element = renderer
      .create(
        <Provider store={store}>
          <MissionItem />
        </Provider>,
      )
      .toJSON();
    render(
      <Provider store={store}>
        <MissionItem />
      </Provider>,
    );
    const msRender = document.querySelector('.mission-container');
    expect(msRender).toBeTruthy();
    expect(element).toMatchSnapshot();
  });
  it('Renders Rockets Page correctly', () => {
    const element = renderer
      .create(
        <Provider store={store}>
          <Rocket />
        </Provider>,
      )
      .toJSON();
    render(
      <Provider store={store}>
        <Rocket />
      </Provider>,
    );
    const rkRender = document.querySelector('.rocket-container');
    expect(rkRender).toBeTruthy();
    expect(element).toMatchSnapshot();
  });
  it('Renders My Profile page correctly', () => {
    const element = renderer
      .create(
        <Provider store={store}>
          <Profile />
        </Provider>,
      )
      .toJSON();
    render(
      <Provider store={store}>
        <Profile />
      </Provider>,
    );
    const pfRender = document.querySelector('.profile-container');
    expect(pfRender).toBeTruthy();
    expect(element).toMatchSnapshot();
  });
});
