import React from 'react';
import './App.css';
import PageHeader from './Layout/PageHeader/PageHeader';
import Modules from './Modules';
import PageFooter from './Layout/PageFooter/PageFooter';

function App() {
  return (
    <div>
      <PageHeader />
      <Modules />
      <PageFooter />
    </div>
  );
}

export default App;
