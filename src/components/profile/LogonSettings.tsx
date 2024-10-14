import { useState } from "react";
import styles from "../../App.module.scss";
import { useUser } from "../../UserContext";

function GetDate(date: number | undefined) {
  try {
    if (date != undefined) {
      console.log(date);
      var result = new Date(date * 1000);
      return `${result.getDate()}.${result.getMonth()}.${result.getFullYear()}`;
    }
  } catch {
    return "";
  }
}

function LogonSettings() {
  const { user } = useUser();

  const [type, setType] = useState(true);

  return (
    <form className={styles.prItem}>
      <div className={type ? styles.dBlock : styles.dNone}>
        <div className={`${styles.dFlex} ${styles.w100}`}>
          <p
            className={`${styles.marginRight16} ${styles.w30} ${styles.fweightBold}`}
          >
            Адрес электронной почты
          </p>
          <p className={styles.w70}>{user?.email}</p>
        </div>

        <div className={`${styles.dFlex} ${styles.w100} ${styles.marginTop16}`}>
          <p
            className={`${styles.marginRight16} ${styles.w30} ${styles.fweightBold}`}
          >
            Дата создания аккаунта
          </p>
          <p className={styles.w70}>{GetDate(user?.creationDate)}</p>
        </div>

        <div className={`${styles.dFlex} ${styles.w100} ${styles.marginTop16}`}>
          <p
            className={`${styles.marginRight16} ${styles.w30} ${styles.fweightBold}`}
          >
            Роль
          </p>
          <p className={styles.w70}>{user?.role.name}</p>
        </div>
        <a
          className={`${styles.dBlock} ${styles.cursorPointer} ${styles.prButton} ${styles.btnhobert} ${styles.marginTop16}`}
          onClick={() => setType(false)}
        >
          Редактировать пароль
        </a>
      </div>
      <div className={!type ? styles.dBlock : styles.dNone}>
        <div
          className={`${styles.dFlex} ${styles.alitCenter}`}
          onClick={() => setType(true)}
        >
          <img src="/strokePurple.png" className={styles.marginRight8} />
          <a className={`${styles.cursorPointer} ${styles.cPrimary}`}>
            Вернуться к предпросмотру
          </a>
        </div>

        <div
          className={`${styles.dFlex} ${styles.alitCenter} ${styles.w100} ${styles.marginTop16}`}
        >
          <p className={`${styles.marginRight16} ${styles.w30}`}>
            Новый пароль
          </p>
          <input
            className={styles.settingInput}
            id="password"
            type="password"
            autoComplete="off"
          />
        </div>

        <div
          className={`${styles.dFlex} ${styles.alitCenter} ${styles.w100} ${styles.marginTop16}`}
        >
          <p className={`${styles.marginRight16} ${styles.w30}`}>
            Подтверждение пароля
          </p>
          <input
            className={styles.settingInput}
            id="reppassword"
            type="password"
            autoComplete="off"
          />
        </div>

        <input
          type="button"
          className={`${styles.settingButton} ${styles.btnhobert} ${styles.marginTop16}`}
          value="Сохранить"
          /*onclick="UpdateLogonSetting('@Model.CurrentUser.Id', this.form.password.value, this.form.reppassword.value)"*/
        />
      </div>
    </form>
  );
}

export default LogonSettings;
