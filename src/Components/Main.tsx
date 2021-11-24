import React, { useContext } from "react";
import { RenderContext } from "../Contexts/RenderContext";
import mainStyle from "../Style/MainStyle";
import AboutMe from "./AboutMe";
import Navigation from "./Navigation";
import Qualifications from "./Qualifications";

const Main:React.FC = () => {
  const mainClasses = mainStyle();
  const { mode } = useContext(RenderContext);
  return(
    <div className={mainClasses.mainContainer}>
        <Navigation />
        {mode === "About-me" &&
          <AboutMe />
        }
        {mode === "qualifications" &&
          <Qualifications />
        }
        {mode === "projects" &&
          <AboutMe />
        }
        {mode === "contact" &&
          <AboutMe />
        }
    </div>
  )
}

export default Main;