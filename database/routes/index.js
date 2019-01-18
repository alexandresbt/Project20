const express = require('express');
const router = express.Router();

const ParticipantModel = require('../models/participants');



router.post('/login', async function(req, res) {
  let errorMessage = '';
  try {
    if (req.body.username == "root" && req.body.password == "vivelaTC") {
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


router.post('/addparticipant', async function(req, res, _next) {
  try {
    
    if (req.body.nom != "" && req.body.prenom != "" && req.body.email != "") {
      var ok = 0;
      var maybe = 0;
      var no = 0;
      if (req.body.response === "a") {
        ok = 1;
      } else if (req.body.response === "b") {
        maybe = 1;
      } else {
        no = 1;
      }
      await ParticipantModel.addParticipant(req.body.nom, req.body.prenom, req.body.email, ok, maybe, no);
      return res.status(200).send();
    }
  } catch (ex) {
    res.render('error', {
      message: "Erreur dans la modification des données",
      error: ex
    })
  }
});

/* GET home page. */
router.get('/', function(_req, res, _next) {
  res.render('openconnexion', { title: 'La base de donnée des 20 ans de TC' });
});

module.exports = router;
