import {NavLink} from "react-router-dom";
import {useState} from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const clickOnButton = () => {
    setOpen(!open);
    setIsExpanded(false);
  };

  const clickOnLink = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className={`overlay ${open ? "show" : ""}`}>
        <header>
          <NavLink to="/" onClick={clickOnButton}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={clickOnButton}>
            About me
          </NavLink>
          <NavLink to="/work" onClick={clickOnButton}>
            My current job
          </NavLink>
          <NavLink onClick={clickOnLink}>Pets-projects</NavLink>
          {isExpanded ? (
            <div className="flex-column">
              <NavLink to="/photos" onClick={clickOnButton}>
                Photos
              </NavLink>
              <NavLink to="/counter" onClick={clickOnButton}>
                Counter
              </NavLink>
              <NavLink to="/users" onClick={clickOnButton}>
                Users
              </NavLink>
            </div>
          ) : (
            ""
          )}

          <NavLink to="/contacts" onClick={clickOnButton}>
            Contacts
          </NavLink>
        </header>
      </div>
      <div className="wrapper">
        <div className="btn" onClick={clickOnButton}>
          <div className={`sandwich ${open ? "active" : ""}`}>
            <div className="sw-top"></div>
            <div className="sw-mid"></div>
            <div className="sw-foot"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
