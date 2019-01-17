import Components from "views/Components/Components.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import Accueil from "views/Accueil/Accueil.jsx";
import Sondage from "views/Sondage/Sondage.jsx";

var indexRoutes = [
  { path: "/sondage", name: "Sondage", component: Sondage },
  { path: "/", name: "Accueil", component: Accueil }
];

export default indexRoutes;
