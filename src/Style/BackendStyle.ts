import { makeStyles } from "@material-ui/core";

const backendStyle = makeStyles(
  () => ({
    backendContainer: {
      height: "100vh",
      width: "25%",
      background: "black",
      border: "1px solid #fff"
    }

  }),
  {index: 1}
)

export default backendStyle;