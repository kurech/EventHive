import { useUser } from "../../UserContext";
import styles from "../../App.module.scss";
import Header from "../Header";
import Footer from "../Footer";
import LogonSettings from "./LogonSettings";
import { useState } from "react";
import PersonalSettings from "./PersonalSettings";

const ProfileMain: React.FC = () => {
  const { user } = useUser();

  const [selectedType, setSelectedType] = useState(0);

  return (
    <>
      <div className={`${styles.w100} ${styles.dFlex}`}>
        <div className={styles.leftWhiteBar}></div>
        <div className={styles.content}>
          <Header currentUser={user} />
          <div className={`${styles.prAll} ${styles.h100}`}>
            <div className={styles.prLeft}>
              <a
                href=""
                className={`${styles.dBlock} ${styles.fweightBold} ${styles.fontsize18} ${styles.cursorPointer}`}
                onClick={(e) => {
                  e?.preventDefault();
                  setSelectedType(0);
                }}
              >
                Параметры входа
              </a>
              <a
                href=""
                className={`${styles.dBlock} ${styles.fweightBold} ${styles.fontsize18} ${styles.cursorPointer} ${styles.marginTop8}`}
                onClick={(e) => {
                  e?.preventDefault();
                  setSelectedType(1);
                }}
              >
                Личные данные
              </a>
              <a
                href=""
                className={`${styles.dBlock} ${styles.fweightBold} ${styles.fontsize18} ${styles.cursorPointer} ${styles.marginTop8}`}
              >
                Мероприятия
              </a>
            </div>
            <div className={styles.prRight}>
              {selectedType == 0 ? <LogonSettings /> : <PersonalSettings />}
            </div>
          </div>
        </div>
        <div className={styles.rightWhiteBar}></div>
      </div>
      <Footer />
    </>
  );
};

export default ProfileMain;
