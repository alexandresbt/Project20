import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import SectionPills from "./Sections/SectionPills.jsx";
import SectionCarousel from "./Sections/SectionCarousel.jsx";
import SectionLogin from "./Sections/SectionLogin.jsx";
import Sondage from "views/Sondage/Sondage.jsx";
import accueilStyle from "assets/jss/material-kit-react/views/accueil.jsx";

import Player from "./Sections/Video.jsx";




class Accueil extends React.Component {
  render(){
    const { classes, ...rest } = this.props;
    return(

      <div id="accueil">
        <Header
          brand="Accueil"
          fixed
          rightLinks={<HeaderLinks />}
          color="transparent"
          changeColorOnScroll={{
            height: 300,
            color: "danger"
          }}
          {...rest}
        />
        <Parallax image={require("assets/img/img1.png")}>
          <div className={classes.container}>

            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>Projet 20 ans.</h1>
                  <h3 className={classes.subtitle}>
                    20 ans du département Télécom | Avril 2019
                  </h3>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div className={classNames(classes.main, classes.mainRaised)}>
          <div id="prog">
          <SectionPills />
          </div>
          {/* <GridContainer spacing={24}>
            <GridItem xs={6}>
              <SectionCarousel />
            </GridItem>
            <GridItem xs={6}>
              <SectionLogin />
            </GridItem>
          </GridContainer> */}
          <div id="sondage">
          <Sondage />
          </div>
        </div>


      </div>
    );
  } 
}

export default withStyles(accueilStyle)(Accueil);

