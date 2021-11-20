import { Button } from "@material-ui/core";
import  React from "react"
import navigationStyle from "../Style/NavigationStyle";

const Navigation:React.FC = () => { 
    const navigationClasses = navigationStyle();
    return(
        <div className={navigationClasses.navigationContainer}>
            <div className={navigationClasses.navigationContent}>
                <div>
                    <div className={navigationClasses.navigationMenuItem}>
                        <p className={navigationClasses.menuText}>OLIVER</p>
                    </div>
                    <div className={navigationClasses.navigationMenuItem}>
                        <p className={navigationClasses.menuText}>QUALIFICATIONS</p>
                    </div>
                    <div className={navigationClasses.navigationMenuItem}>
                        <p className={navigationClasses.menuText}>PROJECTS</p>
                    </div>
                    <div className={navigationClasses.navigationMenuItem}>
                        <p className={navigationClasses.menuText}>CONTACT</p>
                    </div>
                </div>
                <h2>asdsad</h2>
            </div>
        </div>
    )
}

export default Navigation;