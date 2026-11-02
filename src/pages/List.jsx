import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Axios-ты импорттау
import Button from "../components/Button/Button";
import styles from "../App.module.css";

export default function List() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [text, setText] = useState("");

  // Деректерді API-дан axios арқылы жүктеу функциясы
  const fetchItems = async () => {
    setLoading(true);
    setError("");
    try {
      // Мысал үшін ашық API қолданамыз (немесе өз JSON-ыңызды)
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=6");
      // API деректерін кейске бейімдеу
     const formattedData = response.data.map((item, index) => ({
  id: item.id,
  title: `Өтінім #${index + 1}: Жүйені тексеру`, // Өз сөздеріңізді жазуға болады
  done: false
}));
      setItems(formattedData);
    } catch (err) {
      setError("Деректерді жүктеу кезінде қате орын алды. Қайталап көріңіз.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  function addItem() {
    const title = text.trim();
    if (!title) return;
    setItems([{ id: Date.now(), title, done: false }, ...items]);
    setText("");
  }

  function toggleItem(id) {
    setItems(
      items.map((it) => (it.id === id ? { ...it, done: !it.done } : it))
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Өтінімдер тізімі — Axios (Топ B)[cite: 12]</h2>
      <p style={{ fontSize: "0.9rem", color: "#666" }}>Команда: B | Қатысушы: [Аты-Жөніңіз]</p>

      <div style={{ marginBottom: "15px" }}>
        <Link to="/" style={{ color: "#0f6b4c", textDecoration: "underline" }}>← Басты бетке қайту</Link>
      </div>

      {/* 1. Жүктелу күйі (Loading) */}
      {loading && <p style={{ fontWeight: "bold", color: "#0066cc" }}>⏳ Деректер жүктелуде (Axios)...</p>}

      {/* 3. Қате туралы хабар және қайта сұрау батырмасы */}
      {error && (
        <div style={{ padding: "10px", background: "#ffe6e6", border: "1px solid red", borderRadius: "5px", marginBottom: "15px" }}>
          <p style={{ color: "red", marginBottom: "8px" }}>{error}</p>
          <Button variant="primary" onClick={fetchItems}>Қайта сұрау (Повторить)</Button>
        </div>
      )}

      {/* 2. Сәтті жүктеуден кейінгі элементтер (Data) */}
      {!loading && !error && (
        <>
          <div style={{ marginBottom: "15px" }}>
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Жаңа жазба қосу..."
              style={{ padding: "8px", marginRight: "8px", width: "250px", borderRadius: "8px", border: "1px solid #ccc" }}
            />
            <Button variant="primary" onClick={addItem}>Қосу</Button>
          </div>

          <div className={styles.grid}>
            {items.map((it) => (
              <div
                key={it.id}
                style={{
                  background: "#fff",
                  padding: "20px",
                  borderRadius: "10px",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
                  borderLeft: it.done ? "5px solid #0f6b4c" : "5px solid #c45c26",
                }}
              >
                <h3 onClick={() => toggleItem(it.id)} style={{ cursor: "pointer" }}>
                  {it.done ? "✅" : "⬜"} {it.title}
                </h3>
                <div style={{ marginTop: "15px" }}>
                  {/* 4. Details бетіне өту (ID арқылы) */}
                  <Link to={`/list/${it.id}`} style={{ color: "#c45c26", fontWeight: "bold", textDecoration: "none" }}>
                    Толығырақ көру →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}