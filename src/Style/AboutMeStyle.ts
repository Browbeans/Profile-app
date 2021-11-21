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
      background: "rgba(255, 255, 255, 0.3)",
      width: "40rem",
      height: "30rem",
      borderRadius: "1rem"
    },
    aboutMeHeadline: {
      color: "white", 
      margin: "0",
      fontSize: "3rem",
      textShadow: "2px 2px 3px rgba(0,0,0,0.3)"
    }
  }),
  {index: 1}
)

export default aboutMeStyle;