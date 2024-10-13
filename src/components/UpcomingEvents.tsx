import styles from "../App.module.scss";

function UpcomingEvents() {
  return (
    <div className={styles.events}>
      <p
        className={`${styles.fweightBold} ${styles.fontsize20} ${styles.cursorDefault}`}
      >
        Предстоящие <span className={styles.cPrimary}>мероприятия</span>
      </p>
      <div className={`${styles.mCards} ${styles.marginTop16}`}>
        <div
          className={`${styles.oneOfCard} ${styles.cursorPointer} ${styles.hoverBoxShadow}`}
        >
          <img className={styles.oneOfCardPhoto} />
          <p
            className={`${styles.fontsize14} ${styles.fweightBold} ${styles.marginTop8}`}
          >
            @ev.Name
          </p>
          <p
            className={`${styles.fontsize14} ${styles.marginTop8} ${styles.cPrimary}`}
          >
            @ev.DateTime
          </p>
        </div>
      </div>
      <div
        className={`${styles.dFlex} ${styles.jscntCenter} ${styles.marginTop16}`}
      >
        <input
          type="button"
          className={`${styles.signUpButton} ${styles.btnhobert}`}
          value="Больше.."
        />
      </div>
    </div>
  );
}

export default UpcomingEvents;
