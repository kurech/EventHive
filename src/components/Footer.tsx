import styles from "../App.module.scss";

function Footer() {
  return (
    <div className={styles.w100}>
      <footer>
        <div className={`${styles.footContent} ${styles.cursorDefault}`}>
          <p
            className={`${styles.fontsize32} ${styles.fweightBold} ${styles.cWhite} ${styles.dFlex} ${styles.jscntCenter}`}
          >
            Event&nbsp;<span className={styles.cPrimary}>Hive</span>
          </p>
          <div
            className={`${styles.dFlex} ${styles.margin0Auto} ${styles.jscntSpBetw} ${styles.marginTop16} ${styles.footText}`}
          >
            <p
              className={`${styles.cWhite} ${styles.wMinCnt} ${styles.cursorPointer}`}
            >
              Home
            </p>
            <p
              className={`${styles.cWhite} ${styles.wMinCnt} ${styles.cursorPointer}`}
            >
              About
            </p>
            <p
              className={`${styles.cWhite} ${styles.wMinCnt} ${styles.whtSpaceNowrap} ${styles.cursorPointer}`}
            >
              Get in touch
            </p>
            <p
              className={`${styles.cWhite} ${styles.wMinCnt} ${styles.cursorPointer}`}
            >
              FAQs
            </p>
          </div>
          <hr className={styles.marginTop16} />
          <div className={`${styles.dFlex} ${styles.jscntSpBetw}`}>
            <p className={styles.cWhite}>EventHive &copy; 2024</p>
            <div>
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
