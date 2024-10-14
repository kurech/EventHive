import { useEffect, useState } from "react";
import styles from "../../App.module.scss";
import { useUser } from "../../UserContext";
import Cookies from "js-cookie";

function SchoolSettings() {
  const { user, setUser } = useUser();

  const [type, setType] = useState(true);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  async function handleUpdatePersonal() {
    /*try {
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
    }*/
  }

  useEffect(() => {
    if (user != null) {
      setName("dsf");
      setDescription("f2");
    }
  }, []);

  return <></>;
}

export default SchoolSettings;
