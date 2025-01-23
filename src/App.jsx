import { useState } from "react";
import styles from "./assets/Card.module.css";
import "./App.css";
import { useEffect } from "react";

function App() {
  const mockData = [
    { username: "Ola Normann", email: "ola.normann@norge.no" },
    { username: "Torleif", email: "torleif@kodehode.no" },
    { username: "Jan Egil", email: "jan.egil@kodehode.no" },
    { username: "Sander", email: "sander@kodehode.no" },
  ];
  function addNewData(e) {
    const { name, value } = e.target;
    setNewData((prev) => ({ ...prev, [name]: value }));
  }
  const [data, setData] = useState(mockData);
  const [newData, setNewData] = useState({});
  return (
    <div>
      <section className={styles.userSublist}>
        <h2>her kan du submite en ny brukere</h2>
        <p>vill du ha tilgang til denne serveren?</p>
        <input
          type="text"
          placeholder="namn..."
          onChange={addNewData}
          name="username"
        ></input>
        <input
          type="text"
          placeholder="eksempel@norgesmail.no"
          onChange={addNewData}
          name="email"
        ></input>
        <button onClick={() => setData((prev) => [newData, ...prev])}>
          ny bruker
        </button>
      </section>
      <div className={styles.userlist}>
        <div>
          <h1>brukere som er i systemet </h1>
          {data.map((data, i) => {
            return (
              <div className={styles.card}>
                <div key={i}>
                  <h2>{data.username}</h2>
                  <p>{data.email}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
