const express = require('express');
const router = express.Router();

const ParticipantModel = require('../models/participants');

/* GET home page. */
router.get('/', function(_req, res, _next) {
  res.render('openconnexion', { title: 'La base de donnée des 20 ans de TC' });
});

router.post('/login', async function(req, res, next) {
  let errorMessage = '';
  try {
    if (req.body.username == "root" && req.body.password == "root") {
      //createSession(req, res, user);
        let participants = await ParticipantModel.getParticipants();
        let number = await ParticipantModel.getNumberOfParticipant();
        //console.log(participants, number);
        
        res.render('participants', {
          participants: participants,
          number: number
        });
    } else {
      errorMessage = "Nom d'Utilisateur ou mot de passe incorrect";
      res.render('openconnexion', {
        errorMessage: errorMessage
      });
    }
  } catch (ex) {
    res.render('error', {
        message: "Erreur lors de la connexion ou de l'optention de données",
        error: ex
    });
  }
  });

/*router.get('/startco', async function(_req, res, _next) {
  res.render('openconnexion');
});*/

/*router.get('/getparticipants', async function(_req, res, _next) {
  try {
    let participants = await ParticipantModel.getParticipants();
    let number = await ParticipantModel.getNumberOfParticipant();
    //console.log(participants, number);
    
    res.render('participants', {
      participants: participants,
      number: number
    });
  } catch (ex) {
      res.render('error', {
          message: "Erreur dans l'optention des données",
          error: ex
      });
  }
});*/


router.post('/addparticipant', async function(req, res, _next) {
  try {
    if (req.body.nom != "" && req.body.prenom != "" && req.body.email != "") {
      await ParticipantModel.addParticipant(req.body.nom, req.body.prenom, req.body.email);
      res.status(200).send();
    }
  } catch (ex) {
    res.render('error', {
      message: "Erreur dans la modification des données",
      error: ex
    })
  }
});

module.exports = router;
