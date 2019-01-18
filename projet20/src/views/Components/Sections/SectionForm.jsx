import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import sectionformStyle from "assets/jss/material-kit-react/views/sectionForm.jsx";

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Radio from "@material-ui/core/Radio";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const initialState = {
  nom: '',
  prenom: '',
  email: '',
  selectedEnabled: "a"
};

class SectionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeEnabled = this.handleChangeEnabled.bind(this);
  }
  reset () {
    this.setState(initialState);
  }

  handleChange(event) {
    var name = event.target.name;
    var value = event.target.value;
    
    if (name === "nom") {
      this.setState({nom: value});
    }else if (name === "prenom"){
      this.setState({prenom: value});
    } else {
      this.setState({email: value});
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    
    /*const data = new FormData();
    data.append('nom', this.state.nom);
    data.append('prenom', this.state.prenom);
    data.append('email', this.state.email);
    data.append('',);
    data.append('',);
    data.append('',);
    for (var pair of data.entries()) {
      console.log(pair[0]+ ', ' + pair[1]); 
    }*/
    
    fetch('http://tc20ans.insa-lyon.fr:6556/addparticipant', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nom: this.state.nom,
        prenom: this.state.prenom,
        email: this.state.email,
        response: this.state.selectedEnabled
      })
})
    this.reset();
  }

  handleChangeEnabled(event) {
    this.setState({ selectedEnabled: event.target.value });
  }

  render() {
    const {classes} = this.props;

    return (
      <div>
        <div className={classes.title}>
          <h2>Sondage de participation</h2>
        </div>
        <div className={classes.subtitles}>
          <h4>Ce sondage n'est pas une inscription définitive</h4>
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
                    name: "nom",
                    value: (this.state.nom),
                    onChange: (this.handleChange),
                    type: "text"
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
                    name: "prenom",
                    value: (this.state.prenom),
                    onChange: (this.handleChange),
                    type: "text"
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
                    name: "email",
                    value: (this.state.email),
                    onChange: (this.handleChange),
                    type: "email"
                  }}
                />
              </GridItem>
            </GridContainer>
          </div>
          <div
              className={
                classes.checkboxAndRadio +
                " " +
                classes.checkboxAndRadioHorizontal
              }
            >
            <FormControlLabel
              control={
                <Radio
                  checked={this.state.selectedEnabled === "a"}
                  onChange={this.handleChangeEnabled}
                  value="a"
                  name="ok"
                  aria-label="A"
                  icon={
                    <FiberManualRecord
                      className={classes.radioUnchecked}
                    />
                  }
                  checkedIcon={
                    <FiberManualRecord className={classes.radioChecked} />
                  }
                  classes={{
                    checked: classes.radio
                  }}
                />
              }
              classes={{
                label: classes.label
              }}
              label="Je participe"
            />
          </div>
          <div
              className={
                classes.checkboxAndRadio +
                " " +
                classes.checkboxAndRadioHorizontal
              }
            >
            <FormControlLabel
              control={
                <Radio
                  checked={this.state.selectedEnabled === "b"}
                  onChange={this.handleChangeEnabled}
                  value="b"
                  name="maybe"
                  aria-label="B"
                  icon={
                    <FiberManualRecord
                      className={classes.radioUnchecked}
                    />
                  }
                  checkedIcon={
                    <FiberManualRecord className={classes.radioChecked} />
                  }
                  classes={{
                    checked: classes.radio
                  }}
                />
              }
              classes={{
                label: classes.label
              }}
              label="Je pense participer"
            />
          </div>
          <div
              className={
                classes.checkboxAndRadio +
                " " +
                classes.checkboxAndRadioHorizontal
              }
            >
            <FormControlLabel
              control={
                <Radio
                  checked={this.state.selectedEnabled === "c"}
                  onChange={this.handleChangeEnabled}
                  value="c"
                  name="no"
                  aria-label="B"
                  icon={
                    <FiberManualRecord
                      className={classes.radioUnchecked}
                    />
                  }
                  checkedIcon={
                    <FiberManualRecord className={classes.radioChecked} />
                  }
                  classes={{
                    checked: classes.radio
                  }}
                />
              }
              classes={{
                label: classes.label
              }}
              label="Je ne participe pas"
            />
          </div>
          <GridContainer>
            <div className={classes.button}>
              <Button type="submit" color="danger">Envoyer</Button>
            </div>
          </GridContainer>
        </form>
      </div>
    );
  }
}

export default withStyles(sectionformStyle)(SectionForm);