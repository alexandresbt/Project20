import Accueil from "views/Accueil/Accueil.jsx";
import Sondage from "views/Sondage/Sondage.jsx";

var indexRoutes = [
  { path: "/sondage", name: "Sondage", component: Sondage },
  { path: "/", name: "Accueil", component: Accueil }
];

export default indexRoutes;
