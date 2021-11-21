import React, { useContext } from "react";
import { RenderContext } from "../Contexts/RenderContext";
import mainStyle from "../Style/MainStyle";
import AboutMe from "./AboutMe";
import Navigation from "./Navigation";

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
          <AboutMe />
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