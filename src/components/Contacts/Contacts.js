import {FaPhone, FaEnvelope, FaTelegram, FaGitSquare} from "react-icons/fa";

const Contacts = () => {
  return (
    <div className="wrapper">
      <h2>Contacts:</h2>
      <div className="flex-column">
        <div className="row">
          <FaPhone />
          <span> phone: +7 (953) 489 62 11</span>
        </div>
        <div className="row">
          <FaEnvelope /> <span> email: umqoll@icloud.com</span>
        </div>
        <div className="row">
          <FaTelegram />
          <span>telegram: umqaaa</span>
        </div>
        <div className="row">
          <FaGitSquare />
          <span>git: https://github.com/umqaaa</span>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
