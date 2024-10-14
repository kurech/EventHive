import { useEffect, useState } from "react";
import styles from "../../App.module.scss";
import { useUser } from "../../UserContext";
import Cookies from "js-cookie";

function PersonalSettings() {
  const { user, setUser } = useUser();

  const [type, setType] = useState(true);

  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");

  async function handleUpdatePersonal() {
    try {
      if (lastName != "" || firstName != "" || middleName != "") {
        const token = Cookies.get("eventhive");

        fetch(
          `https://localhost:7225/api/User/UpdatePersonal?lastName=${lastName}&firstName=${firstName}&middleName=${middleName}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.statusCode === 200) {
              setUser(data.value.user);
              alert(data.value.message);
            }
          })
          .catch((error) => {});
      } else {
        alert("Заполните хотя бы одно поле!");
      }
    } catch (error) {
      console.error("Ошибка при изменении данных:", error);
    }
  }

  useEffect(() => {
    if (user != null) {
      setLastName(user.lastName);
      setFirstName(user.firstName);
      setMiddleName(user.middleName);
    }
  }, []);

  return (
    <form className={styles.prItem}>
      <div className={type ? styles.dBlock : styles.dNone}>
        <div className={`${styles.dFlex} ${styles.w100}`}>
          <p
            className={`${styles.marginRight16} ${styles.w30} ${styles.fweightBold}`}
          >
            Фамилия
          </p>
          <p className={styles.w70}>{user?.lastName}</p>
        </div>

        <div className={`${styles.dFlex} ${styles.w100} ${styles.marginTop16}`}>
          <p
            className={`${styles.marginRight16} ${styles.w30} ${styles.fweightBold}`}
          >
            Имя
          </p>
          <p className={styles.w70}>{user?.firstName}</p>
        </div>

        <div className={`${styles.dFlex} ${styles.w100} ${styles.marginTop16}`}>
          <p
            className={`${styles.marginRight16} ${styles.w30} ${styles.fweightBold}`}
          >
            Отчество
          </p>
          <p className={styles.w70}>{user?.middleName}</p>
        </div>
        <a
          className={`${styles.dBlock} ${styles.cursorPointer} ${styles.prButton} ${styles.btnhobert} ${styles.marginTop16}`}
          onClick={() => setType(false)}
        >
          Редактировать
        </a>
      </div>
      <div className={!type ? styles.dBlock : styles.dNone}>
        <div className={`${styles.dFlex} ${styles.alitCenter}`}>
          <img src="/strokePurple.png" className={styles.marginRight8} />
          <a
            className={`${styles.cursorPointer} ${styles.cPrimary}`}
            onClick={() => setType(true)}
          >
            Вернуться к предпросмотру
          </a>
        </div>

        <div
          className={`${styles.dFlex} ${styles.alitCenter} ${styles.w100} ${styles.marginTop16}`}
        >
          <p className={`${styles.marginRight16} ${styles.w30}`}>Фамилия</p>
          <input
            className={styles.settingInput}
            type="text"
            autoComplete="off"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div
          className={`${styles.dFlex} ${styles.alitCenter} ${styles.w100} ${styles.marginTop16}`}
        >
          <p className={`${styles.marginRight16} ${styles.w30}`}>Имя</p>
          <input
            className={styles.settingInput}
            type="text"
            autoComplete="off"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div
          className={`${styles.dFlex} ${styles.alitCenter} ${styles.w100} ${styles.marginTop16}`}
        >
          <p className={`${styles.marginRight16} ${styles.w30}`}>Отчество</p>
          <input
            className={styles.settingInput}
            type="text"
            autoComplete="off"
            value={middleName}
            onChange={(e) => setMiddleName(e.target.value)}
          />
        </div>

        <input
          type="button"
          className={`${styles.settingButton} ${styles.btnhobert} ${styles.marginTop16}`}
          value="Сохранить"
          onClick={handleUpdatePersonal}
        />
      </div>
    </form>
  );
}

export default PersonalSettings;
