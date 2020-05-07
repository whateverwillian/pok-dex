import React from 'react';
import { StatusBar } from 'react-native';

import Home from './pages/Home';

const App: React.FC = () => (
  <>
    <StatusBar barStyle="light-content" />
    <Home />
  </>
);

export default App;
