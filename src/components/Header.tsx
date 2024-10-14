import styles from "../App.module.scss";
import { useUser, User } from "../UserContext";
import Cookies from "js-cookie";

interface Props {
  currentUser?: User | null;
}

function Header({ currentUser }: Props) {
  const { setUser } = useUser();

  const handleLogout = () => {
    setUser(null);
    Cookies.remove("eventhive");
    location.reload();
  };

  if (!currentUser) {
    /* UNDEFINED USER */
    return (
      <div className={styles.header}>
        <div>
          <a
            href="/"
            className={`${styles.fweightBold} ${styles.whtSpaceNowrap} ${styles.fontsize24}`}
          >
            Event <span className={styles.cPrimary}>Hive</span>
          </a>
        </div>
        <div className={`${styles.alitCenter} ${styles.dFlex}`}>
          <a href="/logon/authorization" className={styles.fontsize18}>
            Войти
          </a>
          <input
            type="button"
            value="Регистрация"
            className={`${styles.marginLeft16} ${styles.signupButton} ${styles.btnhobert}`}
          />
        </div>
      </div>
    );
  } else {
    /* ALREADY ACTIVE USER */
    return (
      <div className={styles.header}>
        <div>
          <a
            href="/"
            className={`${styles.fweightBold} ${styles.whtSpaceNowrap} ${styles.fontsize24}`}
          >
            Event <span className={styles.cPrimary}>Hive</span>
          </a>
        </div>
        <div className={`${styles.alitCenter} ${styles.dFlex}`}>
          {currentUser.role.id !== "sdf" ? (
            <div className={`${styles.dFlex} ${styles.alitCenter}`}>
              {currentUser.role.id == "sdf" ? (
                <a href="#" className={`${styles.fontsize18} ${styles.hobert}`}>
                  Мои мероприятия
                </a>
              ) : null}
              <a
                href="/profile"
                className={`${styles.marginLeft16} ${styles.fontsize18} ${styles.hobert}`}
              >
                {currentUser.email}
              </a>
              <input
                type="button"
                value="Выйти"
                className={`${styles.marginLeft16} ${styles.signupButton} ${styles.btnhobert}`}
                onClick={handleLogout}
              />
            </div>
          ) : (
            <a
              className={`${styles.fontsize18} ${styles.cursorDefault} ${styles.fontsize18}`}
            >
              {currentUser.email}
            </a>
          )}
        </div>
      </div>
    );
  }
}

export default Header;
