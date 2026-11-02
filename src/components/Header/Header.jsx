import { Link } from "react-router-dom";
import { useApp } from "../../store/AppContext";

export default function Header() {
  const { user, favorites, theme, toggleTheme } = useApp();

  return (
    <header style={{ 
      display: "flex", 
      justifyContent: "space-between", 
      alignItems: "center", 
      padding: "15px 20px", 
      background: theme === "dark" ? "#222" : "#f1f1f1",
      color: theme === "dark" ? "#fff" : "#000",
      borderRadius: "8px",
      marginBottom: "20px"
    }}>
      <div>
        {/* Пайдаланушы аты Header-де көрініп тұрады */}
        <span style={{ fontWeight: "bold", marginRight: "20px" }}>
          👤 Пайдаланушы: {user.name} ({user.role})
        </span>
        
        {/* Таңдаулылар санағы немесе сілтемесі */}
        <span style={{ background: "#0f6b4c", color: "#fff", padding: "4px 8px", borderRadius: "12px", fontSize: "0.85rem" }}>
          ⭐ Таңдаулылар: {favorites.length}
        </span>
      </div>

      <div>
        <button 
          onClick={toggleTheme} 
          style={{ padding: "6px 12px", cursor: "pointer", borderRadius: "4px", border: "none" }}
        >
          Theme: {theme}
        </button>
      </div>
    </header>
  );
}