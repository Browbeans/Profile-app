import { makeStyles } from "@material-ui/core";

const qualificationStyle = makeStyles(
  () => ({
    qualificationContainer: {
      height: "100vh",
      background: 'gray',
      backgroundPositionX: "center",
      backgroundSize: "100% 100%",
      backgroundRepeat: "no-repeat",
      width: "74%",
      display: "flex",
    },
  }),
  {index: 1}
)

export default qualificationStyle;