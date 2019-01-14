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
              <h2>Programme du Vendredi 5 Avril 2019</h2>
            </div>
            <GridContainer>
              
                <NavPills
                  color="danger"
                  tabs={[
                    {
                      tabButton: "Matin",
                      tabIcon: Cafe,
                      tabContent: (
                            <span>
                              <ul>
                                <li><b>9h30-10h30 / Agora :</b> Accueil, petit déjeuner</li>
                                <li><b>10h30-12h / La rotonde :</b>
                                  <ul>
                                    <li><b>10h30 - 10h45 :</b> Que devient l’INSA ?</li>
                                    <li><b>10h45 - 11h45 :</b> Témoignages anciens élèves de TC </li>
                                    <li><b>11h45 - 12h :</b> Que devient le département ?</li>
                                  </ul>
                                </li>
                              </ul> 
                            </span>
                          
                      )
                    },
                    {
                      tabButton: "Midi",
                      tabIcon: Diner,
                      tabContent: (
                        <span>
                          <ul>
                            <li>
                          <b>12h-14h / Agora :</b> Repas cocktail
                            </li>
                            <ul>
                            <li>
                            Découverte des projets de fresque destinée à la décoration du Hall du batiment Claude Chappe. 
                            Ces projet sont réalisés par l’école de design la Martinière Diderot
                            </li>
                            <li>
                            Au cours de ce repas vous pourrez voter pour votre fresque préférée
                            </li>
                            </ul>
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
                            <li><b>14h-16h / département TC - amphi Chappe - campus INSA :</b>
                              <ul>
                                <li><b>Département TC :</b> Présentation des salles techniques par les professeurs. </li>
                                <li><b>Amphi Chappe :</b> Quizz de remise à niveau TC, Êtes vous meilleurs que les étudiants ? </li>
                                <li><b>Visite du campus :</b> Découverte des nouveautés.</li>
                              </ul>
                            </li>
                            <li><b>16h-17h / Rotonde :</b> Mini talks. Mauvais au Quizz? les chercheurs de TC vous mettent à jour</li>
                            <li><b>17h-18h / Kfet :</b> Quoi de mieux qu’une bonne bière pour attaquer la soirée ?</li>
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
                            <li><b>21h-00h / Lyon :</b> Pour clore la journée nous vous invitons à passer une soirée dans Lyon. 
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
