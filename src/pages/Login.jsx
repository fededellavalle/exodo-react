import { useState } from "react";
import "../styles/Login.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useSubmitLogin } from "../components/hooks/useSubmitLogin";

export function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const { login, loading, error } = useSubmitLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const success = await login({ user, password });

    if (success) {
      window.location.href = "/dashboard";
    }
  };

  return (
    <>
      <Header />

      <div className="login-container">
        <div className="login-box">
          <h2>Iniciar Sesión</h2>

          {error && <p className="error-message">{error}</p>}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="user" className="form-label">
                Usuario
              </label>
              <input
                id="user"
                className="form-control"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100"
              disabled={loading}
            >
              {loading ? "Ingresando..." : "Iniciar Sesión"}
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}
