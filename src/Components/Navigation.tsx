import  React, { useContext, useState } from "react"
import { RenderContext } from "../Contexts/RenderContext";
import navigationStyle from "../Style/NavigationStyle";

const Navigation:React.FC = () => { 
    const { mode, handleNavigation } = useContext(RenderContext)
    const navigationClasses = navigationStyle();
    return(
        <div className={navigationClasses.navigationContainer}>
            <div className={navigationClasses.navigationContent}>
                <div>
                    {mode === "About-me"
                        ?
                        <div className={navigationClasses.activeMenuItem}>
                        <p className={navigationClasses.activeMenuText}>OLIVER</p>    
                        </div>
                        :
                        <div 
                            className={navigationClasses.navigationMenuItem}
                            onClick={() => handleNavigation("About-me")}
                        >
                            <p className={navigationClasses.menuText}>OLIVER</p>
                        </div>
                    } 
                     {mode === "qualifications"
                        ?
                        <div className={navigationClasses.activeMenuItem}>
                        <p className={navigationClasses.activeMenuText}>QUALIFICATIONS</p>    
                        </div>
                        :
                        <div 
                            className={navigationClasses.navigationMenuItem}
                            onClick={() => handleNavigation("qualifications")}
                        >
                            <p className={navigationClasses.menuText}>QUALIFICATIONS</p>
                        </div>
                    }
                     {mode === "projects"
                        ?
                        <div className={navigationClasses.activeMenuItem}>
                        <p className={navigationClasses.activeMenuText}>PROJECTS</p>    
                        </div>
                        :
                        <div 
                            className={navigationClasses.navigationMenuItem}
                            onClick={() => handleNavigation("projects")}
                        >
                            <p className={navigationClasses.menuText}>PROJECTS</p>
                        </div>
                    }
                     {mode === "contact"
                        ?
                        <div className={navigationClasses.activeMenuItem}>
                        <p className={navigationClasses.activeMenuText}>CONTACT</p>    
                        </div>
                        :
                        <div 
                            className={navigationClasses.navigationMenuItem}
                            onClick={() => handleNavigation("contact")}
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