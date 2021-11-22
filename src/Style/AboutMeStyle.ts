import { makeStyles } from "@material-ui/core/styles";
import { defaultColors } from "./Theme";
import background from "../Assets/profile.jpg"

const aboutMeStyle = makeStyles(
  () => ({
    aboutMeContainer: {
      height: "100vh",
      backgroundImage: `url(${background})`,
      backgroundPositionX: "center",
      backgroundSize: "100% 100%",
      backgroundRepeat: "no-repeat",
      width: "74%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    aboutMeInfoContainer: {
      background: "rgba(0, 0, 0, 0.5)",
      width: "100%",
      height: "30rem",
      borderRadius: "1rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "5rem",
      padding: "2rem"
    },
    aboutMeHeadline: {
      color: "white",
      margin: "0 0 1rem 0", 
      fontSize: "2.3rem",
      textShadow: "2px 2px 3px rgba(0,0,0,0.6)",
      fontStyle: "italic",
      fontWeight: "lighter"
    }, 
    aboutMeChildHeadlines: {
      color: "white", 
      margin: "0",
      marginBottom: ".5rem",
      fontSize: "1.5rem",
      textShadow: "2px 2px 3px rgba(0,0,0,0.6)",
      fontStyle: "italic",
      fontWeight: "normal"
    },
    aboutMeParagraph: {
      color: "white",
      fontSize: "1.1rem",
      margin: "0 0 1rem 0"
    },
    dedicatedInfoHolder: {
      width: "90%",
      height: "100%",
      display: "flex",
      justifyContent: "space-between"
    },
    dedicatedInfoContainer: {
      width: "45%",
      height: "100%",
      margin: "1rem"
    }
  }),
  {index: 1}
)

export default aboutMeStyle;