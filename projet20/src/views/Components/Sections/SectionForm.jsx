import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import sectionformStyle from "assets/jss/material-kit-react/views/sectionForm.jsx";

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
        <div className={classes.subtitles}>
          <h4>Une petite explication</h4>
        </div>
        <div className={classes.input}>
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
        </div>
        <div className={classes.input}>
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
        </div>
        <div className={classes.input}>
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
        </div>
        <div className={classes.button}>
          <GridContainer>
            <Button color="info">Je m'inscris</Button>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(sectionformStyle)(SectionForm);