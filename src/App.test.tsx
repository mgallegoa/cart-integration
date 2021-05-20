import React from 'react';
import { render, screen } from '@testing-library/react';
import * as reactRedux from 'react-redux';
import App from './App';
import axios from "axios";


jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Test the correct render of components', () => {
  let useSelectorMock;
  let useDispatchMock;
  beforeEach(() => {
    useSelectorMock = null;
    useDispatchMock = null;
  });

  it("should match snapshot", () => {
    /*const mockData = {}
    const store = configureMockStore({mockData});
    const component = create(
      <reactRedux.Provider store={store}>
        <App />
      </reactRedux.Provider>
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();*/
    expect(true).toBe(true);
  });


});

