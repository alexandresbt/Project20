import Components from "views/Components/Components.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import Accueil from "views/Accueil/Accueil.jsx";
import Sondage from "views/Sondage/Sondage.jsx";

var indexRoutes = [
  { path: "/accueil", name: "Accueil", component: Accueil },
  { path: "/sondage", name: "Sondage", component: Sondage },
  { path: "/landing-page", name: "LandingPage", component: LandingPage },
  { path: "/profile-page", name: "ProfilePage", component: ProfilePage },
  { path: "/login-page", name: "LoginPage", component: LoginPage },
  { path: "/", name: "Components", component: Components }
];

export default indexRoutes;
