import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import sectionformStyle from "assets/jss/material-kit-react/views/sectionForm.jsx";

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";

const initialState = {
  Nom: '',
  Prenom: '',
  Email: ''
};

class SectionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  reset () {
    this.setState(initialState);
  }

  handleChange(event) {
    var name = event.target.name;
    var value = event.target.value;
    
    if (name === "1") {
      this.setState({Nom: value});
    }else if (name === "2"){
      this.setState({Prenom: value});
    } else {
      this.setState({Email: value});
    }
  }

  handleSubmit(event) {
    //alert('A name was submitted: ' + this.state.value1 + " " + this.state.value2 + ' and an email :' + this.state.value3);
    event.preventDefault();
      
    this.reset();
  }

  render() {
    const {classes} = this.props;

    return (
      <div>
        <div className={classes.title}>
          <h2>Rejoignez l'évènement !</h2>
        </div>
        <div className={classes.subtitles}>
          <h4>Une petite explication</h4>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className={classes.input}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12} lg={8}>
                <CustomInput
                  labelText="Nom"
                  id="float"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    name: "1",
                    value: (this.state.Nom),
                    onChange: (this.handleChange)
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
                  inputProps={{
                    name: "2",
                    value: (this.state.Prenom),
                    onChange: (this.handleChange)
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
                  inputProps={{
                    name: "3",
                    value: (this.state.Email),
                    onChange: (this.handleChange)
                  }}
                />
              </GridItem>
            </GridContainer>
          </div>
          <div className={classes.button}>
            <GridContainer>
              <Button type="submit" color="info">Je m'inscris</Button>
            </GridContainer>
          </div>
        </form>
      </div>
    );
  }
}

export default withStyles(sectionformStyle)(SectionForm);