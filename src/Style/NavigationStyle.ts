import { makeStyles } from "@material-ui/core/styles";
import { defaultColors } from "./Theme";

const navigationStyle = makeStyles(
    () => ({
        navigationContainer: {
            height: "100vh",
            width: "20rem",
            background: defaultColors.colorPrimary
        },
    }),
    {index: 1}
)

export default navigationStyle;
