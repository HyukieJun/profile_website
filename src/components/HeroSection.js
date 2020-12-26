import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/type.mp4' autoPlay loop muted />
      <h1>Park Junhyuk</h1>
      <p>Find out more about me</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={(e) => {
            e.preventDefault();
            window.location.href='https://drive.google.com/uc?export=download&id=1_L8FzR5S59QR-k-UnrjlwuW-FObxJpCg';
            }}
        >
          Download Resume
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={(e) => {
            e.preventDefault();
            window.location.href='https://www.linkedin.com/in/junhyukpark/';
            }}
        >
          Linkedin Profile <i class="fab fa-linkedin"></i>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
