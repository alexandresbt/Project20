import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import FormStyle from "assets/jss/material-kit-react/views/sectionForm.jsx";

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";

class SectionForm extends React.Component {
  render() {
    const { classes, ...rest } = this.props;

    return (
      <div>
        <div className={classes.title}>
          <h2>Rejoignez l'évènement !</h2>
        </div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12} lg={8}>
            <CustomInput
              labelText="Nom"
              id="float"
              formControlProps={{
                fullWidth: true
              }}
            />
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12} lg={8}>
            <CustomInput
              labelText="Prénom"
              id="float"
              formControlProps={{
                fullWidth: true
              }}
            />
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12} lg={8}>
            <CustomInput
              labelText="Adresse mail"
              id="float"
              formControlProps={{
                fullWidth: true
              }}
            />
          </GridItem>
        </GridContainer>
        <GridContainer>
          <Button color="info">Je m'inscris</Button>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(FormStyle)(SectionForm);