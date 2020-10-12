import React from 'react';
import Footer from './Footer';
import Nav from './Nav';

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      <p>I'm the page's contents.</p>
      {children}
      <Footer />
    </div>
  );
}
