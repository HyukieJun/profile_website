import React from 'react';
import '../App.css';
import './Aboutme.css';

function Aboutme() {
    return (
        <div className='aboutme-container'>
          <img src='/images/myprofile.jpeg'/>
          <h1>My Story</h1>
          <p>Born in South Korea, I moved to Singapore at a young age 
             of 10. I went to local Primary School at Yu Neng Primary where I worked really hard
             to pick up English and adapt to the new Singaporean lifestyle. After taking PSLE, I
             went to Anglo-Chinese School (Independent) where I studied for 6 years for the IB Diploma.
             Technology was something that I was always into from a young age and the idea of making life easier through
             different technologies and softwares fascinated me. Therefore, it was an easy choice to choose Computer Engineering as my major when I got 
             admitted to National University of Singapore. In NUS, I focused on a broad learning of the computing world by taking modules related to the computing hardware, software and mathematical
             and statistical theories behind it.</p>
          
        </div>
      );
}

export default Aboutme;

