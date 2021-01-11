import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Junhyuk's Profile Website
            </Link>
          </div>
          <small class='website-rights'>Park Junhyuk © 2020</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              target='_blank'
              aria-label='Facebook'
              onClick={(e) => {
                e.preventDefault();
                window.location.href='https://www.facebook.com/junhyuk.park.940/';
                }}
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              target='_blank'
              aria-label='Instagram'
              onClick={(e) => {
                e.preventDefault();
                window.location.href='https://www.instagram.com/hyukiejun/';
                }}
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link github'
              target='_blank'
              aria-label='Github'
              onClick={(e) => {
                e.preventDefault();
                window.location.href='https://github.com/HyukieJun';
                }}
            >
              <i class="fab fa-github"></i>
            </Link>
            <Link
              class='social-icon-link twitter'
              target='_blank'
              aria-label='LinkedIn'
              onClick={(e) => {
                e.preventDefault();
                window.location.href='https://www.linkedin.com/in/junhyukpark/';
                }}
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
