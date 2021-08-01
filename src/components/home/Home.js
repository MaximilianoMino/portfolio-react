import React from 'react';
import ContactContainer from '../../containers/contactcontainer/ContactContainer';
import SkillsContainer from '../../containers/skillscontainer/SkillsContainer'
import ProjectContainer from '../../containers/projectcontainer/ProjectContainer'
import MyResumeContainer from '../../containers/myresumecontainer/MyResumeContainer'
import CVContainer from '../../containers/CVcontainer/CVContainer';
import './home.scss'

const Home = () => {

  return (
    <>
      <div className="icon">
        <SkillsContainer />
      </div>
      <div className="icon">
        <ContactContainer />
      </div>
      <div className="icon">
        <MyResumeContainer />
      </div>
      <div className="icon">
        <ProjectContainer />
      </div>
      <div className="icon">
        <CVContainer />
      </div>

    </>
  )
}

export default Home
