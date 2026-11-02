import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Басты бет (Home)</h1>
      <p><b>Студент:</b> [Аты-Жөніңіз]</p>
      <p>Бұл React және Vite негізінде жасалған SPA кейс-жобасы.</p>
      <div style={{ marginTop: "15px" }}>
        <Link to="/list" style={{ padding: "10px 15px", background: "#0f6b4c", color: "#fff", textDecoration: "none", borderRadius: "5px" }}>
          Тізімге өту (List)
        </Link>
      </div>
    </div>
  );
}