import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import PageHeader from './Layout/PageHeader/PageHeader';
import HomePage from './Layout/HomePage';
import PageFooter from './Layout/PageFooter/PageFooter';

function App() {
  return (
    <Container fluid>
      <PageHeader mainContainer='#main'/>
      <HomePage />
      <PageFooter />
    </Container>
  );
}

export default App;
