import { useState } from "react";
import { Link } from "react-router-dom";

export default function ApplyForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  function onChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function validate(values) {
    const next = {};
    if (!values.name.trim()) next.name = "Укажите ФИО";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "Некорректный email";
    }
    if (values.phone.trim().length < 10) {
      next.phone = "Телефон слишком короткий";
    }
    if (values.message.trim().length < 10) {
      next.message = "Сообщение должно быть не менее 10 символов";
    }
    return next;
  }

  function onSubmit(e) {
    e.preventDefault(); // Беттің қайта жүктелуін болдырмау[cite: 7, 9, 10]
    const next = validate(form);
    setErrors(next);

    if (Object.keys(next).length > 0) return;

    setSent(true);
    setErrors({});
    setForm({ name: "", email: "", phone: "", message: "" });
  }

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
      <h2>Өтінім беру формасы (Студент: [Аты-Жөніңіз])[cite: 9]</h2>
      <div style={{ marginBottom: "15px" }}>
        <Link to="/" style={{ color: "#0f6b4c", textDecoration: "underline" }}>← Басты бетке қайту</Link>
      </div>

      <form onSubmit={onSubmit} noValidate>
        <div style={{ marginBottom: "12px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>ФИО:</label>
          <input
            name="name"
            value={form.name}
            onChange={onChange}
            style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
          />
          {errors.name && <p style={{ color: "red", fontSize: "0.85rem", marginTop: "3px" }}>{errors.name}</p>}
        </div>

        <div style={{ marginBottom: "12px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Email:</label>
          <input
            name="email"
            value={form.email}
            onChange={onChange}
            style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
          />
          {errors.email && <p style={{ color: "red", fontSize: "0.85rem", marginTop: "3px" }}>{errors.email}</p>}
        </div>

        <div style={{ marginBottom: "12px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Телефон:</label>
          <input
            name="phone"
            value={form.phone}
            onChange={onChange}
            style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
          />
          {errors.phone && <p style={{ color: "red", fontSize: "0.85rem", marginTop: "3px" }}>{errors.phone}</p>}
        </div>

        <div style={{ marginBottom: "12px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Хабарлама:</label>
          <textarea
            name="message"
            value={form.message}
            onChange={onChange}
            style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc", minHeight: "80px" }}
          />
          {errors.message && <p style={{ color: "red", fontSize: "0.85rem", marginTop: "3px" }}>{errors.message}</p>}
        </div>

        <button type="submit" style={{ padding: "10px 20px", background: "#0f6b4c", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
          Отправить[cite: 9]
        </button>

        {sent && <p style={{ color: "green", marginTop: "15px", fontWeight: "bold" }}>Заявка отправлена[cite: 9]!</p>}
      </form>
    </div>
  );
}