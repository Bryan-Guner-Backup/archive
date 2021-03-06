// @flow

import React from 'react';
import { FlatrisReduxMock } from '../../../../mocks/ReduxMock';
import { SocketProviderMock } from '../../../../mocks/SocketProviderMock';
import Dashboard from '../Dashboard';

export default (
  <FlatrisReduxMock initialState={{ jsReady: true }}>
    <SocketProviderMock>
      <Dashboard />
    </SocketProviderMock>
  </FlatrisReduxMock>
);
