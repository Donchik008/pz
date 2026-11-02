import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1 style={{ fontSize: "3rem", color: "#c45c26" }}>404</h1>
      <h2>Бет табылмады (NotFound)</h2>
      <p style={{ margin: "15px 0", color: "#666" }}>Сіз іздеген мекенжай қолданыста жоқ немесе қате терілді.</p>
      <Link to="/" style={{ color: "#0f6b4c", fontWeight: "bold", textDecoration: "underline" }}>
        Басты бетке оралу
      </Link>
    </div>
  );
}