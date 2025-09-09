import React from 'react';
import Hero from './hero';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      
      {/* Additional sections can be added here */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="mb-4">Welcome to Our HR Services</h2>
              <p className="lead">
                This is where additional content sections will go. 
                You can add services, testimonials, about preview, etc.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;