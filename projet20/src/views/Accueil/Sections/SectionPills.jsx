import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Cafe from "@material-ui/icons/LocalCafe";
import Diner from "@material-ui/icons/LocalDining";
import Cocktail from "@material-ui/icons/LocalBar";
import Walk from "@material-ui/icons/DirectionsWalk"

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import NavPills from "components/NavPills/NavPills.jsx";

import pillsStyle from "assets/jss/material-kit-react/views/accueilSections/pillsStyle.jsx";

class SectionPills extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div id="navigation-pills">
            <div className={classes.title}>
              <h2>Programme de la journée</h2>
            </div>
            <GridContainer>
              
                <NavPills
                  color="danger"
                  tabs={[
                    {
                      tabButton: "Matin",
                      tabIcon: Cafe,
                      tabContent: (
                        <GridContainer> 
                          <GridItem xs={6}>
                            <span>
                              <ul>
                                <li>9h30-10h30 / Agora : Accueil, petit déjeuner</li>
                                <li>10h30-12h / La rotonde :
                                  <ul>
                                    <li>10h30 - 10h45 : Que devient l’INSA ?</li>
                                    <li>10h45 - 11h00 : Que devient le département ?</li>
                                    <li>11h - 12h : Que deviennent les anciens élèves de TC ?</li>
                                  </ul>
                                </li>
                              </ul> 
                            </span>
                          </GridItem>
                          <GridItem xs={6}> 
                            <p>Hello</p>
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Midi",
                      tabIcon: Diner,
                      tabContent: (
                        <span>
                          <ul>
                            <li>
                          12h-14h / Agora : Repas cocktail et découverte des projets de la fresque du département réalisé par l’école de design la Martinière Diderot. 
                          Elle représente cet évènement et sera réalisée dans le hall du bâtiment. 
                          Au cours de ce repas vous pourrez voter pour votre fresque préférée.
                            </li>
                          </ul>
                        </span>
                      )
                    },
                    {
                      tabButton: "Après-midi",
                      tabIcon: Walk,
                      tabContent: (
                        <span>
                          <ul>
                            <li>14h-16h / département TC - amphi Chappe - campus INSA :
                              <ul>
                                <li>Département TC : Présentation des salles techniques par les professeurs. </li>
                                <li>Amphi Chappe : Quizz de remise à niveau TC, Êtes vous meilleurs que les étudiants ? </li>
                                <li>Campus : Découverte des nouveautés.</li>
                              </ul>
                            </li>
                            <li>16h-17h / Rotonde : Mauvais au Quizz ? Les chercheurs vous mettent à jour.</li>
                            <li>17h-18h / Kfet : Quoi de mieux qu’une bonne bière pour attaquer la soirée ?</li>
                          </ul> 
                        </span>
                      )
                    },
                    {
                      tabButton: "Soir",
                      tabIcon: Cocktail,
                      tabContent: (
                        <span>
                          <ul>
                            <li>21h-00h / Lyon : Pour clore la journée nous vous invitons à passer une soirée dans Lyon. 
                              Vous êtes convié à un repas avec les anciens élèves puis une soirée dansante. 
                              La soirée sera payante pour les participants.</li>
                            
                          </ul> 
                        </span>
                      )
                    }
                    
                  ]}
                />
            
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(pillsStyle)(SectionPills);
