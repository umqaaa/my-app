import React, {useState} from "react";
import styles from "./Photos.module.scss";
import spinner from "../../../spinner.svg";

const cats = [
  {name: "Все"},
  {name: "Море"},
  {name: "Горы"},
  {name: "Архитектура"},
  {name: "Города"},
];

const Collection = ({name, images}) => {
  return (
    <div className={styles.collection}>
      <img className={styles.collection__big} src={images[0]} alt="Item" />
      <div className={styles.collection__bottom}>
        <img className={styles.collection__mini} src={images[1]} alt="Item" />
        <img className={styles.collection__mini} src={images[2]} alt="Item" />
        <img className={styles.collection__mini} src={images[3]} alt="Item" />
      </div>
      <h4>{name}</h4>
    </div>
  );
};

const Photos = () => {
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [collection, setCollection] = useState([]);

  React.useEffect(() => {
    const category = categoryId ? `category=${categoryId}` : "";

    setIsLoading(true);
    fetch(
      `https://64f57ac12b07270f705d43bc.mockapi.io/photos?page=${page}&limit=3&${category}`
    )
      .then((res) => res.json())
      .then((json) => {
        setCollection(json);
      })
      .catch((err) => {
        console.warn(err);
        alert("Ошибка при получении данных");
      })
      .finally(() => setIsLoading(false));
  }, [categoryId, page]);

  return (
    <div className="wrapper">
      <h2>Моя коллекция фотографий</h2>
      <div className={styles.top}>
        <ul className={styles.tags}>
          {cats.map((obj, index) => (
            <li
              onClick={() => setCategoryId(index)}
              className={categoryId === index ? `${styles.active}` : ""}
              key={obj.name}
            >
              {obj.name}
            </li>
          ))}
        </ul>
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className={styles.searchInput}
          placeholder="Поиск по названию"
        />
      </div>
      <div className={styles.content}>
        {isLoading ? (
          <img className={styles.spinner} alt="" src={spinner}></img>
        ) : (
          collection
            .filter((obj) =>
              obj.name.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((obj, index) => (
              <Collection key={index} name={obj.name} images={obj.photos} />
            ))
        )}
      </div>
      <ul className={styles.pagination}>
        {isLoading
          ? ""
          : [...Array(3)].map((_, i) => (
              <li
                key={i}
                onClick={() => setPage(i + 1)}
                className={page === i + 1 ? `${styles.active}` : ""}
              >
                {i + 1}
              </li>
            ))}
      </ul>
    </div>
  );
};

export default Photos;
