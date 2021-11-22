import React from "react";
import aboutMeStyle from "../Style/AboutMeStyle";

const AboutMe:React.FC = () => {
  const aboutMeClasses = aboutMeStyle();
  return(
    <div className={aboutMeClasses.aboutMeContainer}>
      <div className={aboutMeClasses.aboutMeInfoContainer}>
        <h1 className={aboutMeClasses.aboutMeHeadline}>Oliver Johansson</h1>
        <div className={aboutMeClasses.dedicatedInfoHolder}>
          <div className={aboutMeClasses.dedicatedInfoContainer}>
            <h2 className={aboutMeClasses.aboutMeChildHeadlines}>Background:</h2>
            <p className={aboutMeClasses.aboutMeParagraph}>
              Im a 25 year old developer, originally from Vara but now located in 
              Gothenburg. Been living in Gothenburg since 2018 and excited to keep
              advancing in my career. Employee as a Fullstack-developer at FrontEdge IT 
              and currently out on a project at Collector Bank. 
            </p>
            <h2 className={aboutMeClasses.aboutMeChildHeadlines}>Skills:</h2>
            <p className={aboutMeClasses.aboutMeParagraph}>
              I am more of a solution type of guy rather than a designer, i love 
              solving different kinds of problems and I hate giving up! Different
              types of funtionality is my thing whether it's in the BackEnd or the 
              FrontEnd.
            </p>
          </div>
          <div className={aboutMeClasses.dedicatedInfoContainer}>
            <h2 className={aboutMeClasses.aboutMeChildHeadlines}>Interests:</h2>
            <p className={aboutMeClasses.aboutMeParagraph}>
              In my sparetime i like to activate myself in different kind of activities
              im a big fan of Golf (when you can actully play it). When the weather gets 
              to bad I like to either go to the gym, play padel or box a few rounds. 
            </p>
            <h2 className={aboutMeClasses.aboutMeChildHeadlines}>Experience:</h2>
            <p className={aboutMeClasses.aboutMeParagraph}>
              At the time I am both working 100% and studying (FrontEnd-dev) at Medieinstitutet,
              practiced in different kind of projects and techniques. I made my 10 week internship
              at FrontEdge IT where we made a Customs-system for a startup called Tullify. The project 
              was a fullstack project with 70% backend work and 30% frontend work.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe;