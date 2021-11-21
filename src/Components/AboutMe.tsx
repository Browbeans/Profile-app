import React from "react";
import aboutMeStyle from "../Style/AboutMeStyle";

const AboutMe:React.FC = () => {
  const aboutMeClasses = aboutMeStyle();
  return(
    <div className={aboutMeClasses.aboutMeContainer}>
      <div className={aboutMeClasses.aboutMeInfoContainer}>
        <h1 className={aboutMeClasses.aboutMeHeadline}>Full stack developer</h1>
      </div>
    </div>
  )
}

export default AboutMe;