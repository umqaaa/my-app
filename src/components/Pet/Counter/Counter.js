import React, {useState} from "react";
import styles from "./Counter.module.scss";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrCount = () => {
    setCount(count + 1);
  };

  const decrCount = () => {
    setCount(count - 1);
  };

  return (
    <div className={styles.wrapper}>
      <div>
        <h2>Счетчик:</h2>
        <h2>{count}</h2>
        <button className={styles.minus} onClick={decrCount}>
          - Минус
        </button>
        <button className={styles.plus} onClick={incrCount}>
          Плюс +
        </button>
      </div>
    </div>
  );
};

export default Counter;
