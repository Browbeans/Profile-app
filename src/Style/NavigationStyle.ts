import { makeStyles } from "@material-ui/core/styles";
import { defaultColors } from "./Theme";

const navigationStyle = makeStyles(
    () => ({
        navigationContainer: {
            height: "100vh",
            width: "25rem",
            background: defaultColors.colorPrimary,
            paddingTop: "6rem"
        },
        navigationMenuItem: {
            width: "80%",
            display: "flex",
            justifyContent: "flex-end",
            borderBottom: "1px solid #fff",
            marginTop: "0.5rem"
        },
        menuText: {
            margin: "0",
            fontSize: "2rem",
            color: "white",
            fontWeight: "lighter"
        }
    }),
    {index: 1}
)

export default navigationStyle;
