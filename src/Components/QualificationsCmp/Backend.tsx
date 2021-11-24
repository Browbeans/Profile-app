import React from "react";
import backendStyle from "../../Style/BackendStyle";

const Backend:React.FC = () => {
  const backendClasses = backendStyle();
  return(
    <div className={backendClasses.backendContainer}>

    </div>
  )
}

export default Backend;