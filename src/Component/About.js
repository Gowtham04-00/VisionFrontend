import React from 'react';
import './About.css';
import placement from '../shared/Images/placement.png';
import skills from '../shared/Images/skills.png';
import walk from '../shared/Images/walk.png';
import cmp1 from '../shared/Images/changepond.png';
import cmp2 from '../shared/Images/cogni.png';
import cmp3 from '../shared/Images/info.png';
import cmp4 from '../shared/Images/hcl.png';



const About = () => {
  return (
    <div>
      <p className='division1'>
        <h1 className="Head">Why We Are Rated as the Best IT Training Institute?</h1>
        <p className='para'>
          <strong>Vision</strong> is one of the best IT cum Software Training Institutes in Chennai with <strong>100% Placement</strong> Support for all programs. We are also certified as one of the best online and offline (classroom) Training Institutes in Chennai covering 30+ countries, empaneling 100+ IT experienced mentors, offering 70+ technologies. We are valued by our students as one of the Best Placement Training Institutes in Chennai with more than 500+ IT MNC hiring partners offering genuine Placement support on completion of all our Training Programs. We are a Pioneer training company offering the following services.
        </p>
      </p>
      <p className='division2'>
      <h1 className="Head1">Our Achievements</h1>
      <p className="para2">
        Vision has achieved significant milestones in providing top-quality education
         and training to students.
    We take pride in our achievements and the positive impact we have made in the lives 
    of our students. We remain committed to providing the highest quality education and training to students and preparing them for success in their chosen careers.
  
      </p>
      <img className="img" src={placement} alt='aro' />
      </p>

      <p className="division3">
        <h1 className="Head2">What We Offer</h1>
        <img className="pic1" src={skills} alt='maro'/>
        <img className="pic2" src={walk} alt='daro'/>
        <img className="pic1" src={skills} alt='maro'/>
      </p>
<br/>


      <p className="division4">
        <h1 className="Head3">Our Major Recruiters</h1>
        <p><br/><br/></p>
       <marquee scrolldelay="100" width="100%" direction="right" height="200px">
         <img className="cmp1" src={cmp1} alt='maro'/>
       <img className="cmp2" src={cmp2} alt='maro'/>
       <img className="cmp3" src={cmp3} alt='maro'/>
       <img className="cmp4" src={cmp4} alt='maro'/>
   
      </marquee>
       
      </p>
     

    
      
    </div>
  );
};

export default About;