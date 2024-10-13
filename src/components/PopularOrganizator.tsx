import styles from "../App.module.scss";

function PopularOrganization() {
  return (
    <div className={styles.events}>
      <p
        className={`${styles.fweightBold} ${styles.fontsize20} ${styles.cursorDefault}`}
      >
        Популярные <span className={styles.cPrimary}>учебные заведения</span>
      </p>
      <div className={`${styles.mCards} ${styles.marginTop16}`}>
        <div
          className={`${styles.oneOfCard} ${styles.cursorPointer} ${styles.hoverBoxShadow}`}
        >
          <img className={styles.oneOfCardPhoto} />
          <p
            className={`${styles.fontsize14} ${styles.fweightBold} ${styles.marginTop8}`}
          >
            @item.School.Name
          </p>
          <p
            className={`${styles.fontsize14} ${styles.marginTop8} ${styles.cPrimary}`}
          >
            gorod
          </p>
        </div>
      </div>
    </div>
  );
}

export default PopularOrganization;
