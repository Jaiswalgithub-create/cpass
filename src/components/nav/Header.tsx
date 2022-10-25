import { useEffect } from "react";
import { Link } from "react-router-dom";
import i18next from "i18next";
import "../../i18n";
import {useTranslation} from "react-i18next";
import {availableLanguages} from "../../i18n";

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
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        {t<string>("CpaasHeading")}
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <select
              defaultValue={i18n.language}
              onChange={(e) => i18n.changeLanguage(e.target.value)}
            >
              {availableLanguages.map((language) => (
                <option key={language}>{language}</option>
              ))}
            </select>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
