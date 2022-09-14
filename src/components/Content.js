import React from 'react'
import '../styles/Content.css'

import Navbar from './Navbar';
import HeroSection from './HeroSection';

function Content() {
  return (
    <div className='content'>
            <Navbar />
            <HeroSection />
    </div>
  )
}

export default Content 