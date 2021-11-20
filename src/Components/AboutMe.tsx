import React from "react";
import aboutMeStyle from "../Style/AboutMeStyle";

const AboutMe:React.FC = () => {
  const aboutMeClasses = aboutMeStyle();
  return(
    <div className={aboutMeClasses.aboutMeContainer}>

    </div>
  )
}

export default AboutMe;