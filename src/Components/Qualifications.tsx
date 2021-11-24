import React from "react";
import qualificationStyle from "../Style/QualificationStyle";
import Backend from "./QualificationsCmp/Backend";

const Qualifications:React.FC = () => {
  const qualificationClasses = qualificationStyle();
  return(
    <div className={qualificationClasses.qualificationContainer}>
      <Backend />
      <Backend />
      <Backend />
      <Backend />
    </div>
  )
}
export default Qualifications;