import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './layouts/header';
import Footer from './layouts/footer';
import Routing from './routes/AppRouting';
import '../src/styles/styles.css'

const App = () => {
  return (
    <Router>
      <div>
        {/* Header */}
        <Header />

        {/* Routing */}
        <Routing />

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;