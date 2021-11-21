import { Button } from "@material-ui/core";
import  React, { useState } from "react"
import navigationStyle from "../Style/NavigationStyle";

type State = "About-me" | "qualifications" | "projects" | "contact"

const Navigation:React.FC = () => { 
   const [section, setSection] = useState<State>("About-me");
   const handleState = (page: State) => {
       setSection(page)
       console.log(page)
    };
    const navigationClasses = navigationStyle();
    return(
        <div className={navigationClasses.navigationContainer}>
            <div className={navigationClasses.navigationContent}>
                <div>
                    {section === "About-me"
                        ?
                        <div className={navigationClasses.activeMenuItem}>
                        <p className={navigationClasses.activeMenuText}>OLIVER</p>    
                        </div>
                        :
                        <div 
                            className={navigationClasses.navigationMenuItem}
                            onClick={() => handleState("About-me")}
                        >
                            <p className={navigationClasses.menuText}>OLIVER</p>
                        </div>
                    } 
                     {section === "qualifications"
                        ?
                        <div className={navigationClasses.activeMenuItem}>
                        <p className={navigationClasses.activeMenuText}>QUALIFICATIONS</p>    
                        </div>
                        :
                        <div 
                            className={navigationClasses.navigationMenuItem}
                            onClick={() => handleState("qualifications")}
                        >
                            <p className={navigationClasses.menuText}>QUALIFICATIONS</p>
                        </div>
                    }
                     {section === "projects"
                        ?
                        <div className={navigationClasses.activeMenuItem}>
                        <p className={navigationClasses.activeMenuText}>PROJECTS</p>    
                        </div>
                        :
                        <div 
                            className={navigationClasses.navigationMenuItem}
                            onClick={() => handleState("projects")}
                        >
                            <p className={navigationClasses.menuText}>PROJECTS</p>
                        </div>
                    }
                     {section === "contact"
                        ?
                        <div className={navigationClasses.activeMenuItem}>
                        <p className={navigationClasses.activeMenuText}>CONTACT</p>    
                        </div>
                        :
                        <div 
                            className={navigationClasses.navigationMenuItem}
                            onClick={() => handleState("contact")}
                        >
                            <p className={navigationClasses.menuText}>CONTACT</p>
                        </div>
                    }
                </div>
                <div className={navigationClasses.contactInfoContainer}>
                <a
                    href="oliverjohansson3@gmail.com"
                >
                    oliverjohansson3@gmail.com
                </a>
                </div>
            </div>
        </div>
    )
}

export default Navigation;