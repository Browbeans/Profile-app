import  React from "react"
import navigationStyle from "../Style/NavigationStyle";

const Navigation:React.FC = () => { 
    const navigationClasses = navigationStyle();
    return(
        <div className={navigationClasses.navigationContainer}>

        </div>
    )
}

export default Navigation;