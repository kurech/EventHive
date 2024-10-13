import { useState } from "react";
import styles from "../../App.module.scss";
import { useNavigate } from "react-router-dom";

function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const navigate = useNavigate();

  async function AddUser() {
    if (password.length >= 8) {
      if (password == repeatPassword) {
        const response = await fetch(
          `https://localhost:7225/api/User/Add?email=${email}&password=${password}`,
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

        if (result.statusCode === 400) {
          alert(result.value);
        } else {
          alert(
            `Пользователь ${result.value.email} успешно зарегистрировался!`
          );
          navigate("/logon/authorization");
        }
      } else {
        alert("Пароли отличаются");
      }
    } else {
      alert("Введите пароль больше или равную 8 символам");
    }
  }

  return (
    <div className={styles.overflowyHidden}>
      <div className={`${styles.w100} ${styles.dFlex}`}>
        <div className={styles.logonLeftBar}>
          <img src="../../../signin.png" alt="" />
        </div>
        <div
          className={`${styles.logonRightBar} ${styles.alitCenter} ${styles.dFlex}`}
        >
          <form action="post" className={styles.logonContainer}>
            <div className={styles.taCenter}>
              <p className={`${styles.fontsize24} ${styles.fweightBold}`}>
                Event <span className={styles.cPrimary}>Hive</span>
              </p>
              <p
                className={`${styles.fontsize28} ${styles.fweightBold} ${styles.marginTop16}`}
              >
                Зарегистрируйтесь в Event Hive
              </p>
            </div>
            <div className={`${styles.margin0Auto} ${styles.marginTop16}`}>
              <p className={`${styles.dInlineBlock} ${styles.marginTop16}`}>
                АДРЕС ЭЛЕКТРОННОЙ ПОЧТЫ
              </p>
              <input
                type="email"
                id="email"
                placeholder="Введите ваш адрес электронной почты"
                className={`${styles.logonInput} ${styles.marginTop8}`}
                value={email}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="off"
              />
              <p className={`${styles.dInlineBlock} ${styles.marginTop16}`}>
                ПОДТВЕРЖДЕНИЕ ПАРОЛЯ
              </p>
              <input
                type="password"
                id="repeatpassword"
                placeholder="Подтвердите ваш пароль"
                className={`${styles.logonInput} ${styles.marginTop8}`}
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
                autoComplete="off"
              />
            </div>
            <div className={`${styles.margin0Auto} ${styles.w40}`}>
              <input
                type="button"
                value="Продолжить"
                className={styles.logonButton}
                onClick={AddUser}
              />
            </div>
            <div className={`${styles.marginTop16} ${styles.taCenter}`}>
              <span>
                Войти в свой профиль?&#32;
                <a href="/logon/authorization">Авторизация</a>
              </span>
            </div>
            <div className={`${styles.marginTop8} ${styles.taCenter}`}>
              <a href="/">Продолжить без регистрации</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;
