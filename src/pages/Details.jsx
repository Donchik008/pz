import { useParams, Link } from "react-router-dom";

export default function Details() {
  const { id } = useParams(); // URL-дағы id алу[cite: 4, 5]

  return (
    <div style={{ padding: "20px" }}>
      <h1>Толық мәлімет (Details)</h1>
      <p style={{ fontSize: "1.2rem", margin: "15px 0" }}>
        Таңдалған өтінімнің ID нөмірі: <b>#{id}</b>
      </p>
      <p style={{ color: "#555" }}>Бұл бетте берілген өтінімнің толық сипаттамасы мен ақпараты көрсетіледі.</p>
      
      <div style={{ marginTop: "20px" }}>
        <Link to="/list" style={{ padding: "8px 15px", background: "#333", color: "#fff", textDecoration: "none", borderRadius: "5px" }}>
          ← Тізімге қайту
        </Link>
      </div>
    </div>
  );
}