import { useState } from "react";
import { useUser, User } from "../../UserContext";
import styles from "../../App.module.scss";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Auth: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useUser();

  const handleAuthorize = (userData: User) => {
    setUser(userData);
  };

  const navigate = useNavigate();

  async function AuthorizationRequest() {
    try {
      if (email != "" && password != "") {
        const response = await fetch(
          `https://localhost:7225/api/User/Authorize?email=${email}&password=${password}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Ошибка: ${response.statusText}`);
        }

        const result = await response.json();

        if (result.statusCode !== 200) {
          alert(result.value);
        } else {
          alert("Успешная авторизация!");
          const { token, user } = result.value;
          Cookies.set("eventhive", token, { expires: 1 });
          handleAuthorize(user);
          navigate("/");
        }
      } else {
        alert("Введите почту и пароль!");
      }
    } catch (error) {
      console.error("Ошибка при авторизации:", error);
    }
  }

  return (
    <div className={styles.overflowyHidden}>
      <div className={`${styles.w100} ${styles.dFlex}`}>
        <div
          className={`${styles.signLeftBar} ${styles.alitCenter} ${styles.dFlex}`}
        >
          <form action="post" className={styles.logonContainer}>
            <div className={styles.taCenter}>
              <p className={`${styles.fontsize24} ${styles.fweightBold}`}>
                Event <span className={styles.cPrimary}>Hive</span>
              </p>
              <p
                className={`${styles.fontsize28} ${styles.fweightBold} ${styles.marginTop16}`}
              >
                Войдите в Event Hive
              </p>
            </div>
            <div className={`${styles.margin0Auto} ${styles.marginTop16}`}>
              <p className={`${styles.dInlineBlock} ${styles.marginTop16}`}>
                АДРЕС ЭЛЕКТРОННОЙ ПОЧТЫ
              </p>
              <input
                type="text"
                id="email"
                placeholder="Введите ваш адрес электронной почты"
                className={`${styles.logonInput} ${styles.marginTop8}`}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off"
              />
              <p className={`${styles.dInlineBlock} ${styles.marginTop16}`}>
                ПАРОЛЬ
              </p>
              <input
                type="password"
                id="password"
                placeholder="Введите ваш пароль"
                className={`${styles.logonInput} ${styles.marginTop8}`}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="off"
              />
            </div>
            <div className={`${styles.margin0Auto} ${styles.w40}`}>
              <input
                type="button"
                value="Продолжить"
                className={styles.logonButton}
                onClick={AuthorizationRequest}
              />
            </div>
            <div className={`${styles.marginTop16} ${styles.taCenter}`}>
              <span>
                Еще нет аккаунта?&#32;
                <a href="/logon/registration">Регистрация</a>
              </span>
            </div>
            <div className={`${styles.marginTop8} ${styles.taCenter}`}>
              <span>
                Забыли пароль?&#32;<a href="/logon/recovery">Восстановить</a>
              </span>
            </div>
            <div className={`${styles.marginTop8} ${styles.taCenter}`}>
              <a href="/">Продолжить без авторизации</a>
            </div>
          </form>
        </div>
        <div className={styles.signRightBar}>
          <img src="../../../signup.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Auth;
