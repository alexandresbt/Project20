import { container } from "assets/jss/material-kit-react.jsx";
import imagesStyles from "assets/jss/material-kit-react/imagesStyles.jsx";
import customCheckboxRadioSwitch from "assets/jss/material-kit-react/customCheckboxRadioSwitch.jsx";

const sectionformStyle = {
    container,
    input: {
      marginBottom: "20px",
      paddingLeft: "5px",
      paddingRight: "5px"
    },
    button: {
      marginTop: "20px"
    },
    ...imagesStyles,
    ...customCheckboxRadioSwitch
};

export default sectionformStyle;