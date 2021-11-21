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
      width: "74%"
    }
  }),
  {index: 1}
)

export default aboutMeStyle;