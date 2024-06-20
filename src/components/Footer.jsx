import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import giphy from "../assets/giphy.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="item1">
          <img src={giphy} alt="giphy" className="giphy" />
        </div>
        <div className="item2">
          <span style={{ paddingRight: 5 }}>Copyright </span>
          <FontAwesomeIcon icon={faCopyright} />{" "}
          <span style={{ paddingLeft: 5 }}>
            {new Date().getFullYear()} Fady Damak. All Rights Reserved.
          </span>
        </div>
        <a href="https://github.com/FadyDMK" target="_blank" className="item3">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
