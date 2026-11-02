import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";
import ApplyForm from "./pages/ApplyForm"; // Форма бетін импорттау
import Header from "./components/Header/Header";
import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <Header />

        {/* Навигациялық сілтемелер (NavLink) */}
        <nav style={{ display: "flex", gap: "15px", margin: "20px 0", paddingBottom: "10px", borderBottom: "1px solid #ddd" }}>
          <NavLink 
            to="/" 
            end 
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              color: isActive ? "#0f6b4c" : "#333",
              textDecoration: "none"
            })}
          >
            Home
          </NavLink>
          <NavLink 
            to="/list" 
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              color: isActive ? "#0f6b4c" : "#333",
              textDecoration: "none"
            })}
          >
            List
          </NavLink>
          <NavLink 
            to="/apply" 
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              color: isActive ? "#0f6b4c" : "#333",
              textDecoration: "none"
            })}
          >
            Форма (Apply)
          </NavLink>
        </nav>

        {/* Маршруттар кестесі (Routes) */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/list/:id" element={<Details />} />
          <Route path="/apply" element={<ApplyForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}