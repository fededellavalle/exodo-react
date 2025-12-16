import { useState } from "react";

export function useSubmitLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const login = async ({ user, password }) => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost/exodo/php/login.php", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ user, password }),
      });

      const data = await res.json();

      if (!data.success) {
        setError(data.error || "Error al iniciar sesión");
        return false;
      }

      return true;
    } catch {
      setError("Error de conexión");
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
}
