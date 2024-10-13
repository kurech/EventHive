import { useState } from "react";
import styles from "../App.module.scss";

function SearchEvents() {
  const [selectedEventType, setSelectedEventType] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  function search() {
    fetch("https://localhost:7225/api/User/Test")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
    console.log(selectedEventType + " " + selectedCity + " " + selectedDate);
  }

  return (
    <div className={`${styles.fBack} ${styles.alitCenter}`}>
      <div
        className={`${styles.w29} ${styles.marginRight1Per} ${styles.marginLeft1Per}`}
      >
        <p
          className={`${styles.cWhite} ${styles.marginBottom8} ${styles.fontsize16}`}
        >
          В поиске
        </p>
        <select
          name="type"
          id="evtype"
          className={styles.searchInput}
          onChange={(e) => setSelectedEventType(e.target.value)}
          value={selectedEventType}
        >
          <option value="-1" defaultValue={-1}>
            Выберите тип мероприятия
          </option>
          <option value="0">Спортивные мероприятия</option>
          <option value="1">Культурные мероприятия</option>
          <option value="2">Конференции и семинары</option>
          <option value="3">Экскурсии</option>
          <option value="4">День открытых дверей</option>
          <option value="5">Выпускные вечера</option>
        </select>
      </div>

      <div
        className={`${styles.w29} ${styles.marginRight1Per} ${styles.marginLeft1Per}`}
      >
        <p
          className={`${styles.cWhite} ${styles.marginBottom8} ${styles.fontsize16}`}
        >
          Местоположение
        </p>
        <select
          name="city"
          id="evcity"
          className={styles.searchInput}
          onChange={(e) => setSelectedCity(e.target.value)}
          value={selectedCity}
        >
          <option value="-1" defaultValue={-1}>
            Выберите город
          </option>
          <option value="asd2-dsad031-32fds">Казань</option>
          <option value="09sd-sdf03fs-lds12">Москва</option>
        </select>
      </div>

      <div
        className={`${styles.w29} ${styles.marginRight1Per} ${styles.marginLeft1Per}`}
      >
        <p
          className={`${styles.cWhite} ${styles.marginBottom8} ${styles.fontsize16}`}
        >
          Когда
        </p>
        <input
          type="date"
          id="evdate"
          className={styles.searchInput}
          placeholder="Выберите дату"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>

      <div
        className={`${styles.w5} ${styles.marginRight1Per} ${styles.marginLeft1Per}`}
      >
        <div className={styles.searchButton} onClick={search}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${styles.dFlex} ${styles.margin0Auto}`}
          >
            <path
              d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
              stroke="#F8F8FA"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.9999 20.9999L16.6499 16.6499"
              stroke="#F8F8FA"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default SearchEvents;
