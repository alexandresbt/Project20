import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import sondageStyle from "assets/jss/material-kit-react/views/sondage.jsx";

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import SectionCarousel from "views/Components/Sections/SectionCarousel.jsx";
import SectionForm from "views/Components/Sections/SectionForm.jsx";

class Sondage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;

    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={6} md={6}>
          <SectionCarousel />
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
          <SectionForm />
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(sondageStyle)(Sondage);