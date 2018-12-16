const db = require('./db');

const getparticipants = "SELECT * FROM participants ;";
const getnumberofparticipant = "SELECT MAX(id) AS id FROM participants ;"
const addparticipant = "INSERT INTO participants ( nom , prenom , email ) VALUES ( ? , ? , ? ) ;";


function getParticipants() {
  return db.sqlQuery(getparticipants);
}

function getNumberOfParticipant() {
  return db.sqlQuery(getnumberofparticipant);
}

function addParticipant(nom, prenom, email) {
  return db.sqlQuery(addparticipant, [nom, prenom, email]);
}

exports.getParticipants = getParticipants;
exports.getNumberOfParticipant = getNumberOfParticipant;
exports.addParticipant = addParticipant;
