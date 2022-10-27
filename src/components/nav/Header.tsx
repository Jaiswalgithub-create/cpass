import { useEffect } from "react";
import { Link } from "react-router-dom";
import i18next from "i18next";
import "../../i18n";
import {useTranslation} from "react-i18next";
import {availableLanguages} from "../../i18n";
import Logo from '../../images/CPaaSLogo.png';
import "../../screens/login.css"

const Header = () => {
  const { i18n, t } = useTranslation();

  useEffect(() => {
    // if (localStorage?.getItem("i18nextLng")?.length > 2) {
    // 	i18next?.changeLanguage("en");
    // }
    const lng = navigator.language;
    i18next.changeLanguage(lng);
  }, []);

//   const handleLanguageChange = (e) => {
//     i18n.changeLanguage(e.target.value);
//   };

  return (
    <header>
    <div className="container-fluid">
      <div className="row w-100 align-items-center justify-content-between">
      <Link className="navbar-brand logo w-auto" to="/">
     <img className="img-fluid" src={Logo} alt="CPAAS TCL" />
    {/* {t<string>("CpaasHeading")} */}
    </Link>
    <ul className="nav w-auto">
      <li className="nav-item">
      <div className="form-floating">
          <select 
              className="form-select language-select" 
              id="floatingSelect" 
              aria-label="Floating label select example" 
              defaultValue={i18n.language}
              onChange={(e) => i18n.changeLanguage(e.target.value)}>
            {availableLanguages.map((language) => (
                <option key={language}>{language}</option>
              ))}
          </select>
          <label htmlFor="floatingSelect">Languages</label>
        </div>
            
          </li>
      </ul>
      </div>
    </div>
 </header>
  );
};

export default Header;
