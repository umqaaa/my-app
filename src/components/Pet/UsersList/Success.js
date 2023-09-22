import React from "react";
import styles from "./UsersList.module.scss";
import success from "./success.svg";

const Success = ({count}) => {
  return (
    <div class={styles.successBlock}>
      <img src={success} alt="Success" />
      <h3>Успешно!</h3>
      <p>Всем {count} пользователям отправлено приглашение.</p>
      <button
        onClick={() => window.location.reload()}
        className={styles.sendInviteBtn}
      >
        Назад
      </button>
    </div>
  );
};

export default Success;
