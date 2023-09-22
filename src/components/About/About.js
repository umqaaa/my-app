import myPhoto from "./myPhoto.jpeg";
import styles from "./About.module.scss";

const About = () => {
  return (
    <div className="wrapper">
      <h2>About me</h2>
      <div>
        <img className={styles.avatar} src={myPhoto} alt="" />
      </div>
      <div className={styles.flexRow}>
        <div className={styles.leftColumn}>
          <h3>Резванова Ильнара</h3>
          <h4>Frontend-developer</h4>
          <div>
            <p className={styles.colored}>Experience:</p>
            <strong>Hubpeople</strong>, Isle of Man, UK — Frontend-developer
            (AngularJS)
            <br /> <small>Июнь 2021 - настоящее время</small>
            <ul>
              <li>Разработка и сопровождение сайта знакомств;</li>
              <li>
                Работа по методике Scrum с ежедневными митингами и спринтами;
              </li>
              <li>Работа с TMS системами Trello, Azure DevOps;</li>
              <li>Создание кроссбраузернной и адаптивной верстки;</li>
              <li>Разработка визуальных компонентов,создание новых фич;</li>
              <li>Исправление багов;</li>
              <li>Работа с анимациями.</li>
            </ul>
          </div>
          <div>
            <p className={styles.colored}>Education:</p>
            <strong>Казанский Федеральный Университет</strong>, Urban ecologist
            — Магистр <br /> <small>Сентябрь 2015 - Февраль 2022</small>
            <br />
            <strong>Пройденные курсы:</strong>
            <ul>
              <li>HTML Academy «Погружение в вёрстку»;</li>
              <li>
                HTML Academy «Погружение в программирование на JavaScript»;
              </li>
              <li>«AngularJS Essential» от ITVDN;</li>
              <li>
                «Полный курс по JavaScript + React - с нуля до результата» от
                Ивана Петриченко;
              </li>
              <li>«ReactJS - Путь Самурая» от IT-Incubator;</li>
              <li>«Полный Курс по React» Богдан Стащук</li>
            </ul>
          </div>
        </div>

        <div className={styles.rightColumn}>
          <p>
            <p className={styles.colored}>Skills:</p> HTML, CSS, JavaScript
            (AngularJS, React), Git, Scrum, Bootstrap, Preprocessors, Devtools,
            JSON, API, Postman, Cypress, Charles, Figma, Adobe Xd, Trello, Azure
            DevOps
          </p>
          <p>
            <p className={styles.colored}>Languages:</p>English - intermediate
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
