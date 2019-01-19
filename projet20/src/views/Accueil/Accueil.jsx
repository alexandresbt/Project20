import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Header from "components/Header/Header.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import SectionPills from "./Sections/SectionPills.jsx";
import Sondage from "views/Sondage/Sondage.jsx";
import accueilStyle from "assets/jss/material-kit-react/views/accueil.jsx";



class Accueil extends React.Component {
  render(){
    const { classes, ...rest } = this.props;
    return(

      <div id="accueil">
        <Header
          brand="Accueil"
          fixed
          rightLinks={<HeaderLinks />}
          color="white"
          changeColorOnScroll={{
            height: 300,
            color: "danger"
          }}
          {...rest}
        />
        <Parallax data-parallax="false" image={require("assets/img/Logo20ans.jpg")}>
          <div className={classes.container}>

            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  
                 
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

