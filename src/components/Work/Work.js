import {Link} from "react-router-dom";

const Work = () => {
  return (
    <div className="wrapper">
      <h2>My current job</h2>
      <p>
        По сегодняшний день я являюсь сотрудником Британской компании, мы
        разрабатываем сайты знакомств в различных направлениях, примеры сайтов:
      </p>
      <ul>
        <li>
          <Link to="https://app.tagalongdates.com/">Tagalong dates</Link>
        </li>
        <li>
          <Link to="https://app.d8u.com/">D8U</Link>
        </li>
        <li>
          <Link to="https://app.purrdates.com/">Purrdates</Link>
        </li>
      </ul>
    </div>
  );
};

export default Work;
