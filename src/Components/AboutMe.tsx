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
              advancing in my career. 
            </p>
            <h2 className={aboutMeClasses.aboutMeChildHeadlines}>Skills:</h2>
            <p className={aboutMeClasses.aboutMeParagraph}></p>
          </div>
          <div className={aboutMeClasses.dedicatedInfoContainer}>
            <h2 className={aboutMeClasses.aboutMeChildHeadlines}>Interests:</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe;