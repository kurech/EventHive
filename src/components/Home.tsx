import { useUser } from "../UserContext";
import styles from "../App.module.scss";
import Header from "./Header";
import SearchEvents from "./SearchEvents";
import UpcomingEvents from "./UpcomingEvents";
import PopularOrganization from "./PopularOrganizator";
import Footer from "./Footer";

const Home: React.FC = () => {
  const { user } = useUser();

  return (
    <>
      <div className={`${styles.w100} ${styles.dFlex}`}>
        <div className={styles.leftWhiteBar}></div>
        <div className={styles.content}>
          <Header currentUser={user} />
          <div>
            <img
              src="../unsplash_F2KRf_QfCqw.png"
              alt="image"
              className={`${styles.mainPhoto} ${styles.z1}`}
            />
            <SearchEvents />
            <UpcomingEvents />
            <PopularOrganization />
          </div>
        </div>
        <div className={styles.rightWhiteBar}></div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
