import React from 'react';
// Temporary version without routing - uncomment routing imports after installing react-router-dom
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import About from './pages/About';
// import Services from './pages/Services';
// import Careers from './pages/Careers';
// import Contact from './pages/Contact';

import Layout from './components/common/Layout';
import Home from './pages/Home';

function App() {
  // Temporary simple version - replace with routing version after installing react-router-dom
  return (
    <Layout>
      <Home />
    </Layout>
  );

  // Uncomment this after installing react-router-dom:
  // return (
  //   <Router>
  //     <Layout>
  //       <Routes>
  //         <Route path="/" element={<Home />} />
  //         <Route path="/about" element={<About />} />
  //         <Route path="/services" element={<Services />} />
  //         <Route path="/careers" element={<Careers />} />
  //         <Route path="/contact" element={<Contact />} />
  //       </Routes>
  //     </Layout>
  //   </Router>
  // );
}

export default App;