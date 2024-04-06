import React from 'react';
import './MainContent.css'
const MainContent = () => {
  return (
    <main className="main-content">
      <div className="container">
        <section className="hero">
          <div className="hero-image">
            <img src="hero-image.jpg" alt="Metta Muse Hero Image" />
          </div>
          <div className="hero-text">
            <h1>Be the First to Know</h1>
            <p>Sign up for updates from Metta Muse and receive exclusive access to new arrivals, special offers, and inspiring stories.</p>
            <form className="subscribe-form">
              <input type="email" placeholder="Enter your e-mail..." />
              <button type="submit">SUBSCRIBE</button>
            </form>
          </div>
        </section>

        <section className="about">
          <h2>About Metta Muse</h2>
          <p>Metta Muse is a curated marketplace for handcrafted goods from around the world. We connect artisans with conscious consumers who appreciate unique and sustainable products.</p>
          <a href="#">Learn More</a>
        </section>

        <section className="stories">
          <h2>Stories</h2>
          <div className="story-card">
            <img src="story-image1.jpg" alt="Story Image 1" />
            <h3>The Art of Weaving</h3>
            <p>Meet Maria, a traditional weaver from the Andes Mountains who has been creating beautiful textiles for over 40 years.</p>
            <a href="#">Read More</a>
          </div>
          <div className="story-card">
            <img src="story-image2.jpg" alt="Story Image 2" />
            <h3>Sustainable Ceramics</h3>
            <p>Discover how Sarah is using recycled materials to create stunning ceramic pieces in her rural studio.</p>
            <a href="#">Read More</a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default MainContent;
